import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class SidebarNavComponent extends Component {
  @service scroll;
  @service intl;

  @tracked activeSection = '';
  @tracked isMenuOpen = false;
  @tracked isMobile = false;

  constructor() {
    super(...arguments);
    if (typeof window !== 'undefined') {
      this.checkMobile();
      window.addEventListener('resize', this.checkMobile);
    }
  }

  willDestroy() {
    super.willDestroy();
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.checkMobile);
    }
  }

  get currentSection() {
    return this.scroll?.activeSection || '';
  }

  @action
  scrollToSection(sectionId) {
    this.scroll.scrollToSection(sectionId);
  }

  @action
  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  @action
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @action
  closeMenu() {
    this.isMenuOpen = false;
  }
}
