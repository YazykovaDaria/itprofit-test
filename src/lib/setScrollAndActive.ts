const activeClass = 'active';

const setScrollAndActive = (isActive:boolean, el: HTMLElement): void => {
  if (isActive) {
    el?.classList.add(activeClass);
    document.body.style.overflow = 'hidden';
  } else {
    el.classList.remove(activeClass);
    document.body.style.overflow = 'auto';
  }
};

export default setScrollAndActive;
