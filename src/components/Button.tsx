import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'ghost' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({ 
    children, 
    className = '', 
    variant = 'primary', 
    ...props 
}) => {
    const baseStyle = "font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-95";
    const variants = {
        primary: "bg-neon text-black hover:bg-neon-hover shadow-[0_0_15px_rgba(212,255,0,0.3)] hover:shadow-[0_0_25px_rgba(212,255,0,0.5)]",
        ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-800",
        icon: "p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg"
    };
    
    return (
        <button 
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
