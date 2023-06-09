"use client";
import { useState, useRef, useEffect } from "react";
import Menu from "@/components/molecules/menu";
import ProgressBar from "@/components/atoms/progress_bar";
import ArrowNav from "@/components/molecules/arrow_nav";
import Table from "@/components/organisms/tabla";
import * as htmlToImage from 'html-to-image';
import data from '@/assets/data';
import { useScheduleContext } from "@/context/scheduleContext";
import { useSwipeable } from 'react-swipeable';

import ImageNext from 'next/image';

const pagina_horarios = data.pagina_horarios;

import { redirect } from 'next/navigation';

const Page = () => {
  const { menu, arrow_nav, progress_bar } = pagina_horarios;
  const { nextSchedule, prevSchedule, courses, horarios, loading } = useScheduleContext();

  const tableRef = useRef(null);
  const [showArrowReminder, setShowArrowReminder] = useState(true);
  const [reminderContent, setReminderContent] = useState("Use las flechas para navegar entre los horarios");

  const [errorClipboard, setErrorClipboard] = useState(false);


  const handleKeyDown = (event: any) => {
    if (event.key === 'ArrowLeft') {
      prevSchedule();
    }
    if (event.key === 'ArrowRight') {
      nextSchedule();
    }
    setShowArrowReminder(false);
  };
  const [copiedNRC, setCopiedNRC] = useState('');

  const handleCopy = (nrc: string) => {
         setShowArrowReminder(false);
    navigator.clipboard.writeText(nrc)
      .then(() =>{
         setCopiedNRC(nrc)
          setTimeout(() => {
            setCopiedNRC('');
          }
          , 2000);
      }
      )
      .catch((error) => {
        if (error.name === 'NotAllowedError') {
          setErrorClipboard(true);
          setTimeout(() => {
            setErrorClipboard(false);
          }
          , 2000);
        }
      });
  };


  let handlers: any = useSwipeable({
    onSwipedLeft: () => {
      nextSchedule();
      setShowArrowReminder(false);
    },
    onSwipedRight: () => {
      prevSchedule();
      setShowArrowReminder(false);
    },
    trackMouse: false,
  });


  useEffect(() => {
    window.document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleDownloadImage = async () => {
    const element = tableRef.current;
    if (!element) {
      return;
    }

    try {
      const dataUrl = await htmlToImage.toPng(element);
      const link = document.createElement('a');
      link.download = 'HorarioConKronario.png';
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 768) { 
      setReminderContent("Desliza para navegar entre los horarios");
    }
  }, []);

  if(loading){
    return (
      <div className="flex flex-col h-screen bg-gray-100 justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )    
  }

  return (
    <div {...handlers} className="flex flex-col h-screen ">
      <Menu type={menu.type} text={menu.text} onClick={handleDownloadImage} />
      <ProgressBar progress={progress_bar.progress} />
      <ArrowNav block={arrow_nav.block} leftUrl={arrow_nav.leftUrl} rightUrl={arrow_nav.rightUrl} text={arrow_nav.text} />
    <div className="flex-1 overflow-y-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-white" ref={tableRef}>
        <div className="w-full md:w-2/3 mx-4 p-4">
          <div className="bg-gray-500 rounded-lg flex justify-center items-center">
            <Table />
          </div>
        </div>
        <div className="w-full lg:w-1/3 mx-4 p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        { courses.map((course: any, key) => (
          <div className="bg-gray-100 rounded-lg p-4 overflow-hidden relative md:hover:bg-gray-200" key={key}  onClick={() => handleCopy(course.nrc)}>
            <div className={`h-4 w-4 rounded-full float-left mr-2 ${course.color}`}></div>
            <p className="font-medium text-sm">{course.name}</p>
            <p className="text-xs text-gray-500">NRC: {course.nrc}</p>
            <div className="truncate line-clamp-1">
              <p className="text-xs text-gray-500">Profesor/es: {course.teachers.join(', ')}</p>
            </div>
            <div className={`absolute ${course.color} top-0 right-0 w-full h-full flex justify-center items-center ${copiedNRC === course.nrc ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
              <p className="text-xs text-gray-500 font-bold">NRC {course.nrc} copiado</p>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
      {showArrowReminder && (
        <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-md px-4 py-2 bg-gray-100 border-t-4 border-blue-500 rounded-b shadow-md">
        <div className="flex items-center">
          <div className="flex-shrink-0 rounded-md p-2">
            <ImageNext src="/infoIcon.svg" width={24} height={24}  alt="Informacion" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              Informacion
            </p>
            <p className="mt-1 text-sm text-gray-600">
              {reminderContent} / Clickea en un curso para copiar su NRC
            </p>
          </div>
        </div>
      </div>
      )}
      {errorClipboard && (
        <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-md px-4 py-2 bg-gray-100 border-t-4 border-blue-500 rounded-b shadow-md">
        <div className="flex items-center">
          <div className="flex-shrink-0 rounded-md p-2">
            <ImageNext src="/infoIcon.svg" width={24} height={24}  alt="Informacion" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              Informacion
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Habilita el acceso al portapapeles para copiar el NRC
            </p>
          </div>
        </div>
      </div>
      )}
    </div>
  </div>
  );
};

export default Page;