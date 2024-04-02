"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

// Создаем класс для итератора по музыкальной коллекции
class MusicCollectionIterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  // Метод, возвращающий следующий альбом из коллекции
  next() {
    if (this.index < this.collection.length) {
      return { value: this.collection[this.index++], done: false };
    } else {
      return { done: true };
    }
  }
}

// Создаем класс Музыкальная коллекция
class MusicCollection {
  constructor() {
    this.albums = [];
  }

  // Метод для добавления альбома в коллекцию
  addAlbum(title, artist, year) {
    this.albums.push({ title, artist, year });
  }

  // Метод, возвращающий итератор по коллекции
  [Symbol.iterator]() {
    return new MusicCollectionIterator(this.albums);
  }
}

// Создаем экземпляр музыкальной коллекции
const myCollection = new MusicCollection();

// Добавляем несколько альбомов
myCollection.addAlbum("Album 1", "Artist 1", "2000");
myCollection.addAlbum("Album 2", "Artist 2", "2005");
myCollection.addAlbum("Album 3", "Artist 3", "2010");

// Используем цикл for...of для вывода альбомов в консоль
for (const album of myCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
