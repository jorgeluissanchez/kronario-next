"use client";

import React from 'react';
import Image from '@/components/atoms/image';

interface MenuProps {
  type?: string;
  buttonLink?: string;
  text?: string;
  inputChange?: (text: string) => void;
  onClick?: () => void;
}

export default function Menu({ type = "none", buttonLink, text, inputChange, onClick }: MenuProps) {

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white border-b-10 border-blue-500 py-3 px-6">
      <div className="flex items-center flex-shrink-0 text-customGray mr-6">
        <Image src="/kronario.svg" alt="logo kronario" type="logo" />
      </div>
      <div className="relative">
        {type === 'search' ? (
          <div className="flex">
            <input
              className="block w-full max-w-xs px-4 py-2 text-gray-900 placeholder-gray-500 border border-none bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              type="search"
              name="search"
              onChange={(e) => inputChange && inputChange(e.target.value)}

              placeholder={text || 'Buscar'}
              style={{maxWidth: '240px'}}
            />
            <button type="submit" className="bg-gray-100 p-2">
              <Image
                src="/search.svg"
                alt="logo kronario"
                type="icono"
              />
            </button>
          </div>
        ) : type === 'button' ? (
          <button className="bg-gray-200 px-5 py-2 rounded-md text-sm font-medium text-gray-700  hover:text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={() => onClick && onClick()}>
            <a href={buttonLink || '#'}>{text || 'Botón'}</a>
          </button>
        ) : null}
      </div>
    </nav>
  );
}
