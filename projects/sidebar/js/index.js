import {
  sideMenu,
  toggleSideMenuButton,
  closeSideMenuButton,
} from './elements.js';

toggleSideMenuButton.addEventListener('click', () => {
  sideMenu.classList.toggle('show-side-menu');
  setTimeout(() => closeSideMenuButton.focus(), 100);
});

closeSideMenuButton.addEventListener('click', () => {
  sideMenu.classList.remove('show-side-menu');
});
