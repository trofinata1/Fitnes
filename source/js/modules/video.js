export const videoButton = document.querySelector('.gym__btn');
export const video = document.querySelector('iframe');

export const playVideo = () => {
  if (videoButton) {
    videoButton.addEventListener('click', function () {
      video.style.zIndex = '4';
      video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });
  }
};
