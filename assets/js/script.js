const section = document.querySelectorAll('.section-container');
const mainTitle = document.querySelectorAll('#title-container');
const title = document.querySelectorAll('.title-container');
const image = document.querySelectorAll('.image-container');
const text = document.querySelectorAll('.text-container');

ScrollReveal().reveal(mainTitle, {
  origin: 'left',
  distance: '100%',
  delay: 500,
  duration: 1000,
  reset: true
})

section.forEach(div => {
  ScrollReveal().reveal(div, {
    scale: 0.5,
    duration: 1000,
    reset: true,
    delay: 500
  });
});

title.forEach(div => {
  ScrollReveal().reveal(div, {
    scale: 1.5,
    duration: 500,
    reset: true,
    delay: 1000
  });
});

image.forEach(div => {
  ScrollReveal().reveal(div, {
    scale: 1.5,
    duration: 500,
    reset: true,
    delay: 1200
  });
});

text.forEach(div => {
  ScrollReveal().reveal(div, {
    origin: 'bottom',
    duration: 500,
    distance: '100%',
    reset: true,
    delay: 1400
  });
});