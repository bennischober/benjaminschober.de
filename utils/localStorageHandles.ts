import { useRouter } from 'next/router';

export function getLocalStorageItem(key: string) {
    return localStorage.getItem(key);
}

export function setLocalStorageItem(key: string, value: string) {
    localStorage.setItem(key, value);
}

export function removeLocalStorageItem(key: string) {
    localStorage.removeItem(key);
}

export function clearLocalStorage() {
    localStorage.clear();
}

export function getLocalStorageKeys() {
    return Object.keys(localStorage);
}

export function getLocalStorageValues() {
    return Object.values(localStorage);
}

export function getLocalStorageEntries() {
    return Object.entries(localStorage);
}

export function getLocalStorageSize() {
    return localStorage.length;
}
