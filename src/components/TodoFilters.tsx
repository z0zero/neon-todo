import React from 'react';
import type { FilterType } from '../types';

interface TodoFiltersProps {
    filter: FilterType;
    onFilterChange: (filter: FilterType) => void;
    counts: { total: number; active: number; completed: number };
    onClearCompleted: () => void;
}

const FILTERS: FilterType[] = ['all', 'active', 'completed'];

export const TodoFilters: React.FC<TodoFiltersProps> = ({ 
    filter, 
    onFilterChange, 
    counts, 
    onClearCompleted 
}) => {
    const getCountForFilter = (f: FilterType): number => {
        switch (f) {
            case 'all': return counts.total;
            case 'active': return counts.active;
            case 'completed': return counts.completed;
        }
    };

    return (
        <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4">
            <div className="flex gap-6">
                {FILTERS.map((f) => (
                    <button
                        key={f}
                        onClick={() => onFilterChange(f)}
                        className={`text-sm font-semibold tracking-wide capitalize transition-colors duration-200 ${
                            filter === f ? 'text-neon' : 'text-zinc-600 hover:text-zinc-400'
                        }`}
                        aria-pressed={filter === f}
                    >
                        {f}
                        <span className="ml-1.5 text-xs opacity-60">
                            ({getCountForFilter(f)})
                        </span>
                    </button>
                ))}
            </div>
            {counts.completed > 0 && (
                <button
                    onClick={onClearCompleted}
                    className="text-xs font-medium text-zinc-600 hover:text-red-400 transition-colors duration-200"
                >
                    Clear completed
                </button>
            )}
        </div>
    );
};
