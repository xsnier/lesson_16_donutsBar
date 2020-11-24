

  const mayo = {price:20, kkal:5};
  const flavoring = {price:15, kkal:0};
  const sauceMix = {price:35, kkal:5};

  let menuSauces = [mayo,flavoring,sauceMix];

  const chees = {price:10, kkal:20};
  const salad = {price:20, kkal:5};
  const potatoe = {price:15, kkal:10};

  const assorti = {price:45, kkal:35}

  const mixCheesSalad = {price:30, kkal:25};
  const mixCheesPotatoe = {price:25, kkal:30};
  const mixPotatoeSalad = {price:35, kkal:15};

  const doubleChees = {price:20, kkal:40};
  const doubleSalad = {price:40, kkal:10};
  const doublePotatoe = {price:30, kkal:20};

  const doubleAssorti = {price:90, kkal:70};

  let menuFilling = [chees,salad,potatoe,assorti,mixCheesPotatoe,mixCheesSalad,mixPotatoeSalad,doubleChees,doubleSalad,doublePotatoe,doubleAssorti];
  
  const small = {name: 'Tiny Frodo Burger', price: 50, kkal: 20};
  const big = {name: 'Big Russian Boss Burger', price: 100, kkal: 40};

 class Hamburger {
  
  constructor(size, filling) {
    
      if (small || big) {
        this.size = size;
      } 
         
      Object.keys(menuFilling).forEach(key => {
        let value = menuFilling[key];
        // console.log(value);
      
          if (filling === value) {
            this.filling = value;
          }
      });   
  };

    addSauce(sauce) {
    Object.keys(menuSauces).forEach(key => {
      let value = menuSauces[key];
      // console.log(value);
  
        if (sauce === value) {
          this.sauce = value;
        } 
    });
    }

    calculatePrice() {
      let price = this.size['price'];
      let name = this.size['name'];
  
        if (this.filling != undefined) {
          price += this.filling['price'];
        }
  
        if (this.sauce != undefined) {
          price += this.sauce['price'];
        }
  
        return console.log('price of youre '+name+' is '+price+' tugriks');
    }

    calculateKkal() {
      let price = this.size['kkal'];
      let name = this.size['name'];
  
        if (this.filling != undefined) {
          price += this.filling['kkal'];
        }
  
        if (this.sauce != undefined) {
          price += this.sauce['kkal'];
        }
  
        return console.log('energy value of youre '+name+' is '+price+' kkal');
    }
};
  

let minBurger = new Hamburger(small,assorti);
let maxBurger = new Hamburger(big, doubleChees);


console.log(minBurger);
console.log(maxBurger);

console.log('///////////////////');

minBurger.calculatePrice();
minBurger.calculateKkal();
minBurger.addSauce(mayo);
minBurger.calculatePrice();
minBurger.calculateKkal();

console.log('///////////////////');

maxBurger.calculatePrice();
maxBurger.calculateKkal();
maxBurger.addSauce(sauceMix);
maxBurger.calculatePrice();
maxBurger.calculateKkal();

console.log('///////////////////');





