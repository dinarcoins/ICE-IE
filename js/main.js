import {
  navMenuList,
  programItemList,
  adviseItemList,
  footerContentLeftList,
  footerContentRightList,
  footerSocialList,
  iconCompanyList,
  advideList,
  newList,
} from "./constants.js";

var navMenu = document.getElementById("navMenu");
var programItemContainer = document.getElementById("programItemContainer");
var adviseItemContainer = document.getElementById("adviseItemContainer");
var footerContentLeft = document.getElementById("footerContentLeft");
var footerContentRight = document.getElementById("footerContentRight");
var footerSocialContainer = document.getElementById("footerSocial");
var companyLogoContainer = document.getElementById("companyLogoContainer");

document.addEventListener("DOMContentLoaded", function () {
  var btnOpenNav = document.querySelector(".btnOpenNav");
  var btnCloseNav = document.querySelector(".btnCloseNav");
  var menu = document.getElementById("menu");
  btnOpenNav.addEventListener("click", function () {
    menu.classList.add("active");
  });
  btnCloseNav.addEventListener("click", function () {
    menu.classList.remove("active");
  });

  navMenu.innerHTML = navMenuList
    .map((item) => {
      return `
      <a href="${item.href}" target="_blank" class="ttu cf fwb fs12p">${item.text}</a>
  `;
    })
    .join("");

  companyLogoContainer.innerHTML = iconCompanyList
    .map((item) => {
      return `
  <img src="${item.img}" alt="${item.alt}" class="w10"/>
  `;
    })
    .join("");

  footerContentLeft.innerHTML = footerContentLeftList
    .map((item) => {
      return `
      <a class="mb10" href="${item.href}">${item.text}</a>
    `;
    })
    .join("");

  footerContentRight.innerHTML = footerContentRightList
    .map((item) => {
      return `
    <a class="mb25 w49" href="${item.href}">${item.text}</a>
    `;
    })
    .join("");

  footerSocialContainer.innerHTML = footerSocialList
    .map((item) => {
      return `  
    <a class="" href="${item.href}"><i class="${item.icon} fs2 mr25"></i></a>

    `;
    })
    .join("");

    adviseItemContainer.innerHTML = adviseItemList
  .map((item) => {
    return `
    <div class="w40 ${item.haveBorder && "bb1 bc0 bss pb25 mb50"}">
    <div class="fs2 fs1-sm fwb ttc mb15">${item.title}</div>
    <div class="fs13 fs09-md fwn">${item.desc}</div>
  </div>
    `;
  })
  .join("");


programItemContainer.innerHTML = programItemList
.map((item) => {
  return `
  <div
    class="brtr50 bóng brtl50 brbl10 brbr10 w60 w1-xs col-lg-4 df jcc fdc pl25 pr25 pb25 pt20 pt40 hfc bgcf programItem ${
      item.marginTop === 0 ? `mt0` : item.marginTop === 1 ? `mt250` : "mt500"
    }"
  >
    <img
      class="w1 mla mra mb50 h250"
      src="${item.img}"
      alt="program1"
    />
    <div class="grayBoldColor fwb fs15 mb25">
     ${item.title}
    </div>
    <div class="tal">${item.text1}</div>
    <div class="tal">${item.text2}</div>
  </div>
  `;
})
.join("");
});




document.addEventListener("DOMContentLoaded", function () {
  var slidesContainer = document.querySelector(".slides-container-advide");
  var dotsContainer = document.querySelector(".dots-container-advide");
  var currentIndex = 0;

  // Render slides và dots
  slidesContainer.innerHTML = advideList
    .map((item) => {
      return `
          <div class="slide brtr10 brtl10">
            <img src="${item.image}" alt="${item.alt}" class="brtr10 brtl10 opc w1">
            <div class="bgGray pt25 pl25 pb25 pr25 brbl10 brbr10">
              <div class="fs1 cf ttc">${item.date}</div>
              <div class="redColor fs2 fs11-md fwb mt25 lh13">${item.title}</div>
              <div class="df jcsb aic mt25">
                <div class="cf fs15 fs1-sm">${item.uniName}</div>
                <a href="${item.link}" class="cf bw1 bcf bss pt5 pb5 pl25 pr25 brtr10 brtl10 brbl10 brbr10">Quan tâm</a>
              </div>
            </div>
          </div>
        `;
    })
    .join("");

  dotsContainer.innerHTML = advideList
    .map(() => `<span class="dot"></span>`)
    .join("");

  // get all slides và dots
  var slides = document.querySelectorAll(".slide");
  var dots = document.querySelectorAll(".dot");

  var firstSlide = slides[0].cloneNode(true);
  var lastSlide = slides[slides.length - 1].cloneNode(true);
  slidesContainer.appendChild(firstSlide);
  slidesContainer.insertBefore(lastSlide, slides[0]);

  slides = document.querySelectorAll(".slide");

  slidesContainer.style.transform = `translateX(-100%)`;

  function changeSlide(step) {
    currentIndex += step;

    slidesContainer.style.transition = "transform 0.5s ease";
    slidesContainer.style.transform = `translateX(${
      -(currentIndex + 1) * 100
    }%)`;

    if (currentIndex < 0) {
      setTimeout(function () {
        slidesContainer.style.transition = "none";
        currentIndex = advideList.length - 1;
        slidesContainer.style.transform = `translateX(${
          -(currentIndex + 1) * 100
        }%)`;
      }, 500);
    } else if (currentIndex >= advideList.length) {
      setTimeout(function () {
        slidesContainer.style.transition = "none";
        currentIndex = 0;
        slidesContainer.style.transform = `translateX(-100%)`;
      }, 500);
    }

    updateDots();
  }

  function goToSlide(index) {
    currentIndex = index;
    slidesContainer.style.transition = "transform 0.5s ease";
    slidesContainer.style.transform = `translateX(${
      -(currentIndex + 1) * 100
    }%)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      goToSlide(index);
    });
  });

  setInterval(function () {
    changeSlide(1);
  }, 3000);

  updateDots();
});

let slidesPerView = 3;

function detectScreenWidth() {
  const screenWidth = window.innerWidth;
  return screenWidth;
}

// Gọi hàm ngay khi trang load
detectScreenWidth();

window.addEventListener("resize", function () {
  if (detectScreenWidth() < 992) {
    slidesPerView = 1;
  } else {
    slidesPerView = 3;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(".slideshow-wrapper");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;

  function renderSlides() {
    slidesContainer.innerHTML = newList
      .map((item) => {
        return `
          <div class="slide-news">
            <img src="${item.img}" alt="${item.title}" class="brtr10 brtl10 brbl10 brbr10 w1">
            <div class="fs15 fwb mb15 mt15">${item.title}</div>
            <div class="fs09 fwn mb10">${item.text}</div>
            <a href="#" class="bw1 bss bcb pt5 pl5 pb5 pr5 brtr5 brtl5 brbl5 brbr5">${item.textBtn}</a>
          </div>
        `;
      })
      .join("");
  }

  const totalSlides = newList.length;
  const slideWidth = 100 / slidesPerView;
  renderSlides();

  function moveSlide(direction) {
    slidesContainer.style.transition = "transform 0.5s ease";
    slidesContainer.style.transform = `translateX(${-(
      currentIndex * slideWidth
    )}%)`;
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = totalSlides - slidesPerView;
    } else if (currentIndex >= totalSlides - slidesPerView + 1) {
      currentIndex = 0;
    }
  }

  prevButton.addEventListener("click", function () {
    moveSlide(-1);
  });

  nextButton.addEventListener("click", function () {
    moveSlide(1);
  });

  setInterval(function () {
    moveSlide(1);
  }, 3000);
});
