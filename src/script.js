const header = document.querySelector("header");

if (window.scrollY !== 0) {
  header.classList.add("sticky");
}

let waiting = false;
let scrollHandle;

const changeHeader = () => {
  if (window.scrollY === 0) {
    header.classList.remove("sticky");
  } else {
    header.classList.add("sticky");
  }
};

window.addEventListener("scroll", () => {
  if (waiting) return;

  clearTimeout(scrollHandle);

  setTimeout(() => {
    waiting = false;
  }, 100);

  scrollHandle = setTimeout(() => {
    changeHeader();
  }, 200);
});
