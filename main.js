
const items = document.querySelectorAll(".item");
gsap.defaults({ duration: 0.3 });
items.forEach(function (item, index) {
  const tl = gsap
    .timeline({ paused: true })
    .to(item.querySelector(".text"), {
      color: "white",
      x: 20,
      scale: 1.3,
      transformOrigin: "left, center"
    })
    .to(item.querySelector(".dot"), { backgroundColor: "#f95", scale: 1.5 }, 0);

  item.addEventListener("mouseenter", () => tl.play());

  item.addEventListener("mouseleave", () => tl.reverse());
});

gsap.registerPlugin(TextPlugin);


gsap.from("p", {text:" ", ease:"none", duration:18})

