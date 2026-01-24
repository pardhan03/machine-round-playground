const user = {
  name: "React Dev",
  greet() {
    console.log(this.name);
  }
};

user.greet();

function show() {
  console.log(this);
}

show();

const obj = {
  name: "Frontend",
  greet: () => {
    console.log(this.name);
  }
};

obj.greet();

const obj1 = {
  name: "Frontend",
  greet() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

obj.greet();

function Person(name) {
  this.name = name;
}

const p1 = new Person("React");
console.log(p1.name);