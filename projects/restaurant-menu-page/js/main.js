import { MenuItems } from './MenuItems/index.js';
import { root, toggleModeButtons } from './elements.js';

toggleModeButtons.light.addEventListener('click', () => {
  root.classList.remove('dark');
});
toggleModeButtons.dark.addEventListener('click', () => {
  root.classList.add('dark');
});

new MenuItems();
