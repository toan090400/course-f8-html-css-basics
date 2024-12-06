const navLanguage = document.getElementById("nav-language");

const navLanguageChild = document.getElementById("nav-language-child");
const navLanguageChildIcon = document.getElementById("toggle");

navLanguage.addEventListener("click", () => {
  navLanguageChild.classList.toggle("open");
  navLanguageChildIcon.classList.toggle("toggle");
});
navLanguage.addEventListener("blur", () => {
  navLanguageChild.classList.remove("open");
  navLanguageChildIcon.classList.remove("toggle");
});

const onClickSearch = document.getElementById("onClickSearch");
const resualt = document.getElementById("resualt");
onClickSearch.addEventListener("focus", () => {
  resualt.classList.add("open");
});

onClickSearch.addEventListener("blur", () => {
  resualt.classList.remove("open");
});
// const onClickCloseModalMain = document.querySelector(".main");
// onClickCloseModalMain.addEventListener("click", () => {
//   console.log("123");
// });
const onClickModalRegister = document.getElementById("modal-register");
const onClickOpenModal = document.getElementById("modal-open");
const onClickCloseModal = document.getElementById("modal--register__close");
onClickModalRegister.addEventListener("click", () => {
  onClickOpenModal.classList.add("open");
});
onClickCloseModal.addEventListener("click", () => {
  onClickOpenModal.classList.remove("open");
});
const modalOverlay = document.querySelector(".modal__overlay");
modalOverlay.addEventListener("click", () => {
  onClickOpenModal.classList.remove("open");
});

const onClickLike = document.getElementById("onClickLike");
const onClickDisLike = document.getElementById("onClickDisLike");

onClickLike.addEventListener("click", () => {
  onClickLike.classList.add("item-action__dislike");
  onClickDisLike.classList.add("item-action__like--active");
});

onClickDisLike.addEventListener("click", () => {
  onClickLike.classList.remove("item-action__dislike");
  onClickDisLike.classList.remove("item-action__like--active");
});
