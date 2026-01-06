import React from 'react';
import { TodoItem } from './TodoItem';
import type { Todo } from '../types';

interface TodoListProps {
    todos: Todo[];
    filter: string;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, filter, onToggle, onDelete }) => {
    if (todos.length === 0) {
        return (
            <div className="py-12 text-center text-zinc-700 italic">
                {filter === 'all' ? "No tasks yet. Start typing above." : `No ${filter} tasks.`}
            </div>
        );
    }

    return (
        <ul className="space-y-1" role="list" aria-label="Todo list">
            {todos.map(todo => (
                <li key={todo.id}>
                    <TodoItem 
                        todo={todo} 
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                </li>
            ))}
        </ul>
    );
};
