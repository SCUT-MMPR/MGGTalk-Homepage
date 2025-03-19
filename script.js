// document.addEventListener("DOMContentLoaded", function() {

//     // Slider 1
//     const slider1 = document.getElementById("slider1");
//     const slider1Control = document.getElementById("slider1-control");

//     function updateSlider1(value) {
//         const images = slider1.getElementsByTagName("img");
//         Array.from(images).forEach((img, index) => {
//             img.style.display = index == value ? 'block' : 'none';
//         });
//     }

//     slider1Control.addEventListener("input", function() {
//         updateSlider1(this.value);
//     });

//     // Initialize slider 1 to the first image
//     updateSlider1(slider1Control.value);

//     // Slider 2
//     const slider2 = document.getElementById("slider2");
//     const slider2Control = document.getElementById("slider2-control");

//     function updateSlider2(value) {
//         const images = slider2.getElementsByTagName("img");
//         Array.from(images).forEach((img, index) => {
//             img.style.display = index == value ? 'block' : 'none';
//         });
//     }

//     slider2Control.addEventListener("input", function() {
//         updateSlider2(this.value);
//     });

//     // Initialize slider 2 to the first image
//     updateSlider2(slider2Control.value);

// });

// 等页面加载完
document.addEventListener("DOMContentLoaded", function() {

  // 左列
  const leftBlock = document.getElementById("left-block");
  const leftSlider = document.getElementById("left-slider");
  // 取得 dynamic images
  const leftImages = leftBlock.getElementsByClassName("dynamic-img");

  // 当滑块发生变化
  leftSlider.addEventListener("input", function() {
    // 如果slider值=0，只显示dynamicImgs[0]；=1只显示dynamicImgs[1]
    Array.from(leftImages).forEach((img, idx) => {
      // 显示的idx与slider值相等
      if (idx == this.value) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
  // 初始更新
  leftSlider.dispatchEvent(new Event("input"));

  // 右列
  const rightBlock = document.getElementById("right-block");
  const rightSlider = document.getElementById("right-slider");
  const rightImages = rightBlock.getElementsByClassName("dynamic-img");

  rightSlider.addEventListener("input", function() {
    Array.from(rightImages).forEach((img, idx) => {
      if (idx == this.value) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
  // 初始更新
  rightSlider.dispatchEvent(new Event("input"));
});

