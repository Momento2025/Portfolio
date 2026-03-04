// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", function(){

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.classList.add("scrolled");

}
else{

navbar.classList.remove("scrolled");

}

});




// ACTIVE LINK CLICK

const links =
document.querySelectorAll(".nav-link");


links.forEach(link => {

link.addEventListener("click", function(){

links.forEach(l =>
l.classList.remove("active")
);

this.classList.add("active");

});


});

/* ============================= */
/* SUBTLE PARALLAX DEPTH */
/* ============================= */

const blueprint = document.querySelector(".blueprint-grid");
const cadBg = document.querySelector(".cad-rotate-bg");

/* Mouse Parallax */
document.addEventListener("mousemove", (e) => {

  const x = (e.clientX / window.innerWidth - 0.5);
  const y = (e.clientY / window.innerHeight - 0.5);

  blueprint.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  canvas.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
  cadBg.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
});

/* Scroll Depth Effect */
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  blueprint.style.transform += ` translateY(${scrollY * 0.05}px)`;
  canvas.style.transform += ` translateY(${scrollY * 0.08}px)`;
  cadBg.style.transform += ` translateY(${scrollY * 0.12}px)`;
});
