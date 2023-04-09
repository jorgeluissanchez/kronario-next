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
const pagina_horarios = data.pagina_horarios;

const Page = () => {
  const { menu, arrow_nav, progress_bar } = pagina_horarios;
  const { nextSchedule, prevSchedule, courses } = useScheduleContext();
  const tableRef = useRef(null);
  const [showArrowReminder, setShowArrowReminder] = useState(true);
  const [remindeContent, setReminderContent] = useState("Use las flechas para navegar entre los horarios");

  const handleKeyDown = (event: any) => {
    if (event.key === 'ArrowLeft') {
      prevSchedule();
    }
    if (event.key === 'ArrowRight') {
      nextSchedule();
    }
    setShowArrowReminder(false);
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

  return (
    <div {...handlers}>
      <Menu type={menu.type} text={menu.text} onClick={handleDownloadImage} />
      <ProgressBar progress={progress_bar.progress} />
      <ArrowNav block={arrow_nav.block} leftUrl={arrow_nav.leftUrl} rightUrl={arrow_nav.rightUrl} text={arrow_nav.text} />
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-white" ref={tableRef}>
        <div className="w-full md:w-2/3 mx-4 p-4">
          <div className="bg-gray-500 rounded-lg flex justify-center items-center">
            <Table />
          </div>
        </div>
        <div className="w-full lg:w-1/3 mx-4 p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            { courses.map((course: any, key) => {
              return (
            <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200" key={key}>
              
              <div className={`h-4 w-4 rounded-full float-left mr-2 ${course.color}`}></div>
              <p className="font-medium text-sm">{course.name}</p>
              <p className="text-xs text-gray-500">NRC: {course.nrc}</p>
      <div className="truncate line-clamp-1">
              <p className="text-xs text-gray-500">Profesor/es: {course.teachers.join(', ')}</p>
              </div>
            </div>
              )
})}
          </div>
        </div>
      </div>
      {showArrowReminder && (
        <div className="fixed bottom-0 left-0 right-0 bg-yellow-300 p-2 text-center">
          <p className="text-xs">{remindeContent}</p>
        </div>
      )}
    </div>
  );
};

export default Page;