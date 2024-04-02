"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

class Manager {
  constructor() {
    this.chefs = new Map();
    this.chefs.set('Пицца', 'Олег');
    this.chefs.set('Суши', 'Андрей');
    this.chefs.set('Десерт', 'Анна');

    this.availableDishes = new Map([
      ["Маргарита", "Пицца"],
      ["Пепперони", "Пицца"],
      ["Три сыра", "Пицца"],
      ["Филадельфия", "Суши"],
      ["Калифорния", "Суши"],
      ["Чизмаки", "Суши"],
      ["Сеякемаки", "Суши"],
      ["Тирамису", "Десерт"],
      ["Чизкейк", "Десерт"]
    ]);
  }

  newOrder(client, ...orders) {
    console.log(`Клиент ${client.firstname} ${client.lastname} заказал:`);
    for (const order of orders) {
      const dishType = this.availableDishes.get(order.name);
      if (dishType && dishType === order.type) {
        const chef = this.chefs.get(order.type);
        console.log(`${order.type} "${order.name}" - ${order.quantity}; готовит повар ${chef}`);
      } else {
        console.log(`Ошибка: Блюдо "${order.name}" не может быть приготовлено, так как такого блюда для типа ${order.type} не существует.`);
      }
    }
  }
}

const manager = new Manager();

manager.newOrder(
  new Client("Иван", "Иванов"), 
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);

const pavel = new Client("Павел", "Павлов");
manager.newOrder(
  pavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" }
);

manager.newOrder(
  pavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" }
);

manager.newOrder(
  pavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" }
);
