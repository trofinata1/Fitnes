
export const getVideoCover = () => {
  if (document.querySelector('iframe')) {
    const videoCoverBlock = document.querySelector('.ytp-cued-thumbnail-overlay-image');
    videoCoverBlock.style.backgroundImage = 'none';
  }
};
