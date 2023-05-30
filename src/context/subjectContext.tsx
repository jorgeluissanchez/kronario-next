"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useMajorContext } from "@/context/majorContext";
import data from '@/assets/data';
const pagina_asignaturas = data.pagina_asignaturas;

interface SubjectProps {
  id: string;
  name: string;
  category: string[];
}

interface SubjectContextValue {
  subjects: SubjectProps[];
  selectedSubjects: SubjectProps[];
  toggleSubjectSelection: (subject: SubjectProps) => void;
  filterSubjects: (text: string) => void;
  categories: string[];
  filteredSubjects: SubjectProps[];
  toggleSubjectSelectionBadges: (category: string) => void;
  selectedCategory: string;
}

const SubjectContext = createContext<SubjectContextValue>({
  subjects: [],
  selectedSubjects: [],
  toggleSubjectSelection: () => {},
  filterSubjects: () => {},
  categories: [],
  filteredSubjects: [],
  toggleSubjectSelectionBadges: () => {},
  selectedCategory: '',
});

export const useSubjectContext = () => useContext(SubjectContext);

interface SubjectProviderProps {
  children: React.ReactNode;
}

const SubjectProvider = ({ children }: SubjectProviderProps) => {
  const { selectedMajors } = useMajorContext();
  const [selectedSubjects, setSelectedSubjects] = useState<SubjectProps[]>([]);
  const [subjects, setSubjects] = useState<SubjectProps[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredSubjects, setFilteredSubjects] = useState<SubjectProps[]>([]);

  const toggleSubjectSelection = (subject: SubjectProps) => {
    setSelectedSubjects((prevSelectedSubjects) => {
      const index = prevSelectedSubjects.findIndex((selectedSubject) => selectedSubject.id === subject.id);
      if (index === -1) {
        return [...prevSelectedSubjects, subject];
      } else {
        const newSelectedSubjects = [...prevSelectedSubjects];
        newSelectedSubjects.splice(index, 1);
        return newSelectedSubjects;
      }
    });
  };

  const toggleCategorySelection = (category: string) => {
    setSelectedCategory(category);
    setFilteredSubjects(subjects.filter((subject) => subject.category.includes(category)));
  };

  const filterSubjects = (text: string) => {
    let filtered = subjects.filter((subject) => subject.category.includes(selectedCategory)); 

    if (text === "") {
      setFilteredSubjects(filtered);
    } else {
      setFilteredSubjects(
        filtered.filter((subject) =>
          subject.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  useEffect(() => { 
    let Majors = selectedMajors.map((major) => major.name);
    fetch("http://127.0.0.1:8000/majors/classcodes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedMajors)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la petición");
        }
        return response.json();
      })
      .then((data) => {
        setSubjects(data)
        setFilteredSubjects(data.filter((subject: any) => subject.category.includes(Majors[0])));
      })
      .catch((error) => console.error(error));
    setSelectedSubjects([]);
    setCategories(Majors);
    setSelectedCategory(Majors[0]);
  }, [selectedMajors]);

  const value = {
    subjects,
    selectedSubjects,
    toggleSubjectSelection,
    filterSubjects,
    categories,
    filteredSubjects,
    toggleSubjectSelectionBadges: toggleCategorySelection,
    selectedCategory,
  };

  return <SubjectContext.Provider value={value}>{children}</SubjectContext.Provider>;
};

export { SubjectContext, SubjectProvider };
