document.addEventListener("DOMContentLoaded", () => {
  const dropdownContent = document.querySelector(".dropdown-content");
  const subdropdownBtn = document.querySelector(".sub-dropdown-btn");
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const closeBtn = document.querySelector("#closeBtn");
  const header = document.querySelector("header");


  if (dropdownBtn && dropdownContent) {
      dropdownBtn.addEventListener('click', function() {
          dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
      });
  }

  if (subdropdownBtn) {
      subdropdownBtn.addEventListener('click', function() {
          let subdropdownContent = this.nextElementSibling;
          if (subdropdownContent) {
              subdropdownContent.style.display = subdropdownContent.style.display === 'block' ? 'none' : 'block';
          }
      });
  }

  if (closeBtn) {
      closeBtn.addEventListener("click", () => {
          header.style.display = 'none';
      });
  }
});