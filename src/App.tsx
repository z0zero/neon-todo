import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { TodoItem } from './components/TodoItem';
import type { Todo, FilterType } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Design system research", completed: true },
    { id: 2, text: "Prototype interactions", completed: false },
    { id: 3, text: "Review with team", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    
    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const progress = todos.length > 0 
    ? Math.round((todos.filter(t => t.completed).length / todos.length) * 100) 
    : 0;

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-dark-bg selection:bg-neon selection:text-black">
      <div className="w-full max-w-xl">
        
        {/* Header Section */}
        <header className="mb-12 flex items-end justify-between">
            <div>
                <h1 className="text-5xl font-bold tracking-tight text-white mb-2">
                    Focus<span className="text-neon">.</span>
                </h1>
                <p className="text-zinc-500 font-medium">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </p>
            </div>
            <div className="text-right">
                <div className="text-3xl font-bold text-white mb-1">{progress}%</div>
                <div className="text-xs font-semibold text-zinc-600 uppercase tracking-widest">Done</div>
            </div>
        </header>

        {/* Main Interface */}
        <main className="space-y-8">
            
            {/* Input Area - Clean & Minimal */}
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-neon/20 to-zinc-800/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <form onSubmit={addTodo} className="relative flex items-center bg-dark-card border border-dark-border rounded-2xl p-2 transition-all duration-300 focus-within:border-zinc-700 focus-within:ring-1 focus-within:ring-zinc-700/50">
                    <input 
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="What's next?"
                        className="w-full bg-transparent text-white placeholder-zinc-600 px-6 py-4 outline-none text-xl font-medium"
                    />
                    <button 
                        type="submit" 
                        disabled={!inputValue.trim()}
                        className="p-4 bg-white text-black rounded-xl hover:bg-neon hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:bg-white disabled:hover:scale-100 transition-all duration-200 font-bold"
                    >
                        <Plus size={24} strokeWidth={2.5} />
                    </button>
                </form>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-6 border-b border-zinc-800/50 pb-4">
                {(['all', 'active', 'completed'] as const).map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`text-sm font-semibold tracking-wide capitalize transition-colors duration-200 ${
                            filter === f ? 'text-neon' : 'text-zinc-600 hover:text-zinc-400'
                        }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* List */}
            <div className="space-y-1">
                {filteredTodos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                ))}
                {filteredTodos.length === 0 && (
                    <div className="py-12 text-center text-zinc-700 italic">
                        {filter === 'all' ? "No tasks yet. Start typing above." : `No ${filter} tasks.`}
                    </div>
                )}
            </div>

        </main>
      </div>
    </div>
  );
}

export default App;
