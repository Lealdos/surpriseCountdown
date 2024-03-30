// Interface for your data (optional, but improves type safety)
interface MyData {
    name: string;
    value: number;
}

// Function to retrieve data from local storage
export function getFromLocalStorage(key: string): MyData[] | [] {
    const storage = localStorage.getItem(key);
    let checkedStorage: [];
    if (!storage) {
        localStorage.setItem('pruebita', JSON.stringify([]));
        checkedStorage = [];
        return checkedStorage;
    } else {
        checkedStorage = JSON.parse(storage);
        return checkedStorage;
    }
}

// Function to store data in local storage
export function setToLocalStorage<T>(key: string, value: T): void {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(
            `Error storing data in localStorage for key: ${key}`,
            error
        );
    }
}

// Function to create or update an item
