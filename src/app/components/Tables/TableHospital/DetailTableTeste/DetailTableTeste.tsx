"use client";

import ModalCustom from "@/app/components/modals/ModalCustom/ModalCustom";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, { useState } from "react";

interface UserData {
  medicamento: string;
  dosagem: string;
  horario: string;
}

const DetailTableTeste = ({ data }: { data: UserData[] }) => {
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
      <div className="overflow-x-auto rounded-[35px] min-w-[700px]">
        {data.length === 0 ? (
          <>
            <div className="border-t-2 mt-5 mb-5 border-[#61646B]/15"></div>

            <div className="px-10 text-[#AEB1C7] font-norma text-base">
              Não há histórico de alterações.
            </div>
          </>
        ) : (
          <>
            <table className="min-w-full divide-y-2 divide-gray-200 mt-6 mb-6">
              <thead className="bg-white">
                <tr className="">
                  <th className="px-10 py-1 text-left text-base font-semibold text-[#272727]">
                    Medicamento:
                  </th>
                  <th className="py-4 text-left text-base font-semibold text-[#272727]">
                    {/* Dosagem: */}
                  </th>
                  <th className="py-4 text-left text-base font-semibold text-[#272727]">
                    {/* Horário: */}
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
                      {user.medicamento}
                    </td>
                    <td className="py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.dosagem}
                    </td>
                    <td className="py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.horario}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div className="flex items-center justify-end gap-10 px-10 py-8 border-t-2 border-gray-200">
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
            </div> */}
          </>
        )}
      </div>
    </>
  );
};

export default DetailTableTeste;
