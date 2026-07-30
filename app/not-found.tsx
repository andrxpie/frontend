import { cn } from '@/lib/utils';
import React from 'react';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center justify-center h-full", className)}>

    </div>
  );
};

export default NotFoundPage;