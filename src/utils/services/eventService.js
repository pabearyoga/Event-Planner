const token = '64f5b6cd2b07270f705d910a';

// Виведення всіх подій
export const getAllEvents = async () => {
  try {
    const response = await fetch(`https://${token}.mockapi.io/event`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    const eventList = await response.json();
    // console.log(eventList);
    return eventList;
  } catch (error) {
    console.log(error.message);
  }
};

// Виведення події за допомогою id
export const getEventById = async id => {
  try {
    const response = await fetch(`https://${token}.mockapi.io/event/${id}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch event by ID');
    }

    const event = await response.json();
    return event;
  } catch (error) {
    console.error(
      'Помилка при отриманні події за ідентифікатором:',
      error.message
    );
    throw error;
  }
};

// Додавання події до бази даних
export const addEvent = async newEvent => {
  try {
    const response = await fetch(`https://${token}.mockapi.io/event`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    });

    if (!response.ok) {
      throw new Error('Failed to add event');
    }

    // Отримуємо створену подію з відповіді сервера
    const addedEvent = await response.json();
    console.log('Подію додано:', addedEvent);
    // return addedEvent;
  } catch (error) {
    console.error('Помилка при додаванні події:', error.message);
    throw error;
  }
};

// Оновлення події за ідентифікатором
export const updateEvent = async (id, updatedFields) => {
  try {
    const response = await fetch(`https://${token}.mockapi.io/event/${id}`, {
      method: 'PUT', // Метод PUT для оновлення
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFields), // Оновлені дані
    });

    if (!response.ok) {
      throw new Error('Failed to update event');
    }

    // Отримуємо оновлену подію з відповіді сервера (якщо відповідь містить оновлену інформацію)
    const updatedEvent = await response.json();
    console.log('Подію оновлено:', updatedEvent);
    // return updatedEvent;
  } catch (error) {
    console.error('Помилка при оновленні події:', error.message);
    throw error;
  }
};

// Видалення події за ідентифікатором
export const deleteEvent = async id => {
  try {
    const response = await fetch(`https://${token}.mockapi.io/event/${id}`, {
      method: 'DELETE', // Метод DELETE для видалення
    });

    if (!response.ok) {
      throw new Error('Failed to delete event');
    }

    console.log(`Подію з ідентифікатором ${id} видалено.`);
  } catch (error) {
    console.error('Помилка при видаленні події:', error.message);
    throw error;
  }
};
