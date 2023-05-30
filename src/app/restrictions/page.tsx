"use client";

import Menu from "@/components/molecules/menu";
import ProgressBar from "@/components/atoms/progress_bar";
import ArrowNav from "@/components/molecules/arrow_nav";
import ItemList from "@/components/organisms/item_list";
import Typography from "@/components/atoms/typography";
import QuestionList from "@/components/organisms/question_list";
import BadgeList from "@/components/molecules/badge_list";
import Table from "@/components/organisms/blockHour";

import data from '@/assets/data';
const pagina_restricciones = data.pagina_restricciones;
import { useEffect } from "react";

import { redirect } from 'next/navigation';

import { useTeacherContext } from "@/context/teacherContext";
import { useScheduleContext } from "@/context/scheduleContext";

const Page = () => {
  let { menu, arrow_nav, progress_bar, primera_seccion} = pagina_restricciones;
  let { filteredTeachers, categories, selectedTeachers, toggleTeacherSelection, selectedCategory, toggleSubjectSelectionBadge } = useTeacherContext();
  const  { loading } = useScheduleContext();
  const selectedTeacher = (teacher: any) => {
    return selectedTeachers.includes(teacher);
  }

  useEffect(() => {
    if (categories.length === 0) {
      redirect(arrow_nav.leftUrl);
    }
  }, [categories]);

  const selectedTeacherBadges = (teacher: string | string[]) => {
    return teacher === selectedCategory;
  }
  if(loading){
    return (
      <div className="flex flex-col h-screen bg-gray-100 justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )    
  }
  return (
    <div className="flex flex-col h-screen ">
      <Menu type={menu.type} text={menu.text} /> 
      <ProgressBar progress={progress_bar.progress} />
      <ArrowNav block={arrow_nav.block} leftUrl={arrow_nav.leftUrl} rightUrl={arrow_nav.rightUrl} text={arrow_nav.text} />
    <div className="flex-1 overflow-y-auto">
      <div className="px-4 py-2 text-center">
        <Typography type="text" color="blue">{primera_seccion.title}</Typography>
      </div>
      <BadgeList color={primera_seccion.subjects_badge.color} badges={categories} selectedBadges={selectedTeacherBadges} onClick={toggleSubjectSelectionBadge} />
      <ItemList type={2} items={filteredTeachers} selectedItems={selectedTeacher} onClick={toggleTeacherSelection} />
      <div className="px-4 py-2 text-center">
        <Typography type="text" color="blue">Preguntas de filtracion:</Typography>
      </div>
      <QuestionList />
      <div className="px-4 py-2 text-center">
        <Typography type="text" color="blue">Bloquea tus Horas</Typography>
      </div><div className="w-full p-4 flex justify-center items-center">
          <div className="rounded-lg flex justify-center items-center overflow-hidden shadow-lg w-full md:w-2/3 lg:w-2/3">
            <Table />
          </div>
        </div>
    </div>
    </div>
  );
};

export default Page;
