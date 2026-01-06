export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export type FilterType = 'all' | 'active' | 'completed';

export type TodoAction =
    | { type: 'ADD'; text: string }
    | { type: 'TOGGLE'; id: string }
    | { type: 'DELETE'; id: string }
    | { type: 'CLEAR_COMPLETED' }
    | { type: 'SET_TODOS'; todos: Todo[] };
