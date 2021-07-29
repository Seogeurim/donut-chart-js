function drawPieSlice(
  ctx,
  centerX,
  centerY,
  radius,
  startAngle,
  endAngle,
  holeSize,
  color,
) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
  ctx.arc(centerX, centerY, radius * holeSize, endAngle, startAngle, true);
  ctx.closePath();
  ctx.fill();
}

class DonutChart {
  constructor(canvas, options) {
    this.canvas = canvas;
    this.options = options;
    this.ctx = null;

    if (this.canvas.getContext) {
      this.ctx = this.canvas.getContext('2d');
      this.draw();
    } else {
      // canvas-unsupported code here
    }
  }

  draw() {
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

      this.animateDraw(
        startAngle,
        sliceAngle,
        holeSize || 0,
        colors[colorIndex % colors.length],
        0,
      );

      startAngle += sliceAngle;
      colorIndex += 1;
    });
  }

  animateDraw(startAngle, sliceAngle, holeSize, color, pct) {
    drawPieSlice(
      this.ctx,
      this.canvas.width / 2,
      this.canvas.height / 2,
      Math.min(this.canvas.width / 2, this.canvas.height / 2),
      startAngle,
      startAngle + (sliceAngle * pct) / 100,
      holeSize,
      color,
    );

    if (pct < 100)
      requestAnimationFrame(() =>
        this.animateDraw(startAngle, sliceAngle, holeSize, color, pct + 1),
      );
  }
}

export default DonutChart;
