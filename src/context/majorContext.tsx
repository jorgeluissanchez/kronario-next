"use client";
import { createContext, useContext, useState, useEffect } from "react";
import data from "@/assets/data";
const pagina_carreras = data.pagina_carreras;

interface MajorProps {
  id: string;
  name: string;
  category: string;
}

interface MajorContextValue {
  majors: MajorProps[];
  selectedMajors: MajorProps[];
  toggleMajorSelection: (major: MajorProps) => void;
  categories: string[];
  filterMajors: (text: string) => void;
  filteredMajors: MajorProps[];
  toggleMajorSelectionBadges: (category: string) => void;
  selectedCategory: string;
}

const MajorContext = createContext<MajorContextValue>({
  majors: [],
  selectedMajors: [],
  toggleMajorSelection: () => {},
  categories: [],
  filteredMajors: [],
  filterMajors: () => {},
  toggleMajorSelectionBadges: () => {},
  selectedCategory: "",
});

export const useMajorContext = () => useContext(MajorContext);

interface MajorProviderProps {
  children: React.ReactNode;
}

const MajorProvider = ({ children }: MajorProviderProps) => {
  const [selectedMajors, setSelectedMajors] = useState<MajorProps[]>([]);
  const [majors, setMajors] = useState<MajorProps[]>([]);
  const [filteredMajors, setFilteredMajors] = useState<MajorProps[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filterMajors = (text: string) => {
    let filtered = majors.filter((major) => major.category === selectedCategory);
    if(text === ''){
      setFilteredMajors(filtered);
    }else{
      setFilteredMajors(
        filtered.filter((major) =>
          major.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  const toggleMajorSelection = (major: MajorProps) => {
    setSelectedMajors((prevSelectedMajors) => {
      const index = prevSelectedMajors.findIndex((selectedMajor) => selectedMajor.id === major.id);
      if (index === -1) {
        return [...prevSelectedMajors, major];
      } else {
        const newSelectedMajors = [...prevSelectedMajors];
        newSelectedMajors.splice(index, 1);
        return newSelectedMajors;
      }
    });
  };

  const toggleMajorSelectionBadges = (category: string) => {
    setSelectedCategory(category);
    setFilteredMajors(majors.filter((major) => major.category === category));
  };


  useEffect(() => {
    
    fetch("http://127.0.0.1:8000/majors")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        return response.json();
      })
      .then((data) => {
        setMajors(data);
        setFilteredMajors(data.filter((major: any) => major.category == "Pregrado"));
      })
      .catch((error) => console.error(error));
    setCategories(["Pregrado"]);
    setSelectedCategory("Pregrado");
  }, []);

  const value = {
    majors,
    selectedMajors,
    toggleMajorSelection,
    categories,
    filteredMajors,
    filterMajors,
    toggleMajorSelectionBadges,
    selectedCategory,
  };

  return <MajorContext.Provider value={value}>{children}</MajorContext.Provider>;
};

export { MajorContext, MajorProvider };