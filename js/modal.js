const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelectorAll(".btn-modal");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  openModalBtn.forEach(function(btn) {
    btn.addEventListener("click", openModal)});

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);



const modalBookingMini = document.querySelector(".modal.booking-mini");
const overlayBookingMini = document.querySelector(".overlay.booking-mini");
const openModalBtnBookingMini = document.querySelectorAll(".btn-booking-mini");
const closeModalBtnBookingMini = document.querySelector(".btn-close.booking-mini");

const openModalBookingMini = function () {
    modalBookingMini.classList.remove("hidden");
    overlayBookingMini.classList.remove("hidden");
  };

  openModalBtnBookingMini.forEach(function(btnMini) {
    btnMini.addEventListener("click", openModalBookingMini)});

  const closeModalBookingMini = function () {
    modalBookingMini.classList.add("hidden");
    overlayBookingMini.classList.add("hidden");
  };

  closeModalBtnBookingMini.addEventListener("click", closeModalBookingMini);
  overlayBookingMini.addEventListener("click", closeModalBookingMini);



  const modalBookingStandart = document.querySelector(".modal.booking-standart");
const overlayBookingStandart = document.querySelector(".overlay.booking-standart");
const openModalBtnBookingStandart = document.querySelectorAll(".btn-booking-standart");
const closeModalBtnBookingStandart = document.querySelector(".btn-close.booking-standart");

const openModalBookingStandart = function () {
    modalBookingStandart.classList.remove("hidden");
    overlayBookingStandart.classList.remove("hidden");
  };

  openModalBtnBookingStandart.forEach(function(btnStandart) {
    btnStandart.addEventListener("click", openModalBookingStandart)});

  const closeModalBookingStandart = function () {
    modalBookingStandart.classList.add("hidden");
    overlayBookingStandart.classList.add("hidden");
  };

  closeModalBtnBookingStandart.addEventListener("click", closeModalBookingStandart);
  overlayBookingStandart.addEventListener("click", closeModalBookingStandart);



  const modalBookingLux = document.querySelector(".modal.booking-lux");
const overlayBookingLux = document.querySelector(".overlay.booking-lux");
const openModalBtnBookingLux = document.querySelectorAll(".btn-booking-lux");
const closeModalBtnBookingLux = document.querySelector(".btn-close.booking-lux");

const openModalBookingLux = function () {
    modalBookingLux.classList.remove("hidden");
    overlayBookingLux.classList.remove("hidden");
  };

  openModalBtnBookingLux.forEach(function(btnLux) {
    btnLux.addEventListener("click", openModalBookingLux)});

  const closeModalBookingLux = function () {
    modalBookingLux.classList.add("hidden");
    overlayBookingLux.classList.add("hidden");
  };

  closeModalBtnBookingLux.addEventListener("click", closeModalBookingLux);
  overlayBookingLux.addEventListener("click", closeModalBookingLux);