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

import { useTeacherContext } from "@/context/teacherContext";

const Page = () => {
  let { menu, arrow_nav, progress_bar, primera_seccion} = pagina_restricciones;
  let { filteredTeachers, categories, selectedTeachers, toggleTeacherSelection, selectedCategory, toggleSubjectSelectionBadge } = useTeacherContext();
  
  const selectedTeacher = (teacher: any) => {
    return selectedTeachers.includes(teacher);
  }

  const selectedTeacherBadges = (teacher: string | string[]) => {
    return teacher === selectedCategory;
  }

  return (
    <>
      <Menu type={menu.type} text={menu.text} /> 
      <ProgressBar progress={progress_bar.progress} />
      <ArrowNav block={arrow_nav.block} leftUrl={arrow_nav.leftUrl} rightUrl={arrow_nav.rightUrl} text={arrow_nav.text} />
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
      </div>
      <div className="mt-2 mb-4 mx-2 md:mx-auto lg:w-[900px] md:w-[700px] flex justify-center items-center rounded-lg shadow-lg overflow-hidden">

      <Table />      </div>
    </>
  );
};

export default Page;
