import {
  navMenuList,
  programItemList,
  adviseItemList,
  footerContentLeftList,
  footerContentRightList,
  footerSocialList,
  iconCompanyList,
} from "./constants.js";

var navMenu = document.getElementById("navMenu");
var programItemContainer = document.getElementById("programItemContainer");
var adviseItemContainer = document.getElementById("adviseItemContainer");
var footerContentLeft = document.getElementById("footerContentLeft");
var footerContentRight = document.getElementById("footerContentRight");
var footerSocialContainer = document.getElementById("footerSocial");
var companyLogoContainer = document.getElementById("companyLogoContainer");

companyLogoContainer.innerHTML = iconCompanyList
  .map((item) => {
    return `
  <img src="${item.img}" alt="${item.alt}" class="w150"/>
  `;
  })
  .join("");

navMenu.innerHTML = navMenuList
  .map((item) => {
    return `
  <div><a href="${item.href}" target="_blank" rel="noopener noreferrer" class="ttu cf fwb">${item.text}</a></div>
  `;
  })
  .join("");

programItemContainer.innerHTML = programItemList
  .map((item) => {
    return `
    <div
      class="brtr50 bóng brtl50 brbl10 brbr10 w33 df jcc fdc pl25 pr25 pb25 pt20 pt40 hfc ${
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

adviseItemContainer.innerHTML = adviseItemList
  .map((item) => {
    return `
    <div class="w40 ${item.haveBorder && "bb1 bc0 bss pb25 mb50"}">
    <div class="fs2 fwb ttc mb15">${item.title}</div>
    <div class="fs13 fwn">${item.desc}</div>
  </div>
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

// document.addEventListener("DOMContentLoaded", function () {
//   var slidesContainer = document.querySelector(".slides-container-aboutMe");
//   var prevButton = document.querySelector(".prev-aboutMe");
//   var nextButton = document.querySelector(".next-aboutMe");
//   var currentIndex = 0;

//   // ABOUTME_LIST_IMAGE.forEach(function (item) {
//   //   var slide = document.createElement("div");
//   //   var img = document.createElement("img");

//   //   slide.className = "slide";
//   //   img.src = item.image;
//   //   img.alt = item.alt;

//   //   slide.appendChild(img);
//   //   slidesContainer.appendChild(slide);
//   // });

//   var slides = document.querySelectorAll(".slide");

//   var firstSlide = slides[0].cloneNode(true);
//   var lastSlide = slides[slides.length - 1].cloneNode(true);

//   slidesContainer.appendChild(firstSlide);
//   slidesContainer.insertBefore(lastSlide, slides[0]);

//   slides = document.querySelectorAll(".slide");

//   slidesContainer.style.transform = `translateX(-100%)`;

//   function changeSlide(step) {
//     currentIndex += step;

//     slidesContainer.style.transition = "transform 0.5s ease";
//     slidesContainer.style.transform = `translateX(${
//       -(currentIndex + 1) * 100
//     }%)`;

//     if (currentIndex < 0) {
//       setTimeout(function () {
//         slidesContainer.style.transition = "none";
//         currentIndex = ABOUTME_LIST_IMAGE.length - 1;
//         slidesContainer.style.transform = `translateX(${
//           -(currentIndex + 1) * 100
//         }%)`;
//       }, 500);
//     } else if (currentIndex >= ABOUTME_LIST_IMAGE.length) {
//       setTimeout(function () {
//         slidesContainer.style.transition = "none";
//         currentIndex = 0;
//         slidesContainer.style.transform = `translateX(-100%)`;
//       }, 500);
//     }
//   }

//   setInterval(function () {
//     changeSlide(1);
//   }, 3000);
// });
