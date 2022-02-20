import { PACKAGE_SLUG } from '../constants'
import styles from '../css/styles.css'

class A11y {
  els = {}
  menuOpen = false
  linksHighlighted = false
  
  constructor() {
    this.init()
  }

  init() {
    const menuId = `${PACKAGE_SLUG}-nav`
    const toggleButtonId = `${PACKAGE_SLUG}-toggle-button`
    const highlightLinksButtonId = `${PACKAGE_SLUG}-highlight-links-button`
    
    this.els.styles = document.createElement('style')
    this.els.styles.innerText =  styles
    this.els.widget = document.createElement('div')
    this.els.widget.id = `${PACKAGE_SLUG}`
    this.els.widget.innerHTML = `
      <nav id="${menuId}" style="display: none;">
        <button id="${PACKAGE_SLUG}-highlight-links-button">Highlight Links</button>
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
    this.els.highlightLinksButton = this.els.widget.querySelector(`#${highlightLinksButtonId}`)

    this.els.toggleButton.addEventListener('click', () => this.toggleMenu())
    this.els.highlightLinksButton.addEventListener('click', () => this.toggleHighlightLinks())

    document.head.appendChild(this.els.styles)
    document.body.appendChild(this.els.widget)
  }

  toggleMenu = bool => {
    this.menuOpen = typeof bool !== 'undefined' && bool || !this.menuOpen
    this.els.menu.style.display = this.menuOpen ? 'block' : 'none'
  }

  toggleHighlightLinks() {
    this.linksHighlighted = !this.linksHighlighted
    for (const a of document.querySelectorAll('a')) {
      this.linksHighlighted
        ? a.classList.add('highlight')
        : a.classList.remove('highlight')
    }
  }
}

export default A11y