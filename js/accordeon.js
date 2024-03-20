const accordeons = document.querySelectorAll(".accordeon");

accordeons.forEach((accordeon) => {
  const accordeonToggler = accordeon.querySelector(".accordeon__toggler");
  accordeonToggler.addEventListener("click", () => {
    closeAccordeons(accordeon);
    accordeon.classList.toggle("active");
    const panel = accordeon.querySelector(".accordeon__panel");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 240 + "px";
    }
  });
});

function closeAccordeons(targetAccordeon) {
  const accordeons = document.querySelectorAll(".accordeon");
  accordeons.forEach((accordeon) => {
    if (accordeon !== targetAccordeon) {
      const panel = accordeon.querySelector(".accordeon__panel");
      accordeon.classList.remove("active");
      panel.style.maxHeight = null;
    }
  });
}