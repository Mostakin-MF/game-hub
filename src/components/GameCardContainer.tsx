import { type ReactNode } from 'react';

interface GameCardContainerProps {
  children: ReactNode;
}

export default function GameCardContainer({ children }: GameCardContainerProps) {
  return (
    <div className="rounded-lg transition-transform duration-200 hover:scale-105 relative hover:z-30">
      {children}
    </div>
  );
}
