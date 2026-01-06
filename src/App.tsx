import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoFilters } from './components/TodoFilters';
import { TodoList } from './components/TodoList';
import { TodoStats } from './components/TodoStats';

function App() {
    const {
        filteredTodos,
        filter,
        setFilter,
        addTodo,
        toggleTodo,
        deleteTodo,
        clearCompleted,
        counts,
        progress,
    } = useTodos();

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-6 bg-dark-bg selection:bg-neon selection:text-black">
            <div className="w-full max-w-xl">
                
                <header className="mb-12 flex items-end justify-between">
                    <div>
                        <h1 className="text-5xl font-bold tracking-tight text-white mb-2">
                            Focus<span className="text-neon">.</span>
                        </h1>
                        <p className="text-zinc-500 font-medium">
                            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                    <TodoStats progress={progress} />
                </header>

                <main className="space-y-8">
                    <TodoInput onAdd={addTodo} />
                    
                    <TodoFilters 
                        filter={filter} 
                        onFilterChange={setFilter}
                        counts={counts}
                        onClearCompleted={clearCompleted}
                    />

                    <TodoList 
                        todos={filteredTodos}
                        filter={filter}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                </main>
            </div>
        </div>
    );
}

export default App;
