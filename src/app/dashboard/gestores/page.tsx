"use client";

import BoxHeader from "@/app/components/Header/BoxHeader/BoxHeader";
import InputField from "@/app/components/inputs/InputField/InputField";
import ModalCustom from "@/app/components/modals/ModalCustom/ModalCustom";
import TableGestor from "@/app/components/Tables/TableGestor/TableGestor";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  nameFull: Yup.string().required("Obrigatório!"),
  email: Yup.string().required("Obrigatório!"),
  telefone: Yup.string().required("Obrigatório!"),
  hospital: Yup.string().required("Obrigatório!"),
});

const data = [
  {
    fullName: "Camila Souza Costa",
    email: "camila.healthcenter@mail.com",
    phone: "051 99374 8723",
    cpf: "567.834.562-78",
  },
  {
    fullName: "Camila Souza Costa",
    email: "camila.healthcenter@mail.com",
    phone: "051 99374 8723",
    cpf: "567.834.562-78",
  },
  {
    fullName: "Camila Souza Costa",
    email: "camila.healthcenter@mail.com",
    phone: "051 99374 8723",
    cpf: "567.834.562-78",
  },
  {
    fullName: "Camila Souza Costa",
    email: "camila.healthcenter@mail.com",
    phone: "051 99374 8723",
    cpf: "567.834.562-78",
  },
  {
    fullName: "Camila Souza Costa",
    email: "camila.healthcenter@mail.com",
    phone: "051 99374 8723",
    cpf: "567.834.562-78",
  },
];

export default function Gestores() {
  const [isModalOpenCreateAdmin, setIsModalOpenCreateAdmin] = useState(false);

  const handleOpenModalCreateAdmin = () => {
    setIsModalOpenCreateAdmin(true);
  };

  const handleCloseModalCreateAdmin = () => {
    setIsModalOpenCreateAdmin(false);
  };
  return (
    <>
      <ModalCustom
        isOpen={isModalOpenCreateAdmin}
        onClose={handleCloseModalCreateAdmin}
        // label="Cadastrar administrador"
        label="Cadastrar gestor"
        className="lg:w-[788px] lg:h-[422px]"
        variation={"variation3"}
      >
        <div className="flex flex-col">
          <Formik
            initialValues={{
              nameFull: "",
              email: "",
              telefone: "",
              hospital: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // Handle form submission here
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col flex-grow justify-center">
                <div className="flex flex-col mt-3 gap-3">
                  <div className="flex-1">
                    <InputField
                      label="Nome completo"
                      name="nameFull"
                      type="text"
                    />
                  </div>
                  <div className="flex-1">
                    <InputField label="E-mail" name="email" type="email" />
                  </div>
                </div>

                <div className="flex flex-wrap mt-3 gap-3">
                  <div className="flex-1">
                    <InputField label="Telefone" name="telefone" type="text" />
                  </div>
                  <div className="flex-1">
                    <InputField
                      label="Hospital vinculado"
                      name="hospital"
                      type="text"
                    />
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
        title="Gestores"
        searchPlaceholder="Buscar por nome"
        openModal={handleOpenModalCreateAdmin}
      />

      <div className="mt-10 bg-white shadow-md rounded-[35px] h-auto">
        <TableGestor data={data} />
      </div>
    </>
  );
}
