import React from 'react';
import type { CardProps } from '@material-tailwind/react';

interface CardHeaderProps extends CardProps {
  // Add any custom props if needed
}

const CardHeader: React.FC<CardHeaderProps> = ({
  variant = "filled",
  color = "white",
  shadow = true,
  className = '',
  children,
  ...rest
}) => {
  // Create dynamic classes based on the props
  const baseClasses = `p-4 rounded-lg ${shadow ? 'shadow-lg' : ''} `;
  const variantClass = variant === "gradient" ? "bg-gradient-to-r from-blue-500 to-indigo-600" : "bg-gray-200";
  const colorClass = color === "white" ? "bg-white" : "";

  return (
    <div
      className={`${baseClasses} ${variantClass} ${colorClass} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardHeader;
