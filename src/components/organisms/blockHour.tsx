"use client";
import { useState } from "react";

const hours = ["6:30", "7:30", "8:30", "9:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30", "19:30"];

const rows = hours.map((hora) => {
  return { hora: hora, lunes: false, martes: false, miercoles: false, jueves: false, viernes: false, sabado: false };
});

type ColumnOrder = "lunes" | "martes" | "miercoles" | "jueves" | "viernes" | "sabado";

const Table = () => {
  const [tableData, setTableData] = useState(rows);

  const columnOrder: ColumnOrder[] = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

  const handleSaveData = () => {
    console.log(lastTrueIndices)
  }

  const [lastTrueIndices, setLastTrueIndices] = useState<any[]>([]);


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
      <table className="text-[9px] sm:text-sm md:text-sm w-full border-none h-full">
        <thead>
          <tr className="bg-yellow-400 text-white">
            <th className="py-3">Hora</th>
            {columnOrder.map((col: ColumnOrder) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody className="py-3">
          {tableData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <th className="py-3">{row.hora}</th>
              {columnOrder.map((col: ColumnOrder) => (
                <td
                  key={col}
                  className={row[col] ? "bg-yellow-200" : ""}
                  onClick={() => handleClick(rowIndex, col)}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Table;