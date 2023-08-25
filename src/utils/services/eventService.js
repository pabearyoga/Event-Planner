import database from '../eventDB.json';

// Додавання події до бази даних
const addEvent = newEvent => {
  database.push(newEvent);
};

// Оновлення події за ідентифікатором
const updateEvent = (id, updatedFields) => {
  const eventToUpdate = database.find(event => event.id === id);
  if (eventToUpdate) {
    Object.assign(eventToUpdate, updatedFields);
  } else {
    console.log('Подію з ідентифікатором', id, 'не знайдено.');
  }
};

// Видалення події за ідентифікатором
const deleteEvent = id => {
  const index = database.findIndex(event => event.id === id);
  if (index !== -1) {
    database.splice(index, 1);
  } else {
    console.log('Подію з ідентифікатором', id, 'не знайдено.');
  }
};

// Виведення всіх подій
const getAllEvents = () => {
  return database;
};

module.exports = {
  addEvent,
  updateEvent,
  deleteEvent,
  getAllEvents,
};
