class Car {
 // Write code under this line
  static getSpecs(car){
  return `maxspeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`
    }
    
    constructor(speed, price, maxSpeed, isOn, distance) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }
    
    get price() {
        return this._price;
  }
    set price(value) {
        this._price = value;
  }
    turnOn() {
        this.isOn = true;
  }
    turnOff() {
        this.isOn = false;
  }
    accelerate(value) {
      
  }
  decelerate(value) {}
  drive(hours) {}
}
 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
