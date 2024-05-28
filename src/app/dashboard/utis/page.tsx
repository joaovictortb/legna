"use client";

import BoxHeader from "@/app/components/Header/BoxHeader/BoxHeader";
import InputField from "@/app/components/inputs/InputField/InputField";
import ModalCustom from "@/app/components/modals/ModalCustom/ModalCustom";
import TableUTI from "@/app/components/Tables/TableUTI/TableUTI";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  nameUTI: Yup.string().required("Obrigatório!"),
  Nleitos: Yup.string().required("Obrigatório!"),
  hospital: Yup.string().required("Obrigatório!"),
  gestor: Yup.string().required("Obrigatório!"),
});

const data = [
  {
    fullName: "Camila Souza Costa",
    email: "camila.healthcenter@mail.com",
    phone: "051 99374 8723",
    cpf: "567.834.562-78",
  },
  {
    fullName: "João Pedro Almeida",
    email: "joao.almeida@mail.com",
    phone: "051 99374 1234",
    cpf: "123.456.789-10",
  },
  {
    fullName: "Maria Clara Silva",
    email: "maria.silva@mail.com",
    phone: "051 99374 5678",
    cpf: "234.567.890-12",
  },
  {
    fullName: "José Antonio Pereira",
    email: "jose.pereira@mail.com",
    phone: "051 99374 9012",
    cpf: "345.678.901-23",
  },
  {
    fullName: "Ana Paula Rocha",
    email: "ana.rocha@mail.com",
    phone: "051 99374 3456",
    cpf: "456.789.012-34",
  },
  {
    fullName: "Lucas Matheus Costa",
    email: "lucas.costa@mail.com",
    phone: "051 99374 7890",
    cpf: "567.890.123-45",
  },
  {
    fullName: "Beatriz Ramos Lima",
    email: "beatriz.lima@mail.com",
    phone: "051 99374 2345",
    cpf: "678.901.234-56",
  },
  {
    fullName: "Gustavo Henrique Santos",
    email: "gustavo.santos@mail.com",
    phone: "051 99374 6789",
    cpf: "789.012.345-67",
  },
  {
    fullName: "Sofia Gabriela Martins",
    email: "sofia.martins@mail.com",
    phone: "051 99374 0123",
    cpf: "890.123.456-78",
  },
  {
    fullName: "Pedro Lucas Carvalho",
    email: "pedro.carvalho@mail.com",
    phone: "051 99374 4567",
    cpf: "901.234.567-89",
  },
  {
    fullName: "Larissa Fernanda Oliveira",
    email: "larissa.oliveira@mail.com",
    phone: "051 99374 8901",
    cpf: "012.345.678-90",
  },
  {
    fullName: "Renato Augusto Vieira",
    email: "renato.vieira@mail.com",
    phone: "051 99374 1235",
    cpf: "123.456.789-01",
  },
  {
    fullName: "Fernanda Letícia Ribeiro",
    email: "fernanda.ribeiro@mail.com",
    phone: "051 99374 5679",
    cpf: "234.567.890-23",
  },
  {
    fullName: "Carlos Eduardo Lima",
    email: "carlos.lima@mail.com",
    phone: "051 99374 9013",
    cpf: "345.678.901-34",
  },
  {
    fullName: "Mariana Isabel Mendes",
    email: "mariana.mendes@mail.com",
    phone: "051 99374 3457",
    cpf: "456.789.012-45",
  },
  {
    fullName: "Ricardo André Silva",
    email: "ricardo.silva@mail.com",
    phone: "051 99374 7891",
    cpf: "567.890.123-56",
  },
  {
    fullName: "Júlia Vitória Ferreira",
    email: "julia.ferreira@mail.com",
    phone: "051 99374 2346",
    cpf: "678.901.234-67",
  },
];

export default function UTI() {
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
        label="Cadastrar UTI"
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
        title="UTIs"
        searchPlaceholder="Buscar por nome"
        openModal={handleOpenModalCreateAdmin}
      />

      <div className="mt-10 bg-white shadow-md rounded-[35px] h-auto">
        <TableUTI data={data} />
      </div>
    </>
  );
}
