"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useTeacherContext } from "@/context/teacherContext";
import { useQuestionContext } from "@/context/questionContext";
import data from '@/assets/data';

const pagina_horarios = data.pagina_horarios;

interface Curso {
    name: string;
    NRC: string;
    teachers: string[];
    blocks: string[][];
    quotas: string;
    
}

interface ScheduleContextValue {
    nextSchedule: () => void;
    prevSchedule: () => void;
    rows: any[];
    colorRows: any[];
    contador: number;
    courses: any[];
    horarios: any[];
}

const ScheduleContext = createContext<ScheduleContextValue>({
    nextSchedule: () => {},
    prevSchedule: () => {},
    rows: [],
    colorRows: [],
    contador: 0,
    courses: [],
    horarios: [],
});

export const useScheduleContext = () => useContext(ScheduleContext);

interface ScheduleProviderProps {
    children: React.ReactNode;
}

const ScheduleProvider = ({ children }: ScheduleProviderProps) => {
    const [horarios, setHorarios] = useState<Curso[][]>([]);
    const [contador, setContador] = useState(0);
    const [courses, setCourses] = useState<Curso[]>([]);
    const { questionsAndAnswersSelected } = useQuestionContext();
    const { selectedTeachers } = useTeacherContext();

    useEffect(() => {
        setHorarios(pagina_horarios.horarios);
    }, [questionsAndAnswersSelected, selectedTeachers]);

    useEffect(() => {
        Update();
    }, [horarios]);

    const hours = [
        "6:30",
        "7:30",
        "8:30",
        "9:30",
        "10:30",
        "11:30",
        "12:30",
        "13:30",
        "14:30",
        "15:30",
        "16:30",
        "17:30",
        "18:30",
        "19:30",
    ];

    const defaultRows = hours.map((hora) => {
        return { hora: hora, lunes: "", martes: "", miercoles: "", jueves: "", viernes: "", sabado: "" };
    });

    const [rows, setRows] = useState(defaultRows);

    const defauldColorRows = hours.map((hora) => {
        return { lunes: "", martes: "", miercoles: "", jueves: "", viernes: "", sabado: "" };
    });

    const [colorRows, setColorRows] = useState(defauldColorRows);

    const Select = (value: number) => {
        let classes = [
            "bg-red-200",
            "bg-blue-200",
            "bg-green-200",
            "bg-yellow-200",
            "bg-purple-200",
            "bg-pink-200",
            "bg-indigo-200",
            "bg-orange-200",
        ];
        return classes[value+1];
  }

  const Verify = (horaString: string) => {
    const horaMap: { [key: string]: number } = {
        "06": 0,
        "07": 1,
        "08": 2,
        "09": 3,
        "10": 4,
        "11": 5,
        "12": 6,
        "13": 7,
        "14": 8,
        "15": 9,
        "16": 10,
        "17": 11,
        "18": 12,
        "19": 13
    };
    return horaMap[horaString] ?? 0;
  }

  const Blanck = () => {
    let newRows = [...rows];
    newRows.forEach(row => {
        row.lunes = '';
        row.martes = '';
        row.miercoles = '';
        row.jueves = '';
        row.viernes = '';
        row.sabado = '';
    });  
    setRows(newRows);
    let newColorRows = [...colorRows];
    for (let i = 0; i < newColorRows.length; i++) {
        let row = newColorRows[i];
        if (i % 2 === 0) {
            row.lunes = "bg-gray-100";
            row.martes = "bg-gray-100";
            row.miercoles = "bg-gray-100";
            row.jueves = "bg-gray-100";
            row.viernes = "bg-gray-100";
            row.sabado = "bg-gray-100";
        } else {
            row.lunes = "";
            row.martes = "";
            row.miercoles = "";
            row.jueves = "";
            row.viernes = "";
            row.sabado = "";
        }
    }
    setColorRows(newColorRows);
  };

  const Create = ( dia: string, salon: string, hora: number, nameColor: string, duration: number) => {
    let newRows = [...rows];
    let newColorRows = [...colorRows];
    let salonArray: any = salon.split("-");
    switch (salonArray.length) {
        case 1:
            salon = salonArray[0].trim();
            break;
        case 2:
            salon = salonArray[1].trim();
            break;
        case 3:
            salon = salonArray[1].trim() + " - " + salonArray[2].trim();
            break;
        default:
            break;
    } 
    switch (dia) {
        case "M":
            newRows[hora].lunes = salon;
            newColorRows[hora].lunes = nameColor
            if (duration > 100) {
                newRows[hora + 1].lunes = salon;
                newColorRows[hora + 1].lunes = nameColor;
                if (duration > 200) {
                    newRows[hora + 2].lunes = salon;
                    newColorRows[hora + 2].lunes = nameColor;
                }
            }
            break;
        case "T":
            newRows[hora].martes = salon;
            newColorRows[hora].martes = nameColor;
            if (duration > 100) {
                newRows[hora + 1].martes = salon;
                newColorRows[hora + 1].martes = nameColor;
                if (duration > 200) {
                    newRows[hora + 2].martes = salon;
                    newColorRows[hora + 2].martes = nameColor;
                }
            }
            break;
        case "W":
            newRows[hora].miercoles = salon;
            newColorRows[hora].miercoles = nameColor;
            if (duration > 100) {
                newRows[hora + 1].miercoles = salon;
                newColorRows[hora + 1].miercoles = nameColor;
                if (duration > 200) {
                    newRows[hora + 2].miercoles = salon;
                    newColorRows[hora + 2].miercoles = nameColor;
                }
            }
            break;
        case "R":
            newRows[hora].jueves = salon;
            newColorRows[hora].jueves = nameColor;
            if (duration > 100) {
                newRows[hora + 1].jueves = salon;
                newColorRows[hora + 1].jueves = nameColor;
                if (duration > 200) {
                    newRows[hora + 2].jueves = salon;
                    newColorRows[hora + 2].jueves = nameColor;
                }
            }
            break;
        case "F":
            newRows[hora].viernes = salon;
            newColorRows[hora].viernes = nameColor;
            if (duration > 100) {
                newRows[hora + 1].viernes = salon;
                newColorRows[hora + 1].viernes = nameColor;
                if (duration > 200) {
                    newRows[hora + 2].viernes = salon;
                    newColorRows[hora + 2].viernes = nameColor;
                }
            }
            break;
        case "S":
            newRows[hora].sabado = salon;
            newColorRows[hora].sabado = nameColor;
            if (duration > 100) {
                newRows[hora + 1].sabado = salon;
                newColorRows[hora + 1].sabado = nameColor;
                if (duration > 200) {
                    newRows[hora + 2].sabado = salon;
                    newColorRows[hora + 2].sabado = nameColor;
                }
            }
            break;
    }
    setRows(newRows);
    setColorRows(newColorRows);
  }

  const Obtain = () => {
    
  if (!horarios[contador]) return;
    let colorNum: number = 1;
    let courseList: any = [];
    horarios[contador].forEach((horario: any) => {
        const blocks = horario.blocks;
        const nameColor = Select(colorNum);
        blocks.forEach((bloque: any[]) => {
            const day = bloque[0];
            const horario = bloque[1];
            const hora = Verify(horario.substring(0, 2));
            const salones = bloque[2];
            const duration = (parseInt(horario.split(' - ')[1], 10) - parseInt(horario.split(' - ')[0], 10));
            Create(day, salones, hora, nameColor, duration);
        });
        courseList.push({
            name: horario.name,
            color: nameColor,
            nrc: horario.NRC,
            teachers: [...horario.teachers]
        });
        colorNum++;
    });
    setCourses(courseList);
    }   
    

  const Update = () => {
    Blanck();
    Obtain();
  }

  const nextSchedule = () => {
    if (contador < horarios.length - 1) {
        setContador(contador + 1);
    } else {
        setContador(0);
    }
    Update();
    }

    const prevSchedule = () => {
    if (contador > 0) {
        setContador(contador - 1);
    } else {
        setContador(horarios.length - 1);
    }
    Update();
    }

  const value = {
    rows,
    colorRows,
    nextSchedule,
    prevSchedule,
    contador,
    courses,
    horarios,
    };



  return (
    <ScheduleContext.Provider
      value={value}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

export { ScheduleProvider, ScheduleContext };
