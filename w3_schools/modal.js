// chọn nhiều thẻ có id là #js-buy-ticket-open
const buyTicketsBtns = document.querySelectorAll("#js-buy-ticket-open");

// chọn thẻ có id là #js-modal
const modal = document.querySelector("#js-modal");

// tạo hàm mở modal
const openModal = () => {
  modal.classList.add("open");
};

// tạo hàm đóng modal
const closeModal = () => {
  modal.classList.remove("open");
};

//lặp qua từng thằng btn để lắng nghe sự kiện click áp dụng khi chọn nhiều phần tử
buyTicketsBtns.forEach((element, index) => {
  // thực hiện sự kiện đóng modal
  element.addEventListener("click", openModal);
});

// chọn thẻ #close-icon để đóng modal
const modalCloss1 = document.querySelector("#close-icon");
// thực hiện sự kiện đóng modal
modalCloss1.addEventListener("click", closeModal);

// chọn thẻ #js-close-btn để đóng modal
const modalCloss2 = document.querySelector("#js-close-btn");
// thực hiện sự kiện đóng modal
modalCloss2.addEventListener("click", closeModal);

// thực hiện sự kiện click vùng ngoài đóng modal
modal.addEventListener("click", closeModal);

// js respositive cho nav
const resNav = document.querySelector("#js-responsitive-nav");

const openResponNav = document.querySelector("#js-respon-nav-icon");

openResponNav.addEventListener("click", () => {
  resNav.classList.toggle("open");
});
