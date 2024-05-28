"use client";

import ModalCustom from "@/app/components/modals/ModalCustom/ModalCustom";
import { kronaOne } from "@/fonts/fonts";
import { Form, Formik } from "formik";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  Clock,
  Edit,
  Trash2,
} from "lucide-react";
import React, { useState } from "react";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  nameFull: Yup.string().required("Obrigatório!"),
  email: Yup.string().required("Obrigatório!"),
  telefone: Yup.string().required("Obrigatório!"),
  hospital: Yup.string().required("Obrigatório!"),
});

interface UserData {
  gestor: string;
}

const DetailTableGestor = ({ data }: { data: UserData[] }) => {
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
        isOpen={isModalOpenRemoveAdmin}
        onClose={handleCloseModalRemoveAdmin}
        label="Excluir gestor?"
        className="lg:w-[568px] lg:h-[190px]"
        variation={"variation1"}
      />

      <div className="overflow-x-auto rounded-[35px]">
        <table className="min-w-full divide-y-2 divide-gray-200">
          <thead className="bg-white">
            <tr className="w-full">
              <th className="px-10 py-8 text-left text-base font-semibold text-[#272727]">
                Gestores
              </th>

              <th className="px-0 py-8 text-left text-base font-semibold text-[#272727]">
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
                <td className="px-10 py-8 whitespace-nowrap text-sm text-gray-900">
                  {user.gestor}
                </td>
                <td className="px-0 py-8 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center">
                    <button
                      onClick={handleOpenModalRemoveAdmin}
                      className="text-[#AEB1C7] hover:text-indigo-900 flex items-center ml-2"
                    >
                      <Trash2 size={20} />
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

export default DetailTableGestor;
