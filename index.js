
// Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:

let ladder = {
  step: 0,
  up: function () { // підніматиме вас на одну сходинку
    this.step++;
    return this;
  },
  down: function () { // опускатиме вас на одну сходинку
    this.step--;
    return this;
  },
  showStep: function () { // показує поточну сходинку
    console.log(this.step);
    return this;
  }
};

// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:

ladder.up();

ladder.up();

ladder.down();

ladder.showStep(); // 1

// Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

ladder.up().up().down().showStep(); // 1

// Такий підхід широко використовується в бібліотеках JavaScript.


