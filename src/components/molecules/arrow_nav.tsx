import React from 'react';
import Link from 'next/link';

type ArrowNavProps = {
  direction?: 'left' | 'right' | 'none'; // Propiedad opcional con valor string 'left', 'right' o 'none'
  leftUrl?: string; // Propiedad requerida de tipo string para la URL de la flecha izquierda
  rightUrl?: string; // Propiedad requerida de tipo string para la URL de la flecha derecha
  centerText: string; // Propiedad requerida de tipo string para el texto en el centro
};

const ArrowNav: React.FC<ArrowNavProps> = ({ direction = 'none', leftUrl = "", rightUrl = "", centerText }) => {
  const leftArrowVisibility =  direction === 'left' ? 'hidden' : 'visible';
  const rightArrowVisibility = direction === 'right' ? 'hidden' : 'visible';

  return (
    <div className="flex items-center justify-center my-2">
      <Link href={leftUrl} className="flex mx-3 mt-1" style={{ visibility: leftArrowVisibility }}>
          <img src="/arrowLeft.svg" alt="arrow left" className="h-6 w-6" />
      </Link>
      <div>
        <h2 className="text-2xl font-thin">{centerText}</h2>
      </div>
      <Link href={rightUrl} className="flex mx-3 mt-1" style={{ visibility: rightArrowVisibility }}>
          <img src="/arrowRight.svg" alt="arrow right" className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default ArrowNav;