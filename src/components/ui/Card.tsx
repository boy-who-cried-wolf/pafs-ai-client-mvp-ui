import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  hover?: boolean;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  hover = false,
  style,
}) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-xl p-6';
  
  const variants = {
    default: 'shadow-sm',
    elevated: 'shadow-lg',
    bordered: 'border border-gray-200 dark:border-gray-700',
  };

  const hoverStyles = hover
    ? 'transition-transform duration-300 hover:scale-105'
    : '';

  return (
    <div
      className={twMerge(
        baseStyles,
        variants[variant],
        hoverStyles,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card; 