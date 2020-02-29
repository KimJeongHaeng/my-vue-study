const tag = '[ResultView]'

export default class ResultView {
  setup(el) {
    this.el = el;

  }

  setResult(resData) {
    console.log(resData);
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