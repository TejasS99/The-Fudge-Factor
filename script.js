const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const btn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

function closeMobileNav(){
  if (!mobileNav) return;
  mobileNav.hidden = true;
  btn?.setAttribute("aria-expanded", "false");
}

btn?.addEventListener("click", () => {
  const isHidden = mobileNav.hidden;
  mobileNav.hidden = !isHidden;
  btn.setAttribute("aria-expanded", String(isHidden));
});

mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", closeMobileNav);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobileNav();
});