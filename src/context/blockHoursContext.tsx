import { useState } from "react";

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
  "19:30"
];

const rows = hours.map((hora) => {
  return {
    hora: hora,
    lunes: false,
    martes: false,
    miercoles: false,
    jueves: false,
    viernes: false,
    sabado: false
  };
});

type ColumnOrder = "lunes" | "martes" | "miercoles" | "jueves" | "viernes" | "sabado";

const Table = () => {
  const [tableData, setTableData] = useState(rows);

  const columnOrder: ColumnOrder[] = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

  const handleSaveData = () => {
    console.log(lastTrueIndices);
  };

  const [lastTrueIndices, setLastTrueIndices] = useState<any[]>([]);

  const handleToggleCell = (rowIndex: number, colIndex: ColumnOrder) => {
    const updatedRows = [...tableData];
    updatedRows[rowIndex][colIndex] = !updatedRows[rowIndex][colIndex];
    setTableData(updatedRows);
    handleGetIndices();
  };

  const handleToggleColumn = (colIndex: ColumnOrder) => {
    const updatedRows = tableData.map((row) => {
      return { ...row, [colIndex]: !row[colIndex] };
    });
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
            lunes: "M",
            martes: "T",
            miercoles: "W",
            jueves: "R",
            viernes: "F",
            sabado: "S"
          };
          const index: any = { hora: row.hora, columna: columnMap[col] };
          trueIndices.push(index);
        }
      }
    }
    setLastTrueIndices(trueIndices);
  };

  const handleToggleAll = () => {
    const allSelected = tableData.every((row) => {
      return columnOrder.every((col) => {
        return row[col];
      });
    });

    const updatedRows = tableData.map((row) => {
      const updatedRow: any = {};
      columnOrder.forEach((col) => {
        updatedRow[col] = !allSelected;
      });
      return { ...row, ...updatedRow };
    });

    setTableData(updatedRows);
    handleGetIndices();
  };

  return (
    <div className="m-2 mx-auto max-w-7xl">
      <table className="text-[9px] sm:text-sm md:text-sm table-fixed w-full border-none">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="w-1/12 text-left py-2 px-2">
                <button onClick={handleToggleAll} className="text-gray-500 hover:text-gray-700">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V3zm2 0v14h10V3H6z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </th>
            {columnOrder.map((col, index) => {
                return (
                    <th key={index} className="w-1/12 text-left py-2 px-2">
                    <button onClick={() => handleToggleColumn(col)} className="text-gray-500 hover:text-gray-700">
                        {col}
                    </button>
                    </th>
                );
                }
            )}
            </tr>
        </thead>
        <tbody>
            {tableData.map((row, rowIndex) => {
                return (
                    <tr key={rowIndex} className="border-b border-gray-200">
                        <td className="w-1/12 text-left py-2 px-2">{row.hora}</td>
                        {columnOrder.map((col, colIndex) => {
                            return (
                                <td key={colIndex} className="w-1/12 text-left py-2 px-2">
                                    <button onClick={() => handleToggleCell(rowIndex, col)} className="text-gray-500 hover:text-gray-700">
                                        {row[col] ? (
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 3a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V3zm2 0v14h10V3H6z" clipRule="evenodd"></path>
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 3a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V3zm2 0v14h10V3H6z" clipRule="evenodd"></path>
                                            </svg>
                                        )}
                                    </button>
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
        </table>
        <div className="mt-4">
            <button onClick={handleSaveData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Guardar
            </button>
        </div>
    </div>
    );
};

export default Table;

