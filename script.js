

// 获取DOM元素
const downloadButton = document.querySelector('.download-button');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-button');
const agreeButton = document.querySelector('.agree-button');
const refuseButton = document.querySelector('.refuse-button');

// 点击下载按钮时显示软件使用条款
downloadButton.addEventListener('click', () => {
  overlay.style.display = 'block';
 // 添加淡入式动画
  overlay.style.opacity = 0;
  let opacity = 0;
  const fadeIn = setInterval(() => {
    opacity += 0.1;
    if (opacity >= 1) {
      clearInterval(fadeIn);
    }
    overlay.style.opacity = opacity;
  }, 50);
});

// 点击关闭按钮时隐藏软件使用条款
closeButton.addEventListener('click', () => {
  // 添加淡出式动画
  overlay.style.opacity = 1;
  let opacity = 1;
  const fadeOut = setInterval(() => {
    opacity -= 0.1;
    if (opacity <= 0) {
      clearInterval(fadeOut);
      overlay.style.display = 'none';
    }
    overlay.style.opacity = opacity;
  }, 50);
});

// 点击同意按钮时开始下载软件
agreeButton.addEventListener('click', () => {
   window.location.href = 'https://www.123pan.com/s/WnQ5Vv-6JaJH.html';
  alert('下载软件！');
});


refuseButton.addEventListener('click', () => {
  window.location.href = './refuse.html';
});