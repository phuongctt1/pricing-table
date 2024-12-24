export function makeSlideShow(selector) {
  const slideShow = document.querySelector(".slideshow");
  const listSlide = slideShow.querySelector(".list-slide");
  const slides = slideShow.querySelectorAll(".slide");
  const btnRight =document.querySelector(".slider__arrow--right");
  const btnLeft = document.querySelector(".slider__arrow--left");
  const slideStyle = window.getComputedStyle(slides[0]);
  const length = slides.length;
  let current = 0;
  const handleChangeSlideRight = () => {
    if (current === length - 1) {
      current = 0;
      listSlide.style.transform = `translateX(0px)`;
      slideShow.querySelector(".slider-active").classList.remove("slider-active");
      slideShow.querySelector(".slider-index" + current).classList.add("slider-active");
    } else {
      current++;
      let width = parseInt(slideStyle.width);
      listSlide.style.transform = `translateX(${width * -1 * current}px)`;
      slideShow.querySelector(".slider-active").classList.remove("slider-active");
      slideShow.querySelector(".slider-index" + current).classList.add("slider-active");

    }
  };

  const handleChangeSlideLeft = () => {
    if (current ===0) {
      current = length -1;
      let width = parseInt(slideStyle.width);
      listSlide.style.transform = `translateX(${width * -1 * current}px)`;
      slideShow.querySelector(".slider-active").classList.remove("slider-active");
      slideShow.querySelector(".slider-index" + current).classList.add("slider-active");

    } else {
      current--;
      let width = parseInt(slideStyle.width);
      listSlide.style.transform = `translateX(${width * -1 * current}px)`;
      slideShow.querySelector(".slider-active").classList.remove("slider-active");
      slideShow.querySelector(".slider-index" + current).classList.add("slider-active");
    }
  }
  let handleChangEventSlide = setInterval(handleChangeSlideRight, 5000);

  btnRight.addEventListener("click", () => {
    clearInterval(handleChangEventSlide);
    handleChangeSlideRight();
    handleChangEventSlide = setInterval(handleChangeSlideRight, 5000);
    slideShow.querySelector(".slider-active").classList.remove("slider-active");
    slideShow.querySelector(".slider-index" + current).classList.add("slider-active");
  })

  btnLeft.addEventListener("click", () => {
    clearInterval(handleChangEventSlide);
    handleChangeSlideLeft();
    handleChangEventSlide = setInterval(handleChangeSlideRight, 5000)
    slideShow.querySelector(".slider-active").classList.remove("slider-active");
    slideShow.querySelector(".slider-index" + current).classList.add("slider-active");
  })


}
