const name=document.getElementById('user-name');
name.innerText=localStorage.getItem('name');
// console.log('hi');
window.addEventListener('scroll', () => {
    const divs = document.querySelectorAll('.full-body');
    divs.forEach((div) => {
      const rect = div.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        // div.style.backgroundColor="red";
        div.classList.add('animate__animated');
        div.classList.add('animate__fadeInLeft');
        div.classList.add('animate__slower');
      }
    });
  });
  