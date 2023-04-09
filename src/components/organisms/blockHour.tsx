import React, { useContext } from "react";
import { BlockHourContext } from "@/context/blockHoursContext";

const Table: React.FC = () => {
  const { tableData, lastTrueIndices, handleSaveData, handleClick } = useContext(BlockHourContext);
  const [isMouseDown, setIsMouseDown] = React.useState(false);

  const handleMouseDown = (e?: any) => {
    if (e.key === "Shift") {
      setIsMouseDown(true);
    }
    if(!e.key){
    setIsMouseDown(true);
    }
  };

  const handleMouseUp = (e?: any) => {
    if(e.key === "Shift"){
      setIsMouseDown(false);
    }
    if(!e.key){
      setIsMouseDown(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("keydown", handleMouseDown);
    window.addEventListener("keyup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.addEventListener("keydown", (e) => handleMouseDown(e));
      window.addEventListener("keyup", (e) => handleMouseUp(e));
    };
  }, []);


  const handleCellClick = (rowIndex: number, colIndex: string) => {
    handleClick(rowIndex, colIndex as any);
  };

  return (
    
    <table className="text-xs sm:text-sm md:text-sm w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-3 text-center font-medium text-gray-600 ">Hora</th>
          <th className="py-3 text-center font-medium text-gray-600 ">Lunes</th>
          <th className="py-3 text-center font-medium text-gray-600 ">Martes</th>
          <th className="py-3 text-center font-medium text-gray-600 ">Miércoles</th>
          <th className="py-3 text-center font-medium text-gray-600 ">Jueves</th>
          <th className="py-3 text-center font-medium text-gray-600 ">Viernes</th>
          <th className="py-3 text-center font-medium text-gray-600 ">Sábado</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td className="text-center bg-gray-100 py-2">{row.hora}</td>
            <td
              onMouseOver={() => {
                if (isMouseDown) handleCellClick(rowIndex, "lunes");
              }}
              onClick={() => handleCellClick(rowIndex, "lunes")}
              className={`${
                row.lunes
                  ? "bg-yellow-200 md:hover:bg-yellow-300"
                  : (rowIndex % 2 === 0 ? "bg-white md:hover:bg-gray-50" : "bg-gray-100 md:hover:bg-gray-200")
              } text-center cursor-pointer`}
            ></td>
            <td
              onMouseOver={() => {
                if (isMouseDown) handleCellClick(rowIndex, "martes");
              }}
              onClick={() => handleCellClick(rowIndex, "martes")}
              className={`${
                row.martes
                  ? "bg-yellow-200 md:hover:bg-yellow-300"
                  :  (rowIndex % 2 === 0 ? "bg-white md:hover:bg-gray-50" : "bg-gray-100 md:hover:bg-gray-200")
              } text-center cursor-pointer`}
            ></td>
            <td
              onMouseOver={() => {
                if (isMouseDown) handleCellClick(rowIndex, "miercoles");
              }}
              onClick={() => handleCellClick(rowIndex, "miercoles")}
              className={`${
                row.miercoles
                  ? "bg-yellow-200 md:hover:bg-yellow-300"
                  :  (rowIndex % 2 === 0 ? "bg-white md:hover:bg-gray-50" : "bg-gray-100 md:hover:bg-gray-200")
              } text-center cursor-pointer`}
            ></td>
            <td
              onMouseOver={() => {
                if (isMouseDown) handleCellClick(rowIndex, "jueves");
              }}
              onClick={() => handleCellClick(rowIndex, "jueves")}
              className={`${
                row.jueves
                  ? "bg-yellow-200 md:hover:bg-yellow-300"
                  : (rowIndex % 2 === 0 ? "bg-white md:hover:bg-gray-50" : "bg-gray-100 md:hover:bg-gray-200")
              } text-center cursor-pointer`}
            ></td>
            <td
              onMouseOver={() => {
                if (isMouseDown) handleCellClick(rowIndex, "viernes");
              }}
              onClick={() => handleCellClick(rowIndex, "viernes")}
              className={`${
                row.viernes
                  ? "bg-yellow-200 md:hover:bg-yellow-300"
                  :  (rowIndex % 2 === 0 ? "bg-white md:hover:bg-gray-50" : "bg-gray-100 md:hover:bg-gray-200")
              } text-center cursor-pointer`}
            ></td>
            <td
              onMouseOver={() => {
                if (isMouseDown) handleCellClick(rowIndex, "sabado");
              }}
              onClick={() => handleCellClick(rowIndex, "sabado")}
              className={`${
                row.sabado
                  ? "bg-yellow-200 md:hover:bg-yellow-300"
                  :  (rowIndex % 2 === 0 ? "bg-white md:hover:bg-gray-50" : "bg-gray-100 md:hover:bg-gray-200")
              } text-center cursor-pointer`}
            ></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
