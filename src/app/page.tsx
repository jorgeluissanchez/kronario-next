"use client";
import React, { useEffect } from 'react';
import Menu from '@/components/molecules/menu';
import ProgressBar from '@/components/atoms/progress_bar';
import BadgeList from '@/components/molecules/badge_list';
import ItemList from '@/components/organisms/item_list';
import ArrowNav from '@/components/molecules/arrow_nav';
import { useMajorContext } from '@/context/majorContext';
import data from '@/assets/data';
import useLocalStorage from '@/hooks/useLocalStorage';
import SplashScreen from '@/components/molecules/splash_screen';

const pagina_carreras = data.pagina_carreras;

const Page = () => {
  let { menu, arrow_nav, progress_bar, badge_list } = pagina_carreras;
  const { selectedMajors, toggleMajorSelection, categories, filterMajors, filteredMajors, selectedCategory, toggleMajorSelectionBadges } = useMajorContext();
  const selectedMajor = (major: any) => {
    return selectedMajors.includes(major);
  };

  const selectedMajorBadges = (major: any) => {
    return selectedCategory === major;
  };
  
  const [storedValue, setValue ] = useLocalStorage('visited', 'false');

  const handleStart = () => {
    setValue('true');
  };

  const block = () => {
    if (selectedMajors.length === 0) {
      return 'both';
    } else {
      return arrow_nav.block;
    }
  };

  if (storedValue === 'false') {
    return <SplashScreen onClick={handleStart} />;
  }
    
  return (
    <div className="flex flex-col h-screen ">
      <Menu type={menu.type} text={menu.text} inputChange={filterMajors} />
      <ProgressBar progress={progress_bar.progress} />
      <ArrowNav block={block()} rightUrl={arrow_nav.rightUrl} text={arrow_nav.text} />
      <BadgeList color={badge_list.color} badges={categories} selectedBadges={selectedMajorBadges} onClick={toggleMajorSelectionBadges} />
      <div className="flex-1 overflow-y-auto">
        <ItemList items={filteredMajors} selectedItems={selectedMajor} onClick={toggleMajorSelection} />
      </div>
    </div>
  );
}

export default Page;

