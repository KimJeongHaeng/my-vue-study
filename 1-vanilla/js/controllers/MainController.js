import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'

import ResultModel from '../models/ResultModel.js'

const tag = '[MainController]'


let formView = new FormView();
let resultView = new ResultView();

export const init = () =>  {
  formView.setup(document.querySelector('form'));
  resultView.setup(document.querySelector('#search-result'));
  MainController.eventBind();
};


const MainController = {
  eventBind() {
    formView.on('@submit', e => this.onSubmit(e.detail.inputData))
            .on('@reset', _ => this.onResetForm())
  },

  async onSubmit(inputData) {
    const searchData = await ResultModel.search(inputData);
    console.log(searchData);
    resultView.setResult(searchData);
  },

  onResetForm() {
    console.log(tag, '.onResetForm()');
    resultView.resetResult();
  }
};

