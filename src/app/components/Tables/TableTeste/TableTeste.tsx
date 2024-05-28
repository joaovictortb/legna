"use client";

import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";
import React, { useState } from "react";
import ModalCustom from "../../modals/ModalCustom/ModalCustom";
import * as Yup from "yup";
import DetailTableTeste from "../TableHospital/DetailTableTeste/DetailTableTeste";

const validationSchema = Yup.object().shape({
  nameFull: Yup.string().required("Obrigatório!"),
  email: Yup.string().required("Obrigatório!"),
  telefone: Yup.string().required("Obrigatório!"),
  hospital: Yup.string().required("Obrigatório!"),
});

interface UserData {
  data: string;
  ventilacao: string;
  escala: string;
  rass: string;
  cam: string;
  profissional: string;
  turno: string;
}

const TableTeste = ({ data }: { data: UserData[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const [isModalOpenRemoveAdmin, setIsModalOpenRemoveAdmin] = useState(false);
  const [isModalOpenHistorico, setIsModalOpenHistorico] = useState(false);
  const [isModalOpenEditAdmin, setIsModalOpenEditAdmin] = useState(false);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleOpenModalEditAdmin = () => {
    setIsModalOpenEditAdmin(true);
  };

  const handleCloseModalEditAdmin = () => {
    setIsModalOpenEditAdmin(false);
  };

  const handleOpenModalHistorico = () => {
    setIsModalOpenHistorico(true);
  };

  const handleCloseModalHistorico = () => {
    setIsModalOpenHistorico(false);
  };

  const handleOpenModalRemoveAdmin = () => {
    setIsModalOpenRemoveAdmin(true);
  };

  const handleCloseModalRemoveAdmin = () => {
    setIsModalOpenRemoveAdmin(false);
  };

  return (
    <>
      <ModalCustom
        isOpen={isModalOpenHistorico}
        onClose={handleCloseModalHistorico}
        label="Detalhes do teste"
        className="lg:w-auto lg:h-full"
        variation={"variation2"}
      >
        <DetailTableTeste
          data={[
            {
              medicamento: "Lorem ipsum dolor",
              dosagem: "1g - 6/6 horas",
              horario: "Última dose: 21/02/2023 - 12:00",
            },
            {
              medicamento: "Lorem ipsum dolor",
              dosagem: "1g - 6/6 horas",
              horario: "Última dose: 21/02/2023 - 12:00",
            },
            {
              medicamento: "Lorem ipsum dolor",
              dosagem: "1g - 6/6 horas",
              horario: "Última dose: 21/02/2023 - 12:00",
            },
            {
              medicamento: "Lorem ipsum dolor",
              dosagem: "1g - 6/6 horas",
              horario: "Última dose: 21/02/2023 - 12:00",
            },
            {
              medicamento: "Lorem ipsum dolor",
              dosagem: "1g - 6/6 horas",
              horario: "Última dose: 21/02/2023 - 12:00",
            },
          ]}
        />
      </ModalCustom>

      <div className="overflow-x-auto rounded-[35px]">
        <table className="min-w-full divide-y-2 divide-gray-200">
          <thead className="bg-white">
            <tr className="w-full">
              <th className="px-6 py-8 text-left text-base font-semibold text-[#272727]">
                Data
              </th>
              <th className="px-4 py-8 text-left text-base font-semibold text-[#272727]">
                Ventilação mecânica
              </th>
              <th className="px-4 py-8 text-left text-base font-semibold text-[#272727]">
                Escala da Dor
              </th>
              <th className="px-4 py-8 text-left text-base font-semibold text-[#272727]">
                RASS
              </th>
              <th className="px-4 py-8 text-left text-base font-semibold text-[#272727]">
                CAM
              </th>
              <th className="px-4 py-8 text-left text-base font-semibold text-[#272727]">
                Profissional
              </th>
              <th className="px-4 py-8 text-left text-base font-semibold text-[#272727]">
                Turno
              </th>
              <th className="px-12 py-8 text-left text-base font-semibold text-[#272727]">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y-2 divide-gray-200">
            {currentRows.map((user, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-[#F6F7FD]"}
              >
                <td className="px-6 py-8 whitespace-nowrap text-sm text-gray-900">
                  {user.data}
                </td>
                <td className="px-4 py-8 whitespace-nowrap text-sm text-gray-900">
                  {user.ventilacao}
                </td>
                <td className="px-4 py-8 whitespace-nowrap text-sm text-gray-900">
                  {user.escala}
                </td>
                <td className="px-4 py-8 whitespace-nowrap text-sm text-gray-900">
                  {user.rass}
                </td>
                <td className="px-4 py-8 whitespace-nowrap text-sm text-gray-900">
                  {user.cam}
                </td>
                <td className="px-4 py-8 whitespace-nowrap text-sm text-gray-900">
                  {user.profissional}
                </td>
                <td className="px-4 py-8 whitespace-nowrap text-sm text-gray-900">
                  {user.turno}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center">
                    <button
                      onClick={handleOpenModalHistorico}
                      className="text-white bg-indigo-600 px-2 py-1 rounded-[25px] ml-8 font-medium text-sm flex items-center"
                    >
                      <Clock className="mr-2" size={16} />
                      Ver mais
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-end gap-10 px-10 py-8 border-t-2 border-gray-200">
          <div className="flex items-center">
            <span className="text-sm text-gray-700">Linhas por página:</span>
            <select
              className="ml-2 text-sm border-gray-300 rounded cursor-pointer"
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              {[5, 10, 15, 20].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="text-sm text-gray-700">
            {`${indexOfFirstRow + 1}-${Math.min(
              indexOfLastRow,
              data.length
            )} de ${data.length}`}
          </div>
          <div className="flex items-center">
            <button
              className="text-gray-500 hover:text-gray-700 cursor-pointer transition-transform duration-300 hover:scale-[102%]"
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            >
              <ChevronFirst
                className="hover:stroke-[#ccc]"
                size={23}
                stroke={"#272727"}
                strokeWidth={2}
              />
            </button>
            <button
              className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer transition-transform duration-300 hover:scale-[102%]"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft
                className="hover:stroke-[#ccc]"
                size={23}
                stroke={"#272727"}
                strokeWidth={2}
              />
            </button>
            <button
              className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer transition-transform duration-300 hover:scale-[102%]"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight
                className="hover:stroke-[#ccc]"
                size={23}
                stroke={"#272727"}
                strokeWidth={2}
              />
            </button>
            <button
              className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer transition-transform duration-300 hover:scale-[102%]"
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              <ChevronLast
                className="hover:stroke-[#ccc]"
                size={23}
                stroke={"#272727"}
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableTeste;
