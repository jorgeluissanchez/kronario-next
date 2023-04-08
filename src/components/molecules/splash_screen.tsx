"use client";

import React from 'react';
import Typography from '@/components/atoms/typography';
import Image from '@/components/atoms/image';
import data from '@/assets/data';
const splash_screen = data.splash_screen;

export default function SplashScreen() {
  return (
    <section className={`flex flex-col justify-center items-center w-screen h-screen p-3 overflow-hidden`}>
      <article className="py-3 text-center">
        <Image src={splash_screen.logoSrc} alt={splash_screen.logoAlt} type="logo_full" />
      </article>
      <article className="text-center mx-auto h-96">
        <Image src={splash_screen.avatarSrc} alt={splash_screen.avatarAlt} type="avatar" />
      </article>
      <article className="mx-auto py-3 text-center">
        <Typography type="h1" color="blue">{splash_screen.title}</Typography>
        <Typography type="p" color="gray">{splash_screen.subtitle}</Typography>
      </article>
    </section>
  );
}

