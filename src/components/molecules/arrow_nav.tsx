"use client";

import React from 'react';
import Link from 'next/link';

type ArrowNavProps = {
  block?: string; // Propiedad opcional con valor string 'left', 'right' o 'none'
  leftUrl?: string; // Propiedad requerida de tipo string para la URL de la flecha izquierda
  rightUrl?: string; // Propiedad requerida de tipo string para la URL de la flecha derecha
  text: string; // Propiedad requerida de tipo string para el texto en el centro
};

const ArrowNav: React.FC<ArrowNavProps> = ({ block = 'none', leftUrl = "", rightUrl = "", text }) => {
  const leftArrowVisibility =  block === 'left' ? 'hidden' : 'visible';
  const rightArrowVisibility = block === 'right' ? 'hidden' : 'visible';

  return (
    <div className="flex items-center justify-center py-3 bg-white">
      <Link href={leftUrl} className="flex mx-3 mt-1" style={{ visibility: block === 'both' ? 'hidden' : leftArrowVisibility }}>
          <img src="/arrowLeft.svg" alt="arrow left" className="h-6 w-6" />
      </Link>
      <div>
        <h2 className="text-2xl font-thin">{text}</h2>
      </div>
      <Link href={rightUrl} className="flex mx-3 mt-1" style={{ visibility: block === 'both' ? 'hidden' : rightArrowVisibility }}>  
          <img src="/arrowRight.svg" alt="arrow right" className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default ArrowNav;
