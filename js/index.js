const nav = document.querySelector(".nav");
const allBody = document.querySelector(".allbody");
window.addEventListener("scroll", fixNav);

// new ell
// const contact = document.createElement("div");
// contact.classList.add("contact");

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
  console.log(scrollY, nav.offsetHeight);

//   if (window.scrollY > nav.offsetHeight + 700) {
//     allBody.appendChild(contact);
//     allBody.classList.add("modall");
//   } else {
      
//       allBody.classList.remove('modall')
//   }
}
