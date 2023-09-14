import { closeModalButton, dialogModal, openModalButton } from './elements.js';

openModalButton.addEventListener('click', () => {
  dialogModal.open = true;
  dialogModal.parentElement.classList.add('dialog-open');
  closeModalButton.focus();
});

closeModalButton.addEventListener('click', () => {
  dialogModal.open = null;
  dialogModal.parentElement.classList.remove('dialog-open');
  openModalButton.focus();
});

dialogModal.parentElement.addEventListener('click', (event) => {
  if (event.target !== dialogModal && !dialogModal.contains(event.target)) {
    closeModalButton.click();
  }
});
