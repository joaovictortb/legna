"use client";

import BoxHeader from "@/app/components/Header/BoxHeader/BoxHeader";
import InputField from "@/app/components/inputs/InputField/InputField";
import TextAreaField from "@/app/components/inputs/TextAreaField/TextAreaField";
import ModalCustom from "@/app/components/modals/ModalCustom/ModalCustom";
import TableFAQ from "@/app/components/Tables/TableFAQ/TableFAQ";
import TableGestor from "@/app/components/Tables/TableGestor/TableGestor";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Obrigatório!"),
  text: Yup.string().required("Obrigatório!"),
});

const data = [
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab...",
    id: "42661",
    status: "Ativo",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab...",
    id: "42662",
    status: "Inativo",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab...",
    id: "42663",
    status: "Ativo",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab...",
    id: "42664",
    status: "Inativo",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab...",
    id: "42665",
    status: "Ativo",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab...",
    id: "42666",
    status: "Inativo",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab...",
    id: "42667",
    status: "Ativo",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab...",
    id: "42668",
    status: "Inativo",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab...",
    id: "42669",
    status: "Ativo",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab...",
    id: "42670",
    status: "Inativo",
  },
];

export default function Gestores() {
  const [isModalOpenCreateAdmin, setIsModalOpenCreateAdmin] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

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
        label="Cadastrar FAQ"
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
        title="FAQ"
        searchPlaceholder="Buscar por nome"
        openModal={handleOpenModalCreateAdmin}
      />

      <div className="mt-10 bg-white shadow-md rounded-[35px] h-auto">
        <TableFAQ data={data} />
      </div>
    </>
  );
}
