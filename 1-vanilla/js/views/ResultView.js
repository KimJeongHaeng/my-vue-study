import CardComponent from '../components/Card.js';

const tag = '[ResultView]'

export default class ResultView {
  setup(el) {
    this.el = el;

  }

  setResult(resData) {
    // console.log(this.el);
    const cardComponent = CardComponent(resData);
    this.el.innerHTML = cardComponent;
    // console.log(resData);

    // Array.from(resData).forEach(x => {
    //   console.log(x);
    // })
    
  }

  resetResult() {
    this.el.innerHTML = "";
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