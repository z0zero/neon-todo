import React from 'react';

interface FilterPillProps {
    active: boolean;
    label: string;
    onClick: () => void;
}

export const FilterPill: React.FC<FilterPillProps> = ({ active, label, onClick }) => (
    <button 
        onClick={onClick}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            active 
            ? 'bg-zinc-800 text-white shadow-lg ring-1 ring-zinc-700' 
            : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
        }`}
    >
        {label}
    </button>
);
