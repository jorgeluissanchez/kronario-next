"use client";
import Menu from "@/components/molecules/menu";
import ProgressBar from "@/components/atoms/progress_bar";
import BadgeList from "@/components/molecules/badge_list";
import ItemList from "@/components/organisms/item_list";
import ArrowNav from "@/components/molecules/arrow_nav";
import { useSubjectContext } from "@/context/subjectContext";
import data from '@/assets/data';
import { useEffect } from "react";
const pagina_asignaturas = data.pagina_asignaturas;
import { redirect } from 'next/navigation';



const Page = () => {
  

  let { menu, arrow_nav, progress_bar, badge_list } = pagina_asignaturas;



  const { selectedSubjects, toggleSubjectSelection, categories, filterSubjects, filteredSubjects, selectedCategory, toggleSubjectSelectionBadges } = useSubjectContext();

  
  useEffect(() => {
    if (categories.length === 0) {
      redirect(arrow_nav.leftUrl);
    }
  }, [categories]);

  const selectedSubject = (major: any) => {
    return selectedSubjects.includes(major);
  }

  const selectedSubjectBadges = (majors: string | string[]) => {
    return majors.includes(selectedCategory);
  }


  const block = () => {
    if (selectedSubjects.length === 0) {
      return "right";
    } else {
      return arrow_nav.block;
    }
  };
  return (
    <div className="flex flex-col h-screen ">
      <Menu type={menu.type} text={menu.text} inputChange={filterSubjects} />
      <ProgressBar progress={progress_bar.progress} />
      <ArrowNav block={block()} rightUrl={arrow_nav.rightUrl} text={arrow_nav.text} />
      <BadgeList color={badge_list.color} badges={categories} selectedBadges={selectedSubjectBadges} onClick={toggleSubjectSelectionBadges} />
      <div className="flex-1 overflow-y-auto">
        <ItemList items={filteredSubjects} selectedItems={selectedSubject} onClick={toggleSubjectSelection} />
      </div>
    </div>
  );
};

export default Page;