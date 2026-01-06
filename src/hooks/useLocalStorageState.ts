import { useState, useEffect, useCallback } from 'react';

export function useLocalStorageState<T>(
    key: string,
    initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
    const [state, setState] = useState<T>(() => {
        try {
            const stored = localStorage.getItem(key);
            if (stored !== null) {
                return JSON.parse(stored) as T;
            }
        } catch (error) {
            console.warn(`Failed to read localStorage key "${key}":`, error);
        }
        return initialValue;
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch (error) {
            console.warn(`Failed to write localStorage key "${key}":`, error);
        }
    }, [key, state]);

    const setValue = useCallback((value: T | ((prev: T) => T)) => {
        setState(value);
    }, []);

    return [state, setValue];
}
