"use client";
import Menu from "@/components/molecules/menu";
import ProgressBar from "@/components/atoms/progress_bar";
import ArrowNav from "@/components/molecules/arrow_nav";
import * as htmlToImage from 'html-to-image';

import { pagina_horarios as data } from '@/assets/data.json';

const Page = () => {
  let { menu, arrow_nav, progress_bar } = data;

  
function downloadImage() {
  const element = document.getElementById('my-div');
  if (!element) {
    return;
  }

  htmlToImage.toPng(element)
    .then(function (dataUrl) {
      const link = document.createElement('a');
      link.download = 'my-image-name.png';
      link.href = dataUrl;
      link.click();
    });
}

  return (
    <>
      <Menu type={menu.type} text={menu.text} onClick={downloadImage} />
      <ProgressBar progress={progress_bar.progress} />
      <ArrowNav block={arrow_nav.block} leftUrl={arrow_nav.leftUrl} rightUrl={arrow_nav.rightUrl} text={arrow_nav.text} />
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between" id="my-div">
        <div className="w-full md:w-2/3 mx-4 p-2" >
          <div className="h-[500px] bg-yellow-500 rounded-lg flex justify-center items-center" >
            <p className="transform rotate-2 animate-spin infinite text-lg md:text-2xl lg:text-4xl font-bold">Ponte las pilas</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 mx-4 p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200">
              <div className="h-4 w-4 rounded-full bg-red-500 float-left mr-2"></div>
              <p className="font-medium text-sm">Nombre de la materia</p>
              <p className="text-xs text-gray-500">NRC: 12345</p>
              <p className="text-xs text-gray-500">Profesor: Juan Pérez</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

