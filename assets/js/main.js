document.querySelectorAll('.accordion-content').forEach(content => {
  content.style.maxHeight = 0;
});

document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle('active');

    if(button.classList.contains('active')){
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      button.textContent = '-';
    }else {
      accordionContent.style.maxHeight = 0;
      button.textContent = '+'
    }
  })
})