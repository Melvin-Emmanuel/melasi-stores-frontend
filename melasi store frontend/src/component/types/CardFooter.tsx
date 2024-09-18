import React from 'react';
import type { CardProps } from '@material-tailwind/react';

interface CardFooterProps extends CardProps {
  // Additional custom props if needed
}

const CardFooter: React.FC<CardFooterProps> = ({
  className = '',
  children,
  ...rest
}) => {
  return (
    <div className={`p-4 ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default CardFooter;
