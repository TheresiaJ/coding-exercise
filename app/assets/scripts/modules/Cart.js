import $ from 'jquery';

class Cart {
  constructor(){
    this.cartIcon = $(".cart");
    this.cartContent = $(".cart__detail");
    this.events();
  }

  events(){
    this.cartIcon.hover(this.toggleCart.bind(this));
    this.cartContent.hover(this.toggleCart.bind(this));
  }

  toggleCart(){
    this.cartContent.toggle();
    this.cartIcon.toggleClass('cart--is-open');
  }

}

export default Cart;
