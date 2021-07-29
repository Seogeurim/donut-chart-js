function drawPieSlice(
  ctx,
  centerX,
  centerY,
  radius,
  startAngle,
  endAngle,
  color,
) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
}

class DonutChart {
  constructor(canvas, options) {
    this.canvas = canvas;
    this.options = options;

    if (this.canvas.getContext) {
      const ctx = this.canvas.getContext('2d');
      this.draw(ctx);
    } else {
      // canvas-unsupported code here
    }
  }

  draw(ctx) {
    const { data, colors, holeSize } = this.options;

    let totalValue = 0;
    Object.keys(data).forEach(key => {
      totalValue += data[key];
    });

    let startAngle = Math.PI * 1.5;
    let colorIndex = 0;
    Object.keys(data).forEach(key => {
      const value = data[key];
      const sliceAngle = (2 * Math.PI * value) / totalValue;

      drawPieSlice(
        ctx,
        this.canvas.width / 2,
        this.canvas.height / 2,
        Math.min(this.canvas.width / 2, this.canvas.height / 2),
        startAngle,
        startAngle + sliceAngle,
        colors[colorIndex % colors.length],
      );

      startAngle += sliceAngle;
      colorIndex += 1;
    });

    if (holeSize) {
      drawPieSlice(
        ctx,
        this.canvas.width / 2,
        this.canvas.height / 2,
        holeSize * Math.min(this.canvas.width / 2, this.canvas.height / 2),
        0,
        2 * Math.PI,
        '#ffffff',
      );
    }
  }
}

export default DonutChart;
