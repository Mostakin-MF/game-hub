import { type ReactNode } from 'react';

interface GameCardContainerProps {
  children: ReactNode;
}

export default function GameCardContainer({ children }: GameCardContainerProps) {
  return (
    <div className="rounded-lg overflow-hidden transition-transform duration-200 hover:scale-105">
      {children}
    </div>
  );
}
