import React from 'react';
import type { CardProps } from '@material-tailwind/react';

interface CustomCardProps extends CardProps {
  // You can extend or add additional props if needed
}

const Card: React.FC<CustomCardProps> = ({
  className = '',
  children,
  ...rest
}) => {
  return (
    <div
      className={`p-4 bg-white rounded-lg ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
