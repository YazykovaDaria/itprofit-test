const modalEl = document.getElementById('modal');
const modalBtn = document.getElementById('open-modal');
const closeClass = '.js-close';
const activeClass = 'active';

const modal = () => {
  modalBtn?.addEventListener('click', () => {
    modalEl?.classList.add(activeClass);
    document.body.style.overflow = 'hidden';
  });

  modalEl?.addEventListener('click', (e) => {
    const el = e.target as HTMLElement;
    if (el.matches(closeClass)) {
      modalEl.classList.remove(activeClass);
      document.body.style.overflow = 'auto';
    }
  });
};

export default modal;
