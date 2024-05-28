"use client";

import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, { useState } from "react";
import ModalCustom from "../../modals/ModalCustom/ModalCustom";

interface UserData {
  realizado: string;
  dataHora: string;
  type: string;
  datoAtual: string;
  datoPassado: string;
}

const TableHistorico = ({ data }: { data: UserData[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const [isModalOpenRemoveAdmin, setIsModalOpenRemoveAdmin] = useState(false);
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

  const handleOpenModalRemoveAdmin = () => {
    setIsModalOpenRemoveAdmin(true);
  };

  const handleCloseModalRemoveAdmin = () => {
    setIsModalOpenRemoveAdmin(false);
  };

  return (
    <>
      <ModalCustom
        isOpen={isModalOpenRemoveAdmin}
        onClose={handleCloseModalRemoveAdmin}
        label="Excluir administrador?"
        className="lg:w-[568px] lg:h-[190px]"
        variation={"variation1"}
      />

      <ModalCustom
        isOpen={isModalOpenEditAdmin}
        onClose={handleCloseModalEditAdmin}
        label="Histórico de alterações"
        className="lg:w-[1153px] lg:h-[547px]"
        variation={"variation2"}
      />
      <div className="overflow-x-auto rounded-[35px] min-w-[1153px]">
        {data.length === 0 ? (
          <>
            <div className="border-t-2 mt-5 mb-5 border-[#61646B]/15"></div>

            <div className="px-10 text-[#AEB1C7] font-norma text-base">
              Não há histórico de alterações.
            </div>
          </>
        ) : (
          <>
            <table className="min-w-full divide-y-2 divide-gray-200 mt-6">
              <thead className="bg-white">
                <tr className="">
                  <th className="px-10 py-1 text-left text-base font-semibold text-[#272727]">
                    Realizado por:
                  </th>
                  <th className="px-10 py-1 text-left text-base font-semibold text-[#272727]">
                    Data e hora:
                  </th>
                  <th className="px-10 py-1 text-left text-base font-semibold text-[#272727]">
                    Tipo de alteração:
                  </th>
                  <th className="px-10 py-1 text-left text-base font-semibold text-[#272727]">
                    Dado atual:
                  </th>
                  <th className="px-10 py-1 text-left text-base font-semibold text-[#272727]">
                    Dado passado:
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y-2 divide-gray-200">
                {currentRows.map((user, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#F6F7FD]"}
                  >
                    <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.realizado}
                    </td>
                    <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.dataHora}
                    </td>
                    <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.type}
                    </td>
                    <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.datoAtual}
                    </td>
                    <td className="px-10 py-4 whitespace-nowrap text-sm text-[#272727]/30">
                      {user.datoPassado}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center justify-end gap-10 px-10 py-8 border-t-2 border-gray-200">
              <div className="flex items-center">
                <span className="text-sm text-gray-700">
                  Linhas por página:
                </span>
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
          </>
        )}
      </div>
    </>
  );
};

export default TableHistorico;
