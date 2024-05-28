"use client";

import { kronaOne } from "@/fonts/fonts";
import { Form, Formik } from "formik";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  Clock,
  Edit,
  Eye,
  Trash2,
} from "lucide-react";
import React, { useState } from "react";
import InputField from "../../inputs/InputField/InputField";
import ModalCustom from "../../modals/ModalCustom/ModalCustom";
import TableHistorico from "../TableHistorico/TableHistorico";
import * as Yup from "yup";
import TextAreaField from "../../inputs/TextAreaField/TextAreaField";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Obrigatório!"),
  text: Yup.string().required("Obrigatório!"),
});

interface UserData {
  title: string;
  status: string;
}

const TableFAQ = ({ data }: { data: UserData[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const [isModalOpenRemoveAdmin, setIsModalOpenRemoveAdmin] = useState(false);
  const [isModalOpenHistorico, setIsModalOpenHistorico] = useState(false);
  const [isModalOpenEditAdmin, setIsModalOpenEditAdmin] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

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
        label="Excluir FAQ?"
        className="lg:w-[568px] lg:h-[190px]"
        variation={"variation1"}
      />

      <ModalCustom
        isOpen={isModalOpenEditAdmin}
        onClose={handleCloseModalEditAdmin}
        // label="Cadastrar administrador"
        label="Editar FAQ"
        className="lg:w-[788px] lg:h-[478px]"
        variation={"variation3"}
      >
        <div className="flex flex-col">
          <Formik
            initialValues={{
              title: "",
              text: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // Handle form submission here
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Formik
                initialValues={{
                  title: "",
                  text: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  // Handle form submission here
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="flex w-full flex-col">
                    <div>
                      <div className="flex items-center justify-between gap-5 mt-2">
                        <div className="w-[60%]">
                          <InputField label="Título" name="title" type="text" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-normal text-base">Status</span>
                          <div className="flex gap-2">
                            <button
                              onClick={handleToggle}
                              className={`w-[132px] h-[40px] rounded-full border ${
                                isActive
                                  ? "border-legna-500 text-white border-2 bg-legna-500"
                                  : "border-gray-300 text-gray-500"
                              }`}
                            >
                              Ativo
                            </button>
                            <button
                              onClick={handleToggle}
                              className={`w-[132px] h-[40px] rounded-full border ${
                                !isActive
                                  ? "border-legna-500 text-white border-2 bg-legna-500"
                                  : "border-gray-300 text-gray-500"
                              }`}
                            >
                              Inativo
                            </button>
                          </div>
                        </div>
                      </div>
                      <TextAreaField label="Texto" name="text" rows={8} />
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
            )}
          </Formik>
        </div>
      </ModalCustom>

      <ModalCustom
        isOpen={isModalOpenHistorico}
        onClose={handleCloseModalHistorico}
        label="Visualizar FAQ"
        className="lg:w-[788px] lg:h-[752px]"
        variation={"variation2"}
      >
        <div className="flex flex-col px-10 mt-5">
          <Formik
            initialValues={{
              title: "Lorem ipsum dolor sit amet",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum velit laoreet id donec. Adipiscing vitae proin sagittis nisl rhoncus. Nunc non blandit massa enim nec. Congue eu consequat ac felis donec et odio pellentesque. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Velit laoreet id donec ultrices tincidunt arcu non. Nulla malesuada pellentesque elit eget gravida cum. Feugiat nisl pretium fusce id. Id consectetur purus ut faucibus pulvinar elementum integer enim. Enim facilisis gravida neque convallis a cras semper auctor. Quis commodo odio aenean sed adipiscing diam. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Est ultricies integer quis auctor.",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // Handle form submission here
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex w-full flex-col">
                <div>
                  <div className="flex items-center justify-between gap-5 mt-2">
                    <div className="w-[60%]">
                      <InputField label="Título" name="title" type="text" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-normal text-base">Status</span>
                      <div className="flex gap-2">
                        <button
                          onClick={handleToggle}
                          className={`w-[132px] h-[40px] rounded-full border ${
                            isActive
                              ? "border-legna-500 text-white border-2 bg-legna-500"
                              : "border-gray-300 text-gray-500"
                          }`}
                        >
                          Ativo
                        </button>
                        <button
                          onClick={handleToggle}
                          className={`w-[132px] h-[40px] rounded-full border ${
                            !isActive
                              ? "border-legna-500 text-white border-2 bg-legna-500"
                              : "border-gray-300 text-gray-500"
                          }`}
                        >
                          Inativo
                        </button>
                      </div>
                    </div>
                  </div>
                  <TextAreaField label="Texto" name="text" rows={18} />
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
              <th className="px-6 py-8 text-left text-base font-semibold text-[#272727]">
                Título
              </th>

              <th className="px-10 py-8 text-left text-base font-semibold text-[#272727]">
                Status
              </th>

              <th className="px-10 py-8 text-left text-base font-semibold text-[#272727]">
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
                  {user.title}
                </td>

                <td className="px-10 py-8 whitespace-nowrap text-sm text-gray-900">
                  <span
                    className={`px-7 py-1.5 rounded-[40px] ${
                      user.status === "Ativo"
                        ? "bg-[#C2F581] text-[#272727]"
                        : "bg-[#AEB1C7] text-white"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-10 py-4 whitespace-nowrap text-sm font-medium">
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
                    <button
                      onClick={handleOpenModalHistorico}
                      className="text-white bg-indigo-600 px-2 py-1 rounded-[25px] ml-8 font-normal text-sm flex items-center"
                    >
                      <Eye className="mr-2" size={16} />
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

export default TableFAQ;
