import { PACKAGE_SLUG } from '../constants'

class A11y {
  els = {}
  
  constructor() {
    this.init()
  }

  init() {
    const menuId = `${PACKAGE_SLUG}-nav`
    const toggleButtonId = `${PACKAGE_SLUG}-toggle-button`
    this.els.widget = document.createElement('div')
    this.els.widget.id = `${PACKAGE_SLUG}-widget`
    this.els.widget.innerHTML = `
      <nav id="${menuId}" style="display: none;">
        <button>Font Size</button>
        <button>Contrast</button>
        <button>Font Size</button>
        <button>Contrast</button>
        <button>Font Size</button>
        <button>Contrast</button>
      </nav>
      <button id="${toggleButtonId}">Toggle A11y</button>
    `
    this.els.menu = this.els.widget.querySelector(`#${menuId}`)
    this.els.toggleButton = this.els.widget.querySelector(`#${toggleButtonId}`)
    this.els.toggleButton.addEventListener('click', () => this.toggleMenu())
    document.body.appendChild(this.els.widget)
  }

  toggleMenu = (bool) => {
    console.log(bool)
    this.menuOpen = typeof bool !== 'undefined' && bool || !this.menuOpen
    this.els.menu.style.display = this.menuOpen ? 'block' : 'none'
  }
}

export default A11y