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

const validationSchema = Yup.object().shape({
  cnpj: Yup.string().required("Obrigatório!"),
  nameHospital: Yup.string().required("Obrigatório!"),
  nameFantasia: Yup.string().required("Obrigatório!"),
  cep: Yup.string().required("Obrigatório!"),
  estado: Yup.string().required("Obrigatório!"),
  cidade: Yup.string().required("Obrigatório!"),
  number: Yup.string().required("Obrigatório!"),
  complemento: Yup.string().required("Obrigatório!"),
  cargo: Yup.string().required("Obrigatório!"),
  telefone: Yup.string().required("Obrigatório!"),
  endereco: Yup.string().required("Obrigatório!"),
  nameResponsavel: Yup.string().required("Obrigatório!"),
  email: Yup.string().required("Obrigatório!"),
});

interface UserData {
  hospital: string;
  id: string;
  status: string;
  onClick?: () => void;
}

const TableHospital = ({
  data,
  onClick,
}: {
  data: UserData[];
  onClick?: (hospital: UserData) => void;
}) => {
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
        label="Excluir Hospital?"
        className="lg:w-[568px] lg:h-[190px]"
        variation={"variation1"}
      />

      <ModalCustom
        isOpen={isModalOpenEditAdmin}
        onClose={handleCloseModalEditAdmin}
        // label="Cadastrar administrador"
        label="Editar Hospital"
        className="lg:w-[1000px] lg:h-[701px]"
        variation={"variation3"}
      >
        <div className="flex flex-col">
          <Formik
            initialValues={{
              cnpj: "",
              nameHospital: "",
              nameFantasia: "",
              cep: "",
              estado: "",
              cidade: "",
              number: "",
              complemento: "",
              cargo: "",
              telefone: "",
              endereco: "",
              nameResponsavel: "",
              email: "",
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
                    <InputField label="CNPJ" name="cnpj" type="text" />
                  </div>
                  <div className="flex-1">
                    <InputField
                      label="Nome completo do hospital"
                      name="nameHospital"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-col mt-3 gap-3">
                  <div className="flex-1">
                    <InputField
                      label="Nome fantasia"
                      name="nameFantasia"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex mt-3 gap-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap mt-3 gap-3">
                      <div className="flex-1">
                        <InputField label="CEP" name="cep" type="text" />
                      </div>
                      <div className="flex-1">
                        <InputField label="Estado" name="estado" type="text" />
                      </div>
                    </div>

                    <div className="flex flex-col mt-3 gap-3">
                      <div className="flex-1">
                        <InputField
                          label="Endereço"
                          name="endereco"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col mt-3 gap-3">
                      <div className="flex-1">
                        <InputField
                          label="Nome completo do responsável"
                          name="nameResponsavel"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col mt-3 gap-3">
                      <div className="flex-1">
                        <InputField
                          label="E-mail de contato"
                          name="email"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col mt-3 gap-3">
                      <div className="flex-1">
                        <InputField label="Cidade" name="cidade" type="text" />
                      </div>
                    </div>

                    <div className="flex flex-wrap mt-3 gap-3">
                      <div className="flex-1">
                        <InputField label="Número" name="number" type="text" />
                      </div>
                      <div className="flex-1">
                        <InputField
                          label="Complemento"
                          name="complemento"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col mt-3 gap-3">
                      <div className="flex-1">
                        <InputField label="Cargo" name="cargo" type="text" />
                      </div>
                    </div>

                    <div className="flex flex-col mt-3 gap-3">
                      <div className="flex-1">
                        <InputField
                          label="Telefone de contato"
                          name="telefone"
                          type="text"
                        />
                      </div>
                    </div>
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

      <ModalCustom
        isOpen={isModalOpenHistorico}
        onClose={handleCloseModalHistorico}
        label="Histórico de alterações"
        className="lg:w-auto lg:h-[547px]"
        variation={"variation2"}
      >
        <TableHistorico
          data={[
            {
              realizado: "Camila Miller",
              dataHora: "21/02/2023 - 12:00",
              type: "Nome",
              datoAtual: "Camila Miller",
              datoPassado: "Camila Miller",
            },
            {
              realizado: "Camila Miller",
              dataHora: "21/02/2023 - 12:00",
              type: "E-mail",
              datoAtual: "camila.healtcenter@mail.com",
              datoPassado: "camila.healtcenter@mail.com",
            },
            {
              realizado: "Camila Miller",
              dataHora: "21/02/2023 - 12:00",
              type: "Nome",
              datoAtual: "Camila Miller",
              datoPassado: "Camila Miller",
            },
            {
              realizado: "Camila Miller",
              dataHora: "21/02/2023 - 12:00",
              type: "E-mail",
              datoAtual: "camila.healtcenter@mail.com",
              datoPassado: "camila.healtcenter@mail.com",
            },
            {
              realizado: "Camila Miller",
              dataHora: "21/02/2023 - 12:00",
              type: "Nome",
              datoAtual: "Camila Miller",
              datoPassado: "Camila Miller",
            },
            {
              realizado: "Camila Miller",
              dataHora: "21/02/2023 - 12:00",
              type: "E-mail",
              datoAtual: "camila.healtcenter@mail.com",
              datoPassado: "camila.healtcenter@mail.com",
            },
            {
              realizado: "Camila Miller",
              dataHora: "21/02/2023 - 12:00",
              type: "Nome",
              datoAtual: "Camila Miller",
              datoPassado: "Camila Miller",
            },
            {
              realizado: "Camila Miller",
              dataHora: "21/02/2023 - 12:00",
              type: "E-mail",
              datoAtual: "camila.healtcenter@mail.com",
              datoPassado: "camila.healtcenter@mail.com",
            },
            {
              realizado: "Camila Miller",
              dataHora: "21/02/2023 - 12:00",
              type: "Nome",
              datoAtual: "Camila Miller",
              datoPassado: "Camila Miller",
            },
            {
              realizado: "Camila Miller",
              dataHora: "21/02/2023 - 12:00",
              type: "E-mail",
              datoAtual: "camila.healtcenter@mail.com",
              datoPassado: "camila.healtcenter@mail.com",
            },
            {
              realizado: "Camila Miller",
              dataHora: "21/02/2023 - 12:00",
              type: "Nome",
              datoAtual: "Camila Miller",
              datoPassado: "Camila Miller",
            },
            {
              realizado: "Camila Miller",
              dataHora: "21/02/2023 - 12:00",
              type: "E-mail",
              datoAtual: "camila.healtcenter@mail.com",
              datoPassado: "camila.healtcenter@mail.com",
            },
          ]}
        />
      </ModalCustom>

      <div className="overflow-x-auto rounded-[35px]">
        <table className="min-w-full divide-y-2 divide-gray-200">
          <thead className="bg-white">
            <tr className="w-full">
              <th className="px-10 py-8 text-left text-base font-semibold text-[#272727]">
                Hospital
              </th>
              <th className="px-10 py-8 text-left text-base font-semibold text-[#272727]">
                ID
              </th>
              <th className="px-10 py-8 text-left text-base font-semibold text-[#272727]">
                Status
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
                  {user.hospital}
                </td>
                <td className="px-10 py-8 whitespace-nowrap text-sm text-gray-900">
                  {user.id}
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

                <td className="px-0 py-4 whitespace-nowrap text-sm font-medium">
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
                      onClick={() => onClick && onClick(user)}
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

export default TableHospital;
