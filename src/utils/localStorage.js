function localStorageSetItem(key, value) {
  if (typeof key !== "string") {
    console.error(`Error: Key must be a string`);
    return;
  }

  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error(`Error setting item in localStorage`, error);
  }
}

function localStorageGetItem(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function localStorageRemoveItem(key) {
  localStorage.removeItem(key);
}

function localStorageClear() {
  localStorage.clear();
}

export {
  localStorageSetItem,
  localStorageClear,
  localStorageGetItem,
  localStorageRemoveItem,
};

// const FAVORITES_KEY = 'favoriteQuotes';

// /**
//  * Получить массив ID избранных цитат из localStorage
//  * @returns {string[]} Массив ID
//  */
// function getFavoriteIds() {
//   try {
//     const stored = localStorage.getItem(FAVORITES_KEY);
//     return stored ? JSON.parse(stored) : [];
//   } catch (error) {
//     console.error('Ошибка при чтении избранных из localStorage:', error);
//     return [];
//   }
// }

// /**
//  * Сохранить массив ID избранных цитат в localStorage
//  * @param {string[]} ids - массив ID цитат
//  */
// function setFavoriteIds(ids) {
//   try {
//     localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
//   } catch (error) {
//     console.error('Ошибка при сохранении избранных в localStorage:', error);
//   }
// }

// /**
//  * Добавить ID цитаты в избранные
//  * @param {string} id - ID цитаты
//  */
// function addFavoriteId(id) {
//   const ids = getFavoriteIds();
//   if (!ids.includes(id)) {
//     ids.push(id);
//     setFavoriteIds(ids);
//   }
// }

// /**
//  * Удалить ID цитаты из избранных
//  * @param {string} id - ID цитаты
//  */
// function removeFavoriteId(id) {
//   const ids = getFavoriteIds().filter(favId => favId !== id);
//   setFavoriteIds(ids);
// }

// /**
//  * Проверить, находится ли цитата в избранных
//  * @param {string} id - ID цитаты
//  * @returns {boolean}
//  */
// function isFavorite(id) {
//   return getFavoriteIds().includes(id);
// }

// export {
//   getFavoriteIds,
//   setFavoriteIds,
//   addFavoriteId,
//   removeFavoriteId,
//   isFavorite,
// };
