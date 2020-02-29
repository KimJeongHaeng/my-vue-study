const tag = '[FormView]'

export default class FormView {
  setup(el) {
    this.el = el;
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBtn(false)
    this.bindEvents()
  }

  showResetBtn(show = true) {
    this.resetEl.style.display = show ? 'block' : 'none'
  }

  bindEvents() {
    this.on('submit', e => e.preventDefault())
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
    this.resetEl.addEventListener('click', e => this.onClickReset())
  }

  onKeyup(e) {
    const KEY_ENTER = 13
    this.showResetBtn(this.inputEl.value.length)

    if (!this.inputEl.value.length) {
      this.emit('@reset')
    }

    if (e.keyCode !== KEY_ENTER) return;
    this.emit('@submit', {
      inputData: this.inputEl.value
    })
  }

  onClickReset() {
    this.emit('@reset')
    this.showResetBtn(false)
  }

  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
  }

  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  }
}

// FormView.setup = function (el) {
//   this.init(el)
//   this.inputEl = el.querySelector('[type=text]')
//   this.resetEl = el.querySelector('[type=reset]')
//   this.showResetBtn(false)
//   this.bindEvents()
//   return this
// }

// FormView.showResetBtn = function (show = true) {
//   this.resetEl.style.display = show ? 'block' : 'none'
// }

// FormView.bindEvents = function () {
//   this.on('submit', e => e.preventDefault())
//   this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
//   this.resetEl.addEventListener('click', e => this.onClickReset())
// }

// FormView.onKeyup = function (e) {
//   const enter = 13
//   this.showResetBtn(this.inputEl.value.length)
//   if (!this.inputEl.value.length) this.emit('@reset')
//   if (e.keyCode !== enter) return
//   this.emit('@submit', {
//     input: this.inputEl.value
//   })
// }

// FormView.onClickReset = function () {
//   this.emit('@reset')
//   this.showResetBtn(false)
// }