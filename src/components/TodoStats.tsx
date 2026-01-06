import React from 'react';

interface TodoStatsProps {
    progress: number;
}

export const TodoStats: React.FC<TodoStatsProps> = ({ progress }) => {
    return (
        <div className="text-right">
            <div className="text-3xl font-bold text-white mb-1">{progress}%</div>
            <div className="text-xs font-semibold text-zinc-600 uppercase tracking-widest">Done</div>
        </div>
    );
};
