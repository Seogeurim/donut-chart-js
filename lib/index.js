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
      this.sortData();
      this.draw();
    } else {
      // canvas-unsupported code here
    }
  }

  sortData() {
    const { data } = this.options;

    data.sort((a, b) => {
      return b.value - a.value;
    });
  }

  draw() {
    const { data, holeSize, animationSpeed } = this.options;

    let totalValue = 0;
    data.forEach(({ value }) => {
      totalValue += value;
    });

    let startAngle = Math.PI * 1.5;
    data.forEach(({ value, color }) => {
      const sliceAngle = (2 * Math.PI * value) / totalValue;
      this.animateDraw(
        startAngle,
        sliceAngle,
        holeSize || 0,
        color,
        0,
        100 * (animationSpeed || 1),
      );

      startAngle += sliceAngle;
    });
  }

  animateDraw(startAngle, sliceAngle, holeSize, color, pct, pctMax) {
    drawPieSlice(
      this.ctx,
      this.canvas.width / 2,
      this.canvas.height / 2,
      Math.min(this.canvas.width / 2, this.canvas.height / 2),
      startAngle,
      startAngle + (sliceAngle * pct) / pctMax,
      holeSize,
      color,
    );

    if (pct < pctMax)
      requestAnimationFrame(() =>
        this.animateDraw(
          startAngle,
          sliceAngle,
          holeSize,
          color,
          pct + 1,
          pctMax,
        ),
      );
  }
}

export default DonutChart;
