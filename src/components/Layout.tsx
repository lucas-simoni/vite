import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-800 text-zinc-100">
      {children}
    </div>
  );
}
