"use client";
import { createContext, useState } from "react";

const hours = ["6:30", "7:30", "8:30", "9:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30", "19:30"];

const rows = hours.map((hora) => {
  return { hora: hora, lunes: false, martes: false, miercoles: false, jueves: false, viernes: false, sabado: false };
});

type ColumnOrder = "lunes" | "martes" | "miercoles" | "jueves" | "viernes" | "sabado";

interface BlockHourContextType {
  tableData: any[];
  lastTrueIndices: any[];
  handleTableData: (tableData: any[]) => void;
  handleSaveData: () => void;
  handleGetIndices: () => void;
  handleClick: (rowIndex: number, colIndex: ColumnOrder) => void;
}

export const BlockHourContext = createContext<BlockHourContextType>({
  tableData: [],
  lastTrueIndices: [],
  handleTableData: () => {},
  handleSaveData: () => {},
  handleGetIndices: () => {},
  handleClick: () => {},
});

export const BlockHourProvider = ({ children }: { children: React.ReactNode }) => {
  const [tableData, setTableData] = useState(rows);
  const [lastTrueIndices, setLastTrueIndices] = useState<any[]>([]);

  const columnOrder: ColumnOrder[] = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

  const handleTableData = (data: any[]) => {
    setTableData(data);
  };

  const handleSaveData = () => {
    console.log(lastTrueIndices);
  };

  const handleClick = (rowIndex: number, colIndex: ColumnOrder) => {
    const updatedRows = [...tableData];
    updatedRows[rowIndex][colIndex] = !updatedRows[rowIndex][colIndex];
    setTableData(updatedRows);
    handleGetIndices();
  };

  const handleGetIndices = () => {
    const trueIndices: any = [];

    for (let i = 0; i < tableData.length; i++) {
      const row = tableData[i];
      for (let j = 0; j < columnOrder.length; j++) {
        const col = columnOrder[j];
        if (row[col]) {
          const columnMap: { [key: string]: string } = {
            "lunes": "M",
            "martes": "T",
            "miercoles": "W",
            "jueves": "R",
            "viernes": "F",
            "sabado": "S"
          };
          const index: any = { hora: row.hora, columna: columnMap[col] };
          trueIndices.push(index);
        }
      }
    }
    setLastTrueIndices(trueIndices);
  };

  return (
    <BlockHourContext.Provider
      value={{
        tableData,
        lastTrueIndices,
        handleTableData,
        handleSaveData,
        handleGetIndices,
        handleClick
      }}
    >
      {children}
    </BlockHourContext.Provider>
  );
};