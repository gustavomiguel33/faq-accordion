document.querySelectorAll(".accordion-content").forEach(content => {
  content.style.maxHeight = 0;
})

document.querySelectorAll('.accordion-buttons').forEach(button => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;
    
    button.classList.toggle("active");

    if(button.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    }else {
      accordionContent.style.maxHeight = 0;
    }
  })
})