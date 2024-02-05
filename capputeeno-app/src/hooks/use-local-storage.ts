import React from 'react';

export function useLocalStorage<T>(key: string, initialState: T) {
    const [storage, setStorage] = React.useState<T>(initialState);

    React.useEffect(() => {
        if (typeof window === 'undefined') return;
        const storageData = localStorage.getItem(key);
        if (storageData) setStorage(JSON.parse(storageData));
    }, [key]);

    const updateLocalStorage = React.useCallback(function (newStorage: T) {
        localStorage.setItem(key, JSON.stringify(newStorage));
        setStorage(newStorage);
    }, [key]);

    return { storage, updateLocalStorage };
}
