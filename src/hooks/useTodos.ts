import { useReducer, useMemo, useCallback, useEffect } from 'react';
import { useLocalStorageState } from './useLocalStorageState';
import type { Todo, TodoAction, FilterType } from '../types';

const STORAGE_KEY = 'neon-todo:v1';

const DEFAULT_TODOS: Todo[] = [
    { id: crypto.randomUUID(), text: "Design system research", completed: true },
    { id: crypto.randomUUID(), text: "Prototype interactions", completed: false },
    { id: crypto.randomUUID(), text: "Review with team", completed: false },
];

function todoReducer(state: Todo[], action: TodoAction): Todo[] {
    switch (action.type) {
        case 'ADD':
            return [
                { id: crypto.randomUUID(), text: action.text, completed: false },
                ...state
            ];
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case 'DELETE':
            return state.filter(todo => todo.id !== action.id);
        case 'CLEAR_COMPLETED':
            return state.filter(todo => !todo.completed);
        case 'SET_TODOS':
            return action.todos;
        default:
            return state;
    }
}

export function useTodos() {
    const [storedTodos, setStoredTodos] = useLocalStorageState<Todo[]>(STORAGE_KEY, DEFAULT_TODOS);
    const [todos, dispatch] = useReducer(todoReducer, storedTodos);
    const [filter, setFilter] = useLocalStorageState<FilterType>('neon-todo:filter', 'all');

    useEffect(() => {
        setStoredTodos(todos);
    }, [todos, setStoredTodos]);

    const addTodo = useCallback((text: string) => {
        if (text.trim()) {
            dispatch({ type: 'ADD', text: text.trim() });
        }
    }, []);

    const toggleTodo = useCallback((id: string) => {
        dispatch({ type: 'TOGGLE', id });
    }, []);

    const deleteTodo = useCallback((id: string) => {
        dispatch({ type: 'DELETE', id });
    }, []);

    const clearCompleted = useCallback(() => {
        dispatch({ type: 'CLEAR_COMPLETED' });
    }, []);

    const filteredTodos = useMemo(() => {
        switch (filter) {
            case 'active':
                return todos.filter(t => !t.completed);
            case 'completed':
                return todos.filter(t => t.completed);
            default:
                return todos;
        }
    }, [todos, filter]);

    const counts = useMemo(() => ({
        total: todos.length,
        active: todos.filter(t => !t.completed).length,
        completed: todos.filter(t => t.completed).length,
    }), [todos]);

    const progress = useMemo(() => 
        counts.total > 0 ? Math.round((counts.completed / counts.total) * 100) : 0
    , [counts]);

    return {
        todos,
        filteredTodos,
        filter,
        setFilter,
        addTodo,
        toggleTodo,
        deleteTodo,
        clearCompleted,
        counts,
        progress,
    };
}
