// script.js
import anime from 'animejs';

anime({
  targets: '.page-loader',
  opacity: [0, 1],
  scale: [0.5, 1],
  duration: 2000,
  easing: 'easeInOut',
});