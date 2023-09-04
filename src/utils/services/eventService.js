import database from '../eventDB.json';
const token = '64f5b6cd2b07270f705d910a';

// Додавання події до бази даних
export const addEvent = newEvent => {
  database.push(newEvent);
};

// Оновлення події за ідентифікатором
export const updateEvent = (id, updatedFields) => {
  const eventToUpdate = database.find(event => event.id === id);
  if (eventToUpdate) {
    Object.assign(eventToUpdate, updatedFields);
  } else {
    console.log('Подію з ідентифікатором', id, 'не знайдено.');
  }
};

// Видалення події за ідентифікатором
export const deleteEvent = id => {
  const index = database.findIndex(event => event.id === id);
  if (index !== -1) {
    database.splice(index, 1);
  } else {
    console.log('Подію з ідентифікатором', id, 'не знайдено.');
  }
};

// Виведення всіх подій
export const getAllEvents = async () => {
  try {
    const response = await fetch(`https://${token}.mockapi.io/event`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    const eventList = await response.json();
    console.log(eventList);
    return eventList;
  } catch (error) {
    console.log(error.message);
  }
};

// export const getAllEvents = () => {
//   console.log(database);
//   return database;
// };
