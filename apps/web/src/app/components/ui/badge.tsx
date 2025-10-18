'use client';

import * as React from 'react';

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'border-transparent bg-blue-600 text-white hover:bg-blue-500',
  secondary: 'border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300',
  destructive: 'border-transparent bg-red-600 text-white hover:bg-red-500',
  outline: 'border border-gray-400 text-gray-800',
};

function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}

export { Badge };
