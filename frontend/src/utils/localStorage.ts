/* eslint-disable @typescript-eslint/no-explicit-any */
export const getFromLocalStorage = (key: string, defaultValue = null) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
};

export const setInLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const removeFromLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};
