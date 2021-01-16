const buttonContainer = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('nav ul li a');

const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const link4 = document.querySelector('.link4');





for (let i = 0; i < navLinks.length; i++) {
      const elements = [navLinks[i]];

      for (let k = 0; k < elements.length; k++) {
            const element = elements[k];

            element.addEventListener('click', () => {
                  if (element.classList.contains('active')) {
                        element.classList.remove('active')
                  } else {
                        element.classList.add('active')
                  }
            })


      }
}