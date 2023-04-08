"use client"
import { createContext, useContext, useState, useEffect } from "react";
import { useSubjectContext } from "@/context/subjectContext";
import { pagina_restricciones } from '@/assets/data.json';

interface teacherProps {
  id: string;
  name: string;
  category: string;
}

interface TeacherContextValue {
  teachers: teacherProps[];
  selectedTeachers: teacherProps[];
  toggleTeacherSelection: (teacher: teacherProps) => void;
  filterTeachers: (text: string) => void;
  categories: string[];
  filteredTeachers: teacherProps[];
  toggleSubjectSelectionBadge: (subject: string) => void;
  selectedCategory: string;
}

const TeacherContext = createContext<TeacherContextValue>({
    teachers: [],
    selectedTeachers: [],
    toggleTeacherSelection: () => {},
    filterTeachers: () => {},
    categories: [],
    filteredTeachers: [],
    toggleSubjectSelectionBadge: () => {},
    selectedCategory: '',
});

export const useTeacherContext = () => useContext(TeacherContext);

interface TeacherContextProps {
    children: React.ReactNode;
}

const TeacherProvider = ({ children }: TeacherContextProps) => {
    const { selectedSubjects } = useSubjectContext();
    const [selectedTeachers, setSelectedTeachers] = useState<teacherProps[]>([]);
    const [teachers, setTeachers] = useState<teacherProps[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [filteredTeachers, setFilteredTeachers] = useState<teacherProps[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const toggleTeacherSelection = (teacher: teacherProps) => {
        setSelectedTeachers((prevSelectedTeachers) => {
            const index = prevSelectedTeachers.findIndex((selectedTeacher) => selectedTeacher.id === teacher.id);
            if (index === -1) {
                return [...prevSelectedTeachers, teacher];
            } else {
                const newSelectedTeachers = [...prevSelectedTeachers];
                newSelectedTeachers.splice(index, 1);
                return newSelectedTeachers;
            }
        });
    };

    const toggleSubjectSelectionBadge = (subject: string) => {
        setSelectedCategory(subject);
        setFilteredTeachers(teachers.filter((teacher) => teacher.category === subject));
    };

    const filterTeachers = (Category: string) => {
        setFilteredTeachers(teachers.filter((teacher) => teacher.category === Category));
    };

    useEffect(() => {
        let Subjects = selectedSubjects.map((subject) => subject.name);
        setSelectedTeachers([]);
        setTeachers(pagina_restricciones.primera_seccion.profesor_list);
        setCategories(Subjects);
        setSelectedCategory(Subjects[0]);
        setFilteredTeachers(pagina_restricciones.primera_seccion.profesor_list.filter((teacher) => teacher.category === Subjects[0]));
    }, [selectedSubjects]);

    const value = {
        teachers,
        selectedTeachers,
        toggleTeacherSelection,
        filterTeachers,
        categories,
        filteredTeachers,
        selectedCategory,
        toggleSubjectSelectionBadge,
    };

    return <TeacherContext.Provider value={value}>{children}</TeacherContext.Provider>;
};

export {TeacherContext, TeacherProvider};
