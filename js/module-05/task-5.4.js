 // Write code under this line
class StringBuilder {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    //   append(str) {
    //   return;
    // }
    // prepend(str) {
    //   return;
    // }
    // pad(str) {
    //   return;
    // }
    append(str) {
        return this._value+=str;
    }
    prepend(str) {
        return this._value=str+=this.value;
    }
    pad(str) {
        
        this.append(str);
        this.prepend(str);
    }
}


console.log(typeof StringBuilder);
// 'function'


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
