// Interface for your data (optional, but improves type safety)
interface MyData {
  name: string;
  value: number;
}

// Function to retrieve data from local storage
export function getFromLocalStorage<T>(key: string): T | null {
  const storage = localStorage.getItem("pruebita");
  let checkParsedTodos;
  if (!storage) {
    localStorage.setItem('pruebita', JSON.stringify([]));
    checkParsedTodos = [];
    return checkParsedTodos;
  } else {
    return (checkParsedTodos = JSON.parse(storage));
  }
}

// Function to store data in local storage
export function setToLocalStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error storing data in localStorage for key: ${key}`, error);
  }
}

// Function to create or update an item
export function createOrUpdateItem<T>(key: string, data: T): void {
  setToLocalStorage(key, data);
}

// Function to delete an item
export function deleteItem(key: string): void {
  localStorage.removeItem(key);
}

// Function to add an item to an array stored in local storage
export function addItemToArray<T>(key: string, item: T): void {
  const existingData = getFromLocalStorage<T[]>(key);
  if (existingData) {
    existingData.push(item);
    setToLocalStorage(key, existingData);
  } else {
    setToLocalStorage(key, [item]); // Create a new array with the item
  }
}
