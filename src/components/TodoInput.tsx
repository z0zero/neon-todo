import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoInputProps {
    onAdd: (text: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        onAdd(inputValue.trim());
        setInputValue("");
    };

    return (
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon/20 to-zinc-800/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <form 
                onSubmit={handleSubmit} 
                className="relative flex items-center bg-dark-card border border-dark-border rounded-2xl p-2 transition-all duration-300 focus-within:border-zinc-700 focus-within:ring-1 focus-within:ring-zinc-700/50"
            >
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="What's next?"
                    className="w-full bg-transparent text-white placeholder-zinc-600 px-6 py-4 outline-none text-xl font-medium"
                    aria-label="New todo input"
                />
                <button 
                    type="submit" 
                    disabled={!inputValue.trim()}
                    className="p-4 bg-white text-black rounded-xl hover:bg-neon hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:bg-white disabled:hover:scale-100 transition-all duration-200 font-bold"
                    aria-label="Add todo"
                >
                    <Plus size={24} strokeWidth={2.5} />
                </button>
            </form>
        </div>
    );
};
