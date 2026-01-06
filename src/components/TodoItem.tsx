import { X, Check } from 'lucide-react';
import type { Todo } from '../types';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
    return (
        <div className="group relative flex items-center gap-4 py-4 px-2 hover:bg-white/[0.02] rounded-xl transition-all duration-300 animate-enter">
            <button
                onClick={() => onToggle(todo.id)}
                className={`relative flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    todo.completed 
                        ? 'bg-neon border-neon' 
                        : 'border-zinc-700 hover:border-neon'
                }`}
                aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
            >
                <Check 
                    size={14} 
                    className={`text-black transition-transform duration-300 ${
                        todo.completed ? 'scale-100' : 'scale-0'
                    }`} 
                    strokeWidth={4} 
                />
            </button>

            <span 
                className={`flex-1 text-lg font-medium transition-all duration-300 ${
                    todo.completed 
                        ? 'text-zinc-600 line-through decoration-zinc-700' 
                        : 'text-zinc-100'
                }`}
            >
                {todo.text}
            </span>

            <button
                onClick={() => onDelete(todo.id)}
                className="p-2 text-zinc-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-200 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                aria-label="Delete todo"
            >
                <X size={20} />
            </button>
        </div>
    );
};
