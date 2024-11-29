"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 px-6 py-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-light hover:opacity-60">Daniel Oglesby</Link>
      </div>
      
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed top-6 right-6 z-50"
        aria-label="Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`
        fixed top-0 right-0 h-full w-64 bg-white shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6 pt-20 space-y-4">
          <Link href="/landscapes" className="block hover:opacity-60">Landscapes</Link>
          <Link href="/portraits" className="block hover:opacity-60">Portraits</Link>
          <Link href="/shows" className="block hover:opacity-60">Shows</Link>
        </div>
      </div>
    </nav>
  );
}