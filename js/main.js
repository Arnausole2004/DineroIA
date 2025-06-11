Perfecto, Peke. Aquí tienes tu JS con la misma estructura y funcionalidad, pero adaptado con un toque personalizado para tu web "Cómo ganar dinero con la IA":

```js
// Inicializa animaciones AOS solo una vez por elemento
AOS.init({ once: true });

// Suaviza el scroll para enlaces internos que comienzan con #
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const canvas = document.getElementById('network');
const ctx = canvas.getContext('2d');

let points = [];
let width, height;

function resizeCanvas() {
  width = canvas.width = canvas.clientWidth;
  height = canvas.height = canvas.clientHeight;
}

function initPoints() {
  points = [];
  for (let i = 0; i < 50; i++) {
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    });
  }
}

function distance(p1, p2) {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
}

function draw() {
  ctx.clearRect(0, 0, width, height);

  // Draw connections
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dist = distance(points[i], points[j]);
      if (dist < 120) {
        ctx.strokeStyle = `rgba(0, 255, 0, ${1 - dist / 120})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw points
  points.forEach(p => {
    ctx.fillStyle = 'lime';
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  // Update points position
  points.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  });

  requestAnimationFrame(draw);
}

function start() {
  resizeCanvas();
  initPoints();
  draw();
}

window.addEventListener('resize', () => {
  resizeCanvas();
  initPoints();
});

start();
```
