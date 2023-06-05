document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const toggleButton = document.querySelector('.toggle-button');
    const icon = toggleButton.querySelector('i'); // Get the <i> element inside the button
    
    if (navbar && toggleButton) {
      let isMenuVisible = true;
  
      toggleButton.addEventListener('click', () => {
        if (isMenuVisible) {
          navbar.style.transform = 'translateY(-100%)';
          icon.classList.remove('fa-square-caret-up');
          icon.classList.add('fa-square-caret-down');
          
        } else {
          navbar.style.transform = 'translateY(-30%)';
          icon.classList.remove('fa-square-caret-down');
          icon.classList.add('fa-square-caret-up');
        }
        isMenuVisible = !isMenuVisible;
      });
    }
  });

  window.addEventListener("load", () => {
    for (let i of document.querySelectorAll(".gallery img")) {
      i.onclick = () => i.classList.toggle("full");
    }
  });