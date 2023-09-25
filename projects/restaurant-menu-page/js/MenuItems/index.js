import itemsData from '../data/index.js';
import { menuFilters, menuItems } from '../elements.js';

export class MenuItems {
  filter;

  constructor(filter = 'all') {
    this.filter = filter;
    this.asignFilterEvents();
    this.update();
  }

  asignFilterEvents() {
    menuFilters.addEventListener('click', (e) => {
      switch (e.target.innerText.toLowerCase()) {
        case 'all':
          this.filter = 'all';
          this.update();
          break;
        case 'breakfast':
          this.filter = 'breakfast';
          this.update();
          break;
        case 'lunch':
          this.filter = 'lunch';
          this.update();
          break;
        case 'shakes':
          this.filter = 'shakes';
          this.update();
          break;
        case 'dinner':
          this.filter = 'dinner';
          this.update();
          break;
        default:
          break;
      }
    });
  }

  buildView(data) {
    const items = this.filterDataByCategory(data);
    const menuItemsContent = items.map(
      (item) => `
        <article class="menu-item">
        <div class="img-wrapper">
          <img src="${item.img}" alt="${item.title}" />
        </div>
        <div class="item-info">
          <h3>${item.title} <span>$${item.price}</span></h3>
          <p>${item.desc}</p>
        </div>
      </article>
    `
    );

    const menuItemsView = menuItemsContent.join('');

    return menuItemsView;
  }

  filterDataByCategory(data) {
    if (!(this.filter === 'all')) {
      return data.filter((item) => item.category === this.filter);
    }
    return data;
  }

  update() {
    const viewHtml = this.buildView(itemsData);

    menuItems.innerHTML = viewHtml;
  }
}
