"use client";
import React from "react";
import { ScheduleContext } from "@/context/scheduleContext";

function Tabla() {
  const { colorRows, rows } = React.useContext(ScheduleContext);
  const colors = colorRows.map((dia) => ({ hora: "bg-white", ...dia }));

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="text-[9px] sm:text-sm md:text-sm table-fixed w-full mx-auto border-none">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2">Hora</th>
            <th className="py-2">Lunes</th>
            <th className="py-2">Martes</th>
            <th className="py-2">Miércoles</th>
            <th className="py-2">Jueves</th>
            <th className="py-2">Viernes</th>
            <th className="py-2">Sábado</th>
          </tr>
        </thead>
        <tbody className="py-3 text-center">
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="py-2 bg-gray-100">{row.hora}</td>
             
              
              {colorRows[index - 1]?.lunes == colors[index].lunes &&
              row.lunes == rows[index - 1]?.lunes ? null : colorRows[
                  index + 1
                ]?.lunes == colors[index].lunes &&
                row.lunes == rows[index + 1].lunes ? (
                colorRows[index + 2].lunes == colors[index].lunes &&
                row.lunes == rows[index + 2].lunes ? (
                  colorRows[index + 3].lunes == colors[index].lunes &&
                  row.lunes == rows[index + 3].lunes ? (
                    colorRows[index + 4].lunes == colors[index].lunes &&
                    row.lunes == rows[index + 4].lunes ? (
                      colorRows[index + 5].lunes == colors[index].lunes &&
                      row.lunes == rows[index + 5].lunes ? (
                        colorRows[index + 6].lunes == colors[index].lunes &&
                        row.lunes == rows[index + 6].lunes ? (
                          <td
                            className={`py-2 ${
                              colorRows[index]?.lunes || "bg-white"
                            }`}
                            rowSpan={7}
                          >
                            {row.lunes}
                          </td>
                        ) : (
                          <td
                            className={`py-2 ${
                              colorRows[index]?.lunes || "bg-white"
                            }`}
                            rowSpan={6}
                          >
                            {row.lunes}
                          </td>
                        )
                      ) : (
                        <td
                          className={`py-2 ${
                            colorRows[index]?.lunes || "bg-white"
                          }`}
                          rowSpan={5}
                        >
                          {row.lunes}
                        </td>
                      )
                    ) : (
                      <td
                        className={`py-2 ${
                          colorRows[index]?.lunes || "bg-white"
                        }`}
                        rowSpan={4}
                      >
                        {row.lunes}
                      </td>
                    )
                  ) : (
                    <td
                      className={`py-2 ${
                        colorRows[index]?.lunes || "bg-white"
                      }`}
                      rowSpan={3}
                    >
                      {row.lunes}
                    </td>
                  )
                ) : (
                  <td
                    className={`py-2 ${colorRows[index]?.lunes || "bg-white"}`}
                    rowSpan={2}
                  >
                    {row.lunes}
                  </td>
                )
              ) : (
                <td
                  className={`py-2 ${colorRows[index]?.lunes || "bg-white"}`}
                >
                  {row.lunes}
                </td>
              )}

{colorRows[index - 1]?.martes == colors[index].martes &&
              row.martes == rows[index - 1]?.martes ? null : colorRows[
                  index + 1
                ]?.martes == colors[index].martes &&
                row.martes == rows[index + 1].martes ? (
                colorRows[index + 2].martes == colors[index].martes &&
                row.martes == rows[index + 2].martes ? (
                  colorRows[index + 3].martes == colors[index].martes &&
                  row.martes == rows[index + 3].martes ? (
                    colorRows[index + 4].martes == colors[index].martes &&
                    row.martes == rows[index + 4].martes ? (
                      colorRows[index + 5].martes == colors[index].martes &&
                      row.martes == rows[index + 5].martes ? (
                        colorRows[index + 6].martes == colors[index].martes &&
                        row.martes == rows[index + 6].martes ? (
                          <td
                            className={`py-2 ${
                              colorRows[index]?.martes || "bg-white"
                            }`}
                            rowSpan={7}
                          >
                            {row.martes}
                          </td>
                        ) : (
                          <td
                            className={`py-2 ${
                              colorRows[index]?.martes || "bg-white"
                            }`}
                            rowSpan={6}
                          >
                            {row.martes}
                          </td>
                        )
                      ) : (
                        <td
                          className={`py-2 ${
                            colorRows[index]?.martes || "bg-white"
                          }`}
                          rowSpan={5}
                        >
                          {row.martes}
                        </td>
                      )
                    ) : (
                      <td
                        className={`py-2 ${
                          colorRows[index]?.martes || "bg-white"
                        }`}
                        rowSpan={4}
                      >
                        {row.martes}
                      </td>
                    )
                  ) : (
                    <td
                      className={`py-2 ${
                        colorRows[index]?.martes || "bg-white"
                      }`}
                      rowSpan={3}
                    >
                      {row.martes}
                    </td>
                  )
                ) : (
                  <td
                    className={`py-2 ${colorRows[index]?.martes || "bg-white"}`}
                    rowSpan={2}
                  >
                    {row.martes}
                  </td>
                )
              ) : (
                <td
                  className={`py-2 ${colorRows[index]?.martes || "bg-white"}`}
                >
                  {row.martes}
                </td>
              )}

            {colorRows[index - 1]?.miercoles == colors[index].miercoles &&
              row.miercoles == rows[index - 1]?.miercoles ? null : colorRows[
                  index + 1
                ]?.miercoles == colors[index].miercoles &&
                row.miercoles == rows[index + 1].miercoles ? (
                colorRows[index + 2].miercoles == colors[index].miercoles &&
                row.miercoles == rows[index + 2].miercoles ? (
                  colorRows[index + 3].miercoles == colors[index].miercoles &&
                  row.miercoles == rows[index + 3].miercoles ? (
                    colorRows[index + 4].miercoles == colors[index].miercoles &&
                    row.miercoles == rows[index + 4].miercoles ? (
                      colorRows[index + 5].miercoles == colors[index].miercoles &&
                      row.miercoles == rows[index + 5].miercoles ? (
                        colorRows[index + 6].miercoles == colors[index].miercoles &&
                        row.miercoles == rows[index + 6].miercoles ? (
                          <td
                            className={`py-2 ${
                              colorRows[index]?.miercoles || "bg-white"
                            }`}
                            rowSpan={7}
                          >
                            {row.miercoles}
                          </td>
                        ) : (
                          <td
                            className={`py-2 ${
                              colorRows[index]?.miercoles || "bg-white"
                            }`}
                            rowSpan={6}
                          >
                            {row.miercoles}
                          </td>
                        )
                      ) : (
                        <td
                          className={`py-2 ${
                            colorRows[index]?.miercoles || "bg-white"
                          }`}
                          rowSpan={5}
                        >
                          {row.miercoles}
                        </td>
                      )
                    ) : (
                      <td
                        className={`py-2 ${
                          colorRows[index]?.miercoles || "bg-white"
                        }`}
                        rowSpan={4}
                      >
                        {row.miercoles}
                      </td>
                    )
                  ) : (
                    <td
                      className={`py-2 ${
                        colorRows[index]?.miercoles || "bg-white"
                      }`}
                      rowSpan={3}
                    >
                      {row.miercoles}
                    </td>
                  )
                ) : (
                  <td
                    className={`py-2 ${colorRows[index]?.miercoles || "bg-white"}`}
                    rowSpan={2}
                  >
                    {row.miercoles}
                  </td>
                )
              ) : (
                <td
                  className={`py-2 ${colorRows[index]?.miercoles || "bg-white"}`}
                >
                  {row.miercoles}
                </td>
              )}
              {colorRows[index - 1]?.jueves == colors[index].jueves &&
              row.jueves == rows[index - 1]?.jueves ? null : colorRows[
                  index + 1
                ]?.jueves == colors[index].jueves &&
                row.jueves == rows[index + 1].jueves ? (
                colorRows[index + 2].jueves == colors[index].jueves &&
                row.jueves == rows[index + 2].jueves ? (
                  colorRows[index + 3].jueves == colors[index].jueves &&
                  row.jueves == rows[index + 3].jueves ? (
                    colorRows[index + 4].jueves == colors[index].jueves &&
                    row.jueves == rows[index + 4].jueves ? (
                      colorRows[index + 5].jueves == colors[index].jueves &&
                      row.jueves == rows[index + 5].jueves ? (
                        colorRows[index + 6].jueves == colors[index].jueves &&
                        row.jueves == rows[index + 6].jueves ? (
                          <td
                            className={`py-2 ${
                              colorRows[index]?.jueves || "bg-white"
                            }`}
                            rowSpan={7}
                          >
                            {row.jueves}
                          </td>
                        ) : (
                          <td
                            className={`py-2 ${
                              colorRows[index]?.jueves || "bg-white"
                            }`}
                            rowSpan={6}
                          >
                            {row.jueves}
                          </td>
                        )
                      ) : (
                        <td
                          className={`py-2 ${
                            colorRows[index]?.jueves || "bg-white"
                          }`}
                          rowSpan={5}
                        >
                          {row.jueves}
                        </td>
                      )
                    ) : (
                      <td
                        className={`py-2 ${
                          colorRows[index]?.jueves || "bg-white"
                        }`}
                        rowSpan={4}
                      >
                        {row.jueves}
                      </td>
                    )
                  ) : (
                    <td
                      className={`py-2 ${
                        colorRows[index]?.jueves || "bg-white"
                      }`}
                      rowSpan={3}
                    >
                      {row.jueves}
                    </td>
                  )
                ) : (
                  <td
                    className={`py-2 ${colorRows[index]?.jueves || "bg-white"}`}
                    rowSpan={2}
                  >
                    {row.jueves}
                  </td>
                )
              ) : (
                <td
                  className={`py-2 ${colorRows[index]?.jueves || "bg-white"}`}
                >
                  {row.jueves}
                </td>
              )}
              {colorRows[index - 1]?.viernes == colors[index].viernes &&
              row.viernes == rows[index - 1]?.viernes ? null : colorRows[
                  index + 1
                ]?.viernes == colors[index].viernes &&
                row.viernes == rows[index + 1].viernes ? (
                colorRows[index + 2].viernes == colors[index].viernes &&
                row.viernes == rows[index + 2].viernes ? (
                  colorRows[index + 3].viernes == colors[index].viernes &&
                  row.viernes == rows[index + 3].viernes ? (
                    colorRows[index + 4].viernes == colors[index].viernes &&
                    row.viernes == rows[index + 4].viernes ? (
                      colorRows[index + 5].viernes == colors[index].viernes &&
                      row.viernes == rows[index + 5].viernes ? (
                        colorRows[index + 6].viernes == colors[index].viernes &&
                        row.viernes == rows[index + 6].viernes ? (
                          <td
                            className={`py-2 ${
                              colorRows[index]?.viernes || "bg-white"
                            }`}
                            rowSpan={7}
                          >
                            {row.viernes}
                          </td>
                        ) : (
                          <td
                            className={`py-2 ${
                              colorRows[index]?.viernes || "bg-white"
                            }`}
                            rowSpan={6}
                          >
                            {row.viernes}
                          </td>
                        )
                      ) : (
                        <td
                          className={`py-2 ${
                            colorRows[index]?.viernes || "bg-white"
                          }`}
                          rowSpan={5}
                        >
                          {row.viernes}
                        </td>
                      )
                    ) : (
                      <td
                        className={`py-2 ${
                          colorRows[index]?.viernes || "bg-white"
                        }`}
                        rowSpan={4}
                      >
                        {row.viernes}
                      </td>
                    )
                  ) : (
                    <td
                      className={`py-2 ${
                        colorRows[index]?.viernes || "bg-white"
                      }`}
                      rowSpan={3}
                    >
                      {row.viernes}
                    </td>
                  )
                ) : (
                  <td
                    className={`py-2 ${colorRows[index]?.viernes || "bg-white"}`}
                    rowSpan={2}
                  >
                    {row.viernes}
                  </td>
                )
              ) : (
                <td
                  className={`py-2 ${colorRows[index]?.viernes || "bg-white"}`}
                >
                  {row.viernes}
                </td>
              )}
              {colorRows[index - 1]?.sabado == colors[index].sabado &&
              row.sabado == rows[index - 1]?.sabado ? null : colorRows[
                  index + 1
                ]?.sabado == colors[index].sabado &&
                row.sabado == rows[index + 1].sabado ? (
                colorRows[index + 2].sabado == colors[index].sabado &&
                row.sabado == rows[index + 2].sabado ? (
                  colorRows[index + 3].sabado == colors[index].sabado &&
                  row.sabado == rows[index + 3].sabado ? (
                    colorRows[index + 4].sabado == colors[index].sabado &&
                    row.sabado == rows[index + 4].sabado ? (
                      colorRows[index + 5].sabado == colors[index].sabado &&
                      row.sabado == rows[index + 5].sabado ? (
                        colorRows[index + 6].sabado == colors[index].sabado &&
                        row.sabado == rows[index + 6].sabado ? (
                          <td
                            className={`py-2 ${
                              colorRows[index]?.sabado || "bg-white"
                            }`}
                            rowSpan={7}
                          >
                            {row.sabado}
                          </td>
                        ) : (
                          <td
                            className={`py-2 ${
                              colorRows[index]?.sabado || "bg-white"
                            }`}
                            rowSpan={6}
                          >
                            {row.sabado}
                          </td>
                        )
                      ) : (
                        <td
                          className={`py-2 ${
                            colorRows[index]?.sabado || "bg-white"
                          }`}
                          rowSpan={5}
                        >
                          {row.sabado}
                        </td>
                      )
                    ) : (
                      <td
                        className={`py-2 ${
                          colorRows[index]?.sabado || "bg-white"
                        }`}
                        rowSpan={4}
                      >
                        {row.sabado}
                      </td>
                    )
                  ) : (
                    <td
                      className={`py-2 ${
                        colorRows[index]?.sabado || "bg-white"
                      }`}
                      rowSpan={3}
                    >
                      {row.sabado}
                    </td>
                  )
                ) : (
                  <td
                    className={`py-2 ${colorRows[index]?.sabado || "bg-white"}`}
                    rowSpan={2}
                  >
                    {row.sabado}
                  </td>
                )
              ) : (
                <td
                  className={`py-2 ${colorRows[index]?.sabado || "bg-white"}`}
                >
                  {row.sabado}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
