"use client";
import React, { useState } from 'react';
import Typography from '@/components/atoms/typography';
import Image from '@/components/atoms/image';
import data from '@/assets/data';

const splash_screen = data.splash_screen;

interface splashScreenProps {
  onClick?: () => void;
}

export default function SplashScreen( { onClick }: splashScreenProps) {

  return (
    <section className={`flex flex-col justify-center items-center w-screen h-screen p-3 overflow-hidden`}>
      <article className="py-3 text-center">
        <Image src={splash_screen.logoSrc} alt={splash_screen.logoAlt} type="logo_full" />
      </article>
      <article className="text-center mx-auto h-96 overflow-hidden">
        <Image src={splash_screen.avatarSrc} alt={splash_screen.avatarAlt} type="avatar" />
      </article>
      <article className="mx-auto py-3 text-center">
        <Typography type="h1" color="blue">{splash_screen.title}</Typography>
        <Typography type="p" color="gray">{splash_screen.subtitle}</Typography>
        <button
          className="bg-blue-500 text-white rounded-2xl px-4 py-2 mt-3 hover:bg-blue-600 transition-colors duration-300"
          onClick={() => onClick && onClick()}
        >
          Comenzar
        </button>
      </article>
    </section>
  );
}
