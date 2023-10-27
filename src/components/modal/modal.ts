import setScrollAndActive from '../../lib/setScrollAndActive';

const modalEl = document.getElementById('modal') as HTMLDivElement;
const modalBtn = document.getElementById('open-modal');
const closeClass = '.js-close';

const modal = () => {
  modalBtn?.addEventListener('click', () => {
    setScrollAndActive(true, modalEl);
  });

  modalEl?.addEventListener('click', (e) => {
    const el = e.target as HTMLElement;

    setScrollAndActive(!el.matches(closeClass), modalEl);
  });
};

export default modal;
