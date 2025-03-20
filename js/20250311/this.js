const sayHello = () => {
  console.log(`hello ${this}`);
};

const boy = {
  name: 'woodz',
  sayHello,
};

const girl = {
  name: 'moodz',
  sayHello,
};

boy.sayHello();
girl.sayHello();
