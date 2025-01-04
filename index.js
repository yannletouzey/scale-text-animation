export default function moveText(text) {
  const letters = text.innerText.split('');
  text.innerText = '';
  letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.classList.add('move-text-animation');
    span.innerText = letter;
    text.append(span);
    span.style.transition = `translate 0.5s ease ${index * 0.03}s`;
    span.style.display = 'inline-block';
    if (letter === ' ') {
      span.classList.add('space');
      document.querySelectorAll('.space').forEach(space => {
        space.style.marginLeft = '0.3rem'
      })
    }
  });
  const spans = text.querySelectorAll('.move-text-animation');
  text.addEventListener('mouseenter', () => {
    spans.forEach((span, index) => {
      span.style.transition = `translate 0.5s ease ${index * 0.03}s`;
      span.style.translate = `5px 0`;
    });
  });
  text.addEventListener('mouseleave', () => {
    spans.forEach((span, index) => {
      const reverseIndex = spans.length - 1 - index;
      span.style.transition = `translate 0.5s ease ${reverseIndex * 0.03}s`;
      span.style.translate = `0 0`;
    });
  });
}