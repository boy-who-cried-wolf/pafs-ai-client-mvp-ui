import React from 'react';
import { twMerge } from 'tailwind-merge';

type BaseButtonProps = {
  variant?: 'primary' | 'secondary' | 'accent' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  href?: string;
  disabled?: boolean;
};

type ButtonProps = BaseButtonProps & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  fullWidth = false,
  isLoading = false,
  loadingText,
  className,
  disabled,
  href,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 active:bg-primary-800',
    secondary: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-500 active:bg-primary-100',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-400 active:bg-accent-700',
    icon: 'p-2 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const width = fullWidth ? 'w-full' : '';

  const loadingStyles = isLoading ? 'relative text-transparent transition-none hover:text-transparent' : '';
  const loadingSpinner = isLoading ? (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
    </div>
  ) : null;

  const buttonContent = (
    <>
      {icon && <span className={variant === 'icon' ? '' : 'mr-2'}>{icon}</span>}
      {isLoading ? loadingText || children : children}
      {loadingSpinner}
    </>
  );

  const buttonClasses = twMerge(
    baseStyles,
    variants[variant],
    sizes[size],
    width,
    loadingStyles,
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {buttonContent}
    </button>
  );
};

export default Button; 