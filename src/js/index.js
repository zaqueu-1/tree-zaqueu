//title fade
let listItems = document.querySelectorAll('a');

listItems.forEach(item => item.addEventListener("mouseenter", () => {
  item.nextElementSibling.classList.remove('hide');
}));

listItems.forEach(item => item.addEventListener("mouseleave", () => {
  item.nextElementSibling.classList.add('hide');
}));

//scroll reveal
scrollReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
    } else {
        entry.target.classList.remove("show");
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll(".hidden"); 
  hiddenElements.forEach((e) => observer.observe(e));
}

scrollReveal();