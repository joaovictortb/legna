"use client";

import InputField from "@/app/components/inputs/InputField/InputField";
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
import TableHistorico from "../../TableHistorico/TableHistorico";

const validationSchema = Yup.object().shape({
  nameUTI: Yup.string().required("Obrigatório!"),
  Nleitos: Yup.string().required("Obrigatório!"),
  hospital: Yup.string().required("Obrigatório!"),
  gestor: Yup.string().required("Obrigatório!"),
});

interface UserData {
  name: string;
}

const DetailTableUTIs = ({ data }: { data: UserData[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);
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
        label="Excluir UTI?"
        className="lg:w-[568px] lg:h-[190px]"
        variation={"variation1"}
      />

      <ModalCustom
        isOpen={isModalOpenEditAdmin}
        onClose={handleCloseModalEditAdmin}
        // label="Cadastrar administrador"
        label="Editar UTI"
        className="lg:w-[788px] lg:h-[330px]"
        variation={"variation3"}
      >
        <div className="flex flex-col">
          <Formik
            initialValues={{
              nameUTI: "",
              Nleitos: "",
              hospital: "",
              gestor: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // Handle form submission here
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col flex-grow justify-center">
                <div className="flex flex-wrap mt-3 gap-3">
                  <div className="flex-1">
                    <InputField
                      label="Nome da UTI"
                      name="nameUTI"
                      type="text"
                    />
                  </div>
                  <div className="flex-1">
                    <InputField
                      label="Númeor de leitos"
                      name="Nleitos"
                      type="email"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap mt-3 gap-3">
                  <div className="flex-1">
                    <InputField
                      label="Hospital vinculado"
                      name="hospital"
                      type="text"
                    />
                  </div>
                  <div className="flex-1">
                    <InputField
                      label="Gestor responsável"
                      name="gestor"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 flex justify-end space-x-4">
                  <button
                    onClick={handleCloseModalEditAdmin}
                    className="px-4 py-2 w-[132px] h-[45px] text-legna-500 border-2 border-legna-500 hover:bg-legna-50 rounded-full text-sm font-medium bg-white cursor-pointer transition-transform duration-300 hover:scale-[102%]"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 w-[177px] h-[45px] text-white bg-legna-500 hover:bg-legna-600 rounded-full text-sm font-medium cursor-pointer transition-transform duration-300 hover:scale-[102%]"
                  >
                    Salvar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </ModalCustom>

      <div className="overflow-x-auto rounded-[35px]">
        <table className="min-w-full divide-y-2 divide-gray-200">
          <thead className="bg-white">
            <tr className="w-full">
              <th className="px-10 py-8 text-left text-base font-semibold text-[#272727]">
                UTIs
              </th>
              <th className="px-3 py-8 text-left text-base font-semibold text-[#272727]">
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
                  {user.name}
                </td>

                <td className="px-3 py-8 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center">
                    <button
                      onClick={handleOpenModalEditAdmin}
                      className="text-[#AEB1C7] hover:text-indigo-900 flex items-center"
                    >
                      <Edit size={20} />
                    </button>
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

export default DetailTableUTIs;
