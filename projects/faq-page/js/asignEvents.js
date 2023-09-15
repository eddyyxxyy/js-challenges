import { hideContentButtons, showContentButtons } from './elements.js';

export default () => {
  for (let button of showContentButtons) {
    button.addEventListener('click', () => {
      button.parentElement.parentElement.classList.add('faq-item-show-content');
    });
  }
  for (let button of hideContentButtons) {
    button.addEventListener('click', () => {
      button.parentElement.parentElement.classList.remove(
        'faq-item-show-content'
      );
    });
  }
};
