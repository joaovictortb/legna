"use client";

import InputField from "@/app/components/inputs/InputField/InputField";
import { Form, Formik } from "formik";
import { ArrowLeft, ChevronDown, Download, PenLine } from "lucide-react";
import { useState } from "react";
import Layout from "./layout";
import * as Yup from "yup";
import TextAreaField from "@/app/components/inputs/TextAreaField/TextAreaField";
import ModalCustom from "@/app/components/modals/ModalCustom/ModalCustom";
import BoxHeader from "@/app/components/Header/BoxHeader/BoxHeader";
import TableHospital from "@/app/components/Tables/TableHospital/TableHospital";
import BoxHeaderHospital from "@/app/components/Header/BoxHeaderHospital/BoxHeaderHospital";
import DetailTableGestor from "@/app/components/Tables/TableHospital/DetailTableGestor/DetailTableGestor";
import DetailTableColaboradores from "@/app/components/Tables/TableHospital/DetailTableColaboradores/DetailTableColaboradores";
import DetailTableUTIs from "@/app/components/Tables/TableHospital/DetailTableUTIs/DetailTableUTIs";
import DetailTableLeitos from "@/app/components/Tables/TableHospital/DetailTableLeitos/DetailTableLeitos";
import BoxHeaderHospitalVariation from "@/app/components/Header/BoxHeaderHospitalVariation/BoxHeaderHospitalVariation";

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

const data = [
  {
    hospital: "Hospital Mãe de Deus",
    id: "42661",
    status: "Ativo",
  },
  {
    hospital: "Hospital São Lucas",
    id: "42662",
    status: "Inativo",
  },
  {
    hospital: "Hospital Moinhos de Vento",
    id: "42663",
    status: "Ativo",
  },
  {
    hospital: "Hospital Conceição",
    id: "42664",
    status: "Inativo",
  },
  {
    hospital: "Hospital Mãe de Deus",
    id: "42661",
    status: "Ativo",
  },
  {
    hospital: "Hospital São Lucas",
    id: "42662",
    status: "Inativo",
  },
  {
    hospital: "Hospital Moinhos de Vento",
    id: "42663",
    status: "Ativo",
  },
  {
    hospital: "Hospital Conceição",
    id: "42664",
    status: "Inativo",
  },
  {
    hospital: "Hospital Mãe de Deus",
    id: "42661",
    status: "Ativo",
  },
  {
    hospital: "Hospital São Lucas",
    id: "42662",
    status: "Inativo",
  },
  {
    hospital: "Hospital Moinhos de Vento",
    id: "42663",
    status: "Ativo",
  },
  {
    hospital: "Hospital Conceição",
    id: "42664",
    status: "Inativo",
  },
];

const HospitaisPage = () => {
  const [editMode, setEditMode] = useState(false);
  const [mostrarMais, setMostrarMais] = useState(false);
  const [isModalOpenCreateAdmin, setIsModalOpenCreateAdmin] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<any>(null);
  const [newScreenMode, setNewScreenMode] = useState(false);

  const handleOpenModalCreateAdmin = () => {
    setIsModalOpenCreateAdmin(true);
  };

  const handleCloseModalCreateAdmin = () => {
    setIsModalOpenCreateAdmin(false);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setSelectedHospital(null);
  };

  const handleViewMoreClick = (hospital: any) => {
    setSelectedHospital(hospital);
    setEditMode(true);
  };

  const handleNewScreenClick = () => {
    setNewScreenMode(true);
  };

  return (
    <Layout>
      {newScreenMode ? (
        <div>
          <button
            onClick={() => setNewScreenMode(false)}
            type="button"
            className="mb-5 bg-transparent w-auto px-5 gap-3 justify-center items-center h-[45px] flex rounded-full border-2 border-legna-500 group-hover:border-transparent group-hover:bg-legna-500"
          >
            <ArrowLeft
              className="text-legna-500 group-hover:text-white"
              size={16}
            />
            <span className="text-legna-500 bg-transparent group-hover:text-white">
              Voltar
            </span>
          </button>
          <div className="min-h-screen">
            <BoxHeaderHospitalVariation
              title="Testes CAM-ICU"
              searchPlaceholder="Buscar por nome"
              openModal={handleNewScreenClick}
              handleBack={handleCancelClick}
              // onClick={handleEditClick}
            />
          </div>
        </div>
      ) : !editMode ? (
        <div>
          <>
            <ModalCustom
              isOpen={isModalOpenCreateAdmin}
              onClose={handleCloseModalCreateAdmin}
              // label="Cadastrar administrador"
              label="Cadastrar hospital"
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
                              <InputField
                                label="Estado"
                                name="estado"
                                type="text"
                              />
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
                              <InputField
                                label="Cidade"
                                name="cidade"
                                type="text"
                              />
                            </div>
                          </div>

                          <div className="flex flex-wrap mt-3 gap-3">
                            <div className="flex-1">
                              <InputField
                                label="Número"
                                name="number"
                                type="text"
                              />
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
                              <InputField
                                label="Cargo"
                                name="cargo"
                                type="text"
                              />
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
                          onClick={handleCloseModalCreateAdmin}
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

            <BoxHeader
              title="Hospitais"
              searchPlaceholder="Buscar por nome"
              openModal={handleOpenModalCreateAdmin}
              // onClick={handleEditClick}
            />

            <div className="mt-10 bg-white shadow-md rounded-[35px] h-auto">
              <TableHospital data={data} onClick={handleViewMoreClick} />
            </div>
          </>

          {/* Aqui vai o resto do conteúdo da página */}
        </div>
      ) : (
        <>
          {/* onClick={handleCancelClick} */}
          <button
            onClick={handleCancelClick}
            type="button"
            className="mb-5 bg-transparent w-auto px-5 gap-3 justify-center items-center h-[45px] flex rounded-full border-2 border-legna-500 group-hover:border-transparent group-hover:bg-legna-500"
          >
            <ArrowLeft
              className="text-legna-500 group-hover:text-white"
              size={16}
            />
            <span className="text-legna-500 bg-transparent group-hover:text-white">
              Voltar
            </span>
          </button>
          <div className="flex justify-between w-full">
            <BoxHeaderHospital
              title={selectedHospital.hospital}
              searchPlaceholder="Buscar por nome"
              openModal={handleNewScreenClick}
              handleBack={handleCancelClick}
              // onClick={handleEditClick}
            />
          </div>

          <div className="min-h-screen mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Gestores */}
              <div className="bg-white shadow-md rounded-[40px]">
                <DetailTableGestor
                  data={[
                    {
                      gestor: "Ana Silva Souza",
                    },
                    {
                      gestor: "João Pereira Lima",
                    },
                    {
                      gestor: "Carlos Santos Oliveira",
                    },
                    {
                      gestor: "Maria Oliveira Fernandes",
                    },
                    {
                      gestor: "Fernanda Costa Ribeiro",
                    },
                    {
                      gestor: "Pedro Lima Machado",
                    },
                    {
                      gestor: "Roberta Nunes Almeida",
                    },
                    {
                      gestor: "Tiago Almeida Santos",
                    },
                    {
                      gestor: "Larissa Carvalho Silva",
                    },
                    {
                      gestor: "Marcelo Ramos Pinto",
                    },
                  ]}
                />
              </div>

              {/* Colaboradores */}
              <div className="bg-white shadow-md rounded-[40px]">
                <DetailTableColaboradores
                  data={[
                    {
                      colaboradores: "Ana Silva Souza",
                      cargo: "Médico",
                    },
                    {
                      colaboradores: "Germano Augustin Souza Ferreira",
                      cargo: "Enfermeiro",
                    },
                    {
                      colaboradores: "Ana Silva Souza",
                      cargo: "Médico",
                    },
                    {
                      colaboradores: "Germano Augustin Souza Ferreira",
                      cargo: "Enfermeiro",
                    },
                    {
                      colaboradores: "Ana Silva Souza",
                      cargo: "Médico",
                    },
                  ]}
                />
              </div>

              {/* UTIs */}
              <div className="bg-white shadow-md rounded-[40px]">
                <DetailTableUTIs
                  data={[
                    {
                      name: "Ana Silva Souza",
                    },
                    {
                      name: "Germano Augustin Souza Ferreira",
                    },
                    {
                      name: "Ana Silva Souza",
                    },
                    {
                      name: "Germano Augustin Souza Ferreira",
                    },
                    {
                      name: "Ana Silva Souza",
                    },
                  ]}
                />
              </div>

              {/* Leitos */}
              <div className="bg-white shadow-md rounded-[40px]">
                <DetailTableLeitos
                  data={[
                    {
                      leitos: "Hospital Mãe de Deus 1",
                      status: "Ativo",
                    },
                    {
                      leitos: "Hospital São Lucas 2",
                      status: "Inativo",
                    },
                    {
                      leitos: "Hospital São Lucas 3",
                      status: "Inativo",
                    },
                    {
                      leitos: "Hospital Mãe de Deus 4",
                      status: "Ativo",
                    },
                    {
                      leitos: "Hospital São Lucas",
                      status: "Inativo",
                    },
                    {
                      leitos: "Hospital São Lucas 5",
                      status: "Inativo",
                    },
                    {
                      leitos: "Hospital Mãe de Deus 6",
                      status: "Ativo",
                    },
                    {
                      leitos: "Hospital São Lucas 7",
                      status: "Inativo",
                    },
                    {
                      leitos: "Hospital São Lucas 8",
                      status: "Inativo",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default HospitaisPage;
