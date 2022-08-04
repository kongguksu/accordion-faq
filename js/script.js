`use strict`;

// variables
const q = document.querySelector(`.q`);
const qs = document.querySelectorAll(`.q`);
const btnsArrow = document.querySelectorAll(`.btn-arr`);
const btnArrow = document.querySelector(`.btn-arr`);
const btnIconDown = document.querySelector(`.icon-btn-down`);
const btnsIconDown = document.querySelectorAll(`.icon-btn-down`);
const btnIconUp = document.querySelector(`.icon-btn-up`);
const btnsIconUp = document.querySelectorAll(`.icon-btn-up`);

// function
qs.forEach(panel => {
  panel.addEventListener(`click`, function () {
    // when another panel is clicked, all the other panels collapse
    for (let i = 0; i < qs.length; i++) {
      qs[i].classList.remove(`active`);
    }

    console.log(this);

    // current active/inactive panel when clicked -> toggles active state
    if (this.classList.contains(`active`)) {
      this.classList.toggle(`active`);
    } else {
      this.classList.toggle(`active`);
    }

    // toggling btn icon svgs
    for (let i = 0; i < btnsIconDown.length; i++) {
      if (qs[i].classList.contains(`active`)) {
        btnsIconDown[i].classList.add(`btn-hide`);
        btnsIconUp[i].classList.remove(`btn-hide`);
      } else {
        btnsIconDown[i].classList.remove(`btn-hide`);
        btnsIconUp[i].classList.add(`btn-hide`);
      }
    }

    if (this.classList.contains(`active`)) {
      this.addEventListener(`click`, function () {
        this.classList.toggle(`active`);
        for (let i = 0; i < btnsIconDown.length; i++) {
          if (qs[i].classList.contains(`active`)) {
            btnsIconDown[i].classList.add(`btn-hide`);
            btnsIconUp[i].classList.remove(`btn-hide`);
          } else {
            btnsIconDown[i].classList.remove(`btn-hide`);
            btnsIconUp[i].classList.add(`btn-hide`);
          }
        }
      });
    } else {
      this.classList.toggle(`active`);
    }
  });
});
