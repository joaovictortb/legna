"use client";
import { Form, Formik } from "formik";
import { useState } from "react";
import BoxHeader from "../components/Header/BoxHeader/BoxHeader";
import InputField from "../components/inputs/InputField/InputField";
import ModalCustom from "../components/modals/ModalCustom/ModalCustom";
import TableHome from "../components/Tables/TableHome/TableHome";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Nome obrigatório!"),
  email: Yup.string()
    .email("E-mail inválido")
    .required("E-mail é obrigatório!"),
  phone: Yup.string().required("Telefone é obrigatório!"),
  cpf: Yup.string().required("CPF é obrigatório!"),
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

  {
    fullName: "João Victor de Souza Pereira",
    email: "joaovictorofc@mail.com",
    phone: "061 98410-3639",
    cpf: "063.730.021-10",
  },

  {
    fullName: "Camila Souza Costa",
    email: "camila.healthcenter@mail.com",
    phone: "051 99374 8723",
    cpf: "567.834.562-78",
  },

  {
    fullName: "João Victor de Souza Pereira",
    email: "joaovictorofc@mail.com",
    phone: "061 98410-3639",
    cpf: "063.730.021-10",
  },

  {
    fullName: "Camila Souza Costa",
    email: "camila.healthcenter@mail.com",
    phone: "051 99374 8723",
    cpf: "567.834.562-78",
  },

  {
    fullName: "João Victor de Souza Pereira",
    email: "joaovictorofc@mail.com",
    phone: "061 98410-3639",
    cpf: "063.730.021-10",
  },

  {
    fullName: "Camila Souza Costa",
    email: "camila.healthcenter@mail.com",
    phone: "051 99374 8723",
    cpf: "567.834.562-78",
  },

  {
    fullName: "João Victor de Souza Pereira",
    email: "joaovictorofc@mail.com",
    phone: "061 98410-3639",
    cpf: "063.730.021-10",
  },

  {
    fullName: "Camila Souza Costa",
    email: "camila.healthcenter@mail.com",
    phone: "051 99374 8723",
    cpf: "567.834.562-78",
  },

  {
    fullName: "João Victor de Souza Pereira",
    email: "joaovictorofc@mail.com",
    phone: "061 98410-3639",
    cpf: "063.730.021-10",
  },

  {
    fullName: "Camila Souza Costa",
    email: "camila.healthcenter@mail.com",
    phone: "051 99374 8723",
    cpf: "567.834.562-78",
  },

  {
    fullName: "João Victor de Souza Pereira",
    email: "joaovictorofc@mail.com",
    phone: "061 98410-3639",
    cpf: "063.730.021-10",
  },

  {
    fullName: "Camila Souza Costa",
    email: "camila.healthcenter@mail.com",
    phone: "051 99374 8723",
    cpf: "567.834.562-78",
  },

  {
    fullName: "João Victor de Souza Pereira",
    email: "joaovictorofc@mail.com",
    phone: "061 98410-3639",
    cpf: "063.730.021-10",
  },
];

export default function Administradores() {
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
        label="Cadastrar administrador"
        className="lg:w-[788px] lg:h-[422px]"
        variation={"variation3"}
      >
        <div className="flex flex-col">
          <Formik
            initialValues={{ fullName: "", email: "", phone: "", cpf: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // Handle form submission here
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col flex-grow justify-center">
                <div className="flex flex-col gap-3 mt-3">
                  <InputField
                    label="Nome completo"
                    name="fullName"
                    type="text"
                  />
                  <InputField label="E-mail" name="email" type="email" />
                </div>
                <div className="flex flex-wrap mt-3 gap-3">
                  <div className="flex-1">
                    <InputField label="Telefone" name="phone" type="text" />
                  </div>
                  <div className="flex-1">
                    <InputField label="CPF" name="cpf" type="text" />
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
        title="Administradores"
        searchPlaceholder="Buscar por nome"
        openModal={handleOpenModalCreateAdmin}
      />

      <div className="mt-10 bg-white shadow-md rounded-[35px] h-auto">
        <TableHome data={data} />
      </div>
    </>
  );
}
