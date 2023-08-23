// const personMethods = {
//   eat() {
//     console.log(`${this.name} is eating`);
//   },
//   sleep() {
//     console.log(`${this.name} is sleeping`);
//   },
//   play() {
//     console.log(`${this.name} is playing`);
//   },
// };

function Person(name, age) {
  //   const person = Object.create(personMethods);
  const person = Object.create(Person.prototype);

  person.name = name;
  person.age = age;

  //   person.eat = personMethods.eat;
  //   person.sleep = personMethods.sleep;
  //   person.play = personMethods.play;
  return person;
}
Person.prototype = {
  eat() {
    console.log(`${this.name} is eating`);
  },
  sleep() {
    console.log(`${this.name} is sleeping`);
  },
  play() {
    console.log(`${this.name} is playing`);
  },
};

const sakib = Person("sakib", 35);
sakib.eat();
sakib.play();

const tamim = Person("Tamim", 35);
tamim.sleep();
tamim.play();
//.......create object with new keyword.......//
function Student(name, subject) {
  this.name = name;
  this.subject = subject;
}
Student.prototype = {
  eat() {
    console.log(`${this.name} is eating`);
  },
  sleep() {
    console.log(`${this.name} is sleeping`);
  },
  play() {
    console.log(`${this.name} is playing`);
  },
  study() {
    console.log(`Studing in ${this.subject}`);
  },
};

const showrov = new Student("Showrov", "CSE");
showrov.play();
showrov.study();

const siam = new Student("Siam", "science");
siam.sleep();
siam.study();

//........use class for above code........//
class Human {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
  walk() {
    console.log("they are walking");
  }
  run() {
    console.log("they are running");
  }
}

const person1 = new Human("Ashik", 71);
person1.run();
person1.walk();
