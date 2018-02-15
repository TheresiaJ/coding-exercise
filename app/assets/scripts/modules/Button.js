import $ from 'jquery';

class Button {
  constructor(){
    this.sizeSelect = $(".product-detail__sizing-select a");
    this.events();
  }

  events(){
    this.sizeSelect.click(this.disableButton.bind(this));
  }

  disableButton(){
    return false;
  }

}

export default Button;
