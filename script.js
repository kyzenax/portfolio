const canvas = document.getElementById('network-canvas');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const config = {
  nodeCount: 80,
  maxVelocity: 0.4,
  connectionDistance: 180,
  labelProbability: 0.16,
  parallaxStrength: 0.015,
};

const labels = ['JavaScript', 'CSS', 'UI/UX', 'SEO', 'Analytics', 'Hosting', 'WebGL', 'Motion', 'React', 'Svelte', 'Next.js'];

const pointer = { x: width / 2, y: height / 2 };

class Node {
  constructor() {
    this.reset();
    this.mass = Math.random() * 0.6 + 0.4;
    this.label = Math.random() < config.labelProbability ? labels[Math.floor(Math.random() * labels.length)] : null;
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * config.maxVelocity + 0.05;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // gentle attraction toward pointer
    const dx = pointer.x - this.x;
    const dy = pointer.y - this.y;
    this.vx += dx * 0.00002;
    this.vy += dy * 0.00002;

    // boundaries with wrap
    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;
  }
}

let nodes = Array.from({ length: config.nodeCount }, () => new Node());

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

window.addEventListener('resize', resize);
window.addEventListener('pointermove', (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  const offsetX = (event.clientX / width - 0.5) * 20;
  const offsetY = (event.clientY / height - 0.5) * 20;
  document.querySelectorAll('.glow').forEach((glow) => {
    glow.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});

function draw() {
  ctx.clearRect(0, 0, width, height);

  // connections
  ctx.lineWidth = 1;
  nodes.forEach((node, i) => {
    for (let j = i + 1; j < nodes.length; j++) {
      const other = nodes[j];
      const dx = node.x - other.x;
      const dy = node.y - other.y;
      const dist = Math.hypot(dx, dy);
      if (dist < config.connectionDistance) {
        const alpha = 1 - dist / config.connectionDistance;
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * alpha})`;
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(other.x, other.y);
        ctx.stroke();
      }
    }
  });

  // nodes
  nodes.forEach((node) => {
    ctx.fillStyle = config.nodeColor || '#ff7555';
    ctx.beginPath();
    ctx.arc(node.x, node.y, 3.2, 0, Math.PI * 2);
    ctx.fill();

    if (node.label) {
      ctx.font = '12px "Manrope", sans-serif';
      ctx.fillStyle = '#f6c9a3';
      ctx.fillText(node.label, node.x + 8, node.y - 8);
    }
  });
}

function update() {
  nodes.forEach((node) => node.update());
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();

// reveal animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// smooth scrolling
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
    navLinksContainer.classList.remove('is-open');
  });
});

// mobile nav toggle
const navLinksContainer = document.getElementById('nav-links');
const navToggle = document.querySelector('.nav__toggle');
navToggle.addEventListener('click', () => {
  navLinksContainer.classList.toggle('is-open');
});

document.addEventListener('click', (event) => {
  if (!navLinksContainer.contains(event.target) && !navToggle.contains(event.target)) {
    navLinksContainer.classList.remove('is-open');
  }
});

// prevent form submission default for demo
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
  form.querySelector('button').textContent = 'Sent ✓';
  setTimeout(() => {
    form.querySelector('button').textContent = 'Submit';
  }, 2000);
});

// parallax for sections
window.addEventListener('scroll', () => {
  const parallaxIntensity = 0.06;
  const offset = window.scrollY * parallaxIntensity;
  canvas.style.transform = `translateY(${offset}px)`;
});
