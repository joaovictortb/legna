"use client";

import InputField from "@/app/components/inputs/InputField/InputField";
import { Form, Formik } from "formik";
import { ChevronDown, Download, PenLine } from "lucide-react";
import { useState } from "react";
import Layout from "./layout";
import * as Yup from "yup";
import TextAreaField from "@/app/components/inputs/TextAreaField/TextAreaField";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Obrigatório!"),
  text: Yup.string().required("Obrigatório!"),
});

const PoliticasDeUsoPage = () => {
  const [editMode, setEditMode] = useState(false);
  const [mostrarMais, setMostrarMais] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  return (
    <Layout>
      {!editMode ? (
        <div>
          <div className="flex w-full bg-white shadow-md rounded-[35px] h-auto p-6">
            <div className="flex w-full flex-col">
              <div className="flex justify-between w-full">
                <div className="font-semibold text-[#272727] text-3xl">
                  Políticas de Uso
                </div>

                <div className="flex gap-5">
                  <div className="group">
                    <button
                      type="button"
                      className="bg-transparent w-auto px-5 gap-3 justify-center items-center h-[45px] flex rounded-full border-2 border-legna-500 group-hover:border-transparent group-hover:bg-legna-500"
                    >
                      <Download
                        className="text-legna-500 group-hover:text-white"
                        size={16}
                      />
                      <span className="text-legna-500 bg-transparent group-hover:text-white">
                        Exportar CSV
                      </span>
                    </button>
                  </div>

                  <div className="group">
                    <button
                      type="button"
                      className="bg-transparent w-auto px-5 gap-3 justify-center items-center h-[45px] flex rounded-full border-2 border-legna-500 group-hover:border-transparent group-hover:bg-legna-500"
                    >
                      <Download
                        className="text-legna-500 group-hover:text-white"
                        size={16}
                      />
                      <span className="text-legna-500 bg-transparent group-hover:text-white">
                        Exportar SPSS
                      </span>
                    </button>
                  </div>

                  <button
                    onClick={handleEditClick}
                    type="button"
                    className="bg-legna-500 w-auto px-5 h-[45px] gap-3 rounded-full flex justify-center items-center"
                  >
                    <PenLine color="#FFF" size={16} />
                    <span className="text-white bg-transparent">Editar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full bg-white shadow-md rounded-[35px] h-auto mt-10">
            <div className="flex w-full flex-col">
              <div className="flex justify-between w-full">
                <div className="font-semibold text-[#272727] text-xl p-7">
                  Lorem ipsum dolor sit amet.
                </div>
              </div>
              <hr className="border-[#61646B]/15" />
              <div className="p-7">
                <p className="text-[#272727] text-base font-normal leading-[29px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Volutpat diam ut venenatis tellus in metus vulputate eu
                  scelerisque. Ultrices sagittis orci a scelerisque purus
                  semper. Aliquam eleifend mi in nulla posuere sollicitudin
                  aliquam ultrices sagittis. Lacus sed turpis tincidunt id
                  aliquet risus feugiat. Mi sit amet mauris commodo quis.
                  Scelerisque purus semper eget duis. Elit duis tristique
                  sollicitudin nibh sit amet commodo. In fermentum et
                  sollicitudin ac orci phasellus. Diam in arcu cursus euismod
                  quis viverra nibh. Accumsan sit amet nulla facilisi. Magna
                  eget est lorem ipsum dolor sit. Suspendisse faucibus interdum
                  posuere lorem ipsum dolor sit amet consectetur. Nulla pharetra
                  diam sit amet nisl suscipit adipiscing bibendum. Dui ut ornare
                  lectus sit amet est. Pharetra convallis posuere morbi leo urna
                  molestie. Dolor sit amet consectetur adipiscing elit ut
                  aliquam purus sit. Adipiscing vitae proin sagittis nisl
                  rhoncus mattis.
                </p>

                <p className="mt-5 text-[#272727] text-base font-normal leading-[29px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Volutpat diam ut venenatis tellus in metus vulputate eu
                  scelerisque. Ultrices sagittis orci a scelerisque purus
                  semper. Aliquam eleifend mi in nulla posuere sollicitudin
                  aliquam ultrices sagittis. Lacus sed turpis tincidunt id
                  aliquet risus feugiat. Mi sit amet mauris commodo quis.
                  Scelerisque purus semper eget duis. Elit duis tristique
                  sollicitudin nibh sit amet commodo. In fermentum et
                  sollicitudin ac orci phasellus. Diam in arcu cursus euismod
                  quis viverra nibh. Accumsan sit amet nulla facilisi. Magna
                  eget est lorem ipsum dolor sit. Suspendisse faucibus interdum
                  posuere lorem ipsum dolor sit amet consectetur. Nulla pharetra
                  diam sit amet nisl suscipit adipiscing bibendum. Dui ut ornare
                  lectus sit amet est. Pharetra convallis posuere morbi leo urna
                  molestie. Dolor sit amet consectetur adipiscing elit ut
                  aliquam purus sit. Adipiscing vitae proin sagittis nisl
                  rhoncus mattis.
                </p>
                {mostrarMais && (
                  <>
                    <p className="mt-5 text-[#272727] text-base font-normal leading-[29px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Volutpat diam ut venenatis tellus in metus
                      vulputate eu scelerisque. Ultrices sagittis orci a
                      scelerisque purus semper. Aliquam eleifend mi in nulla
                      posuere sollicitudin aliquam ultrices sagittis. Lacus sed
                      turpis tincidunt id aliquet risus feugiat. Mi sit amet
                      mauris commodo quis. Scelerisque purus semper eget duis.
                      Elit duis tristique sollicitudin nibh sit amet commodo. In
                      fermentum et sollicitudin ac orci phasellus. Diam in arcu
                      cursus euismod quis viverra nibh. Accumsan sit amet nulla
                      facilisi. Magna eget est lorem ipsum dolor sit.
                      Suspendisse faucibus interdum posuere lorem ipsum dolor
                      sit amet consectetur. Nulla pharetra diam sit amet nisl
                      suscipit adipiscing bibendum. Dui ut ornare lectus sit
                      amet est. Pharetra convallis posuere morbi leo urna
                      molestie. Dolor sit amet consectetur adipiscing elit ut
                      aliquam purus sit. Adipiscing vitae proin sagittis nisl
                      rhoncus mattis.
                    </p>

                    <p className="mt-5 text-[#272727] text-base font-normal leading-[29px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Volutpat diam ut venenatis tellus in metus
                      vulputate eu scelerisque. Ultrices sagittis orci a
                      scelerisque purus semper. Aliquam eleifend mi in nulla
                      posuere sollicitudin aliquam ultrices sagittis. Lacus sed
                      turpis tincidunt id aliquet risus feugiat. Mi sit amet
                      mauris commodo quis. Scelerisque purus semper eget duis.
                      Elit duis tristique sollicitudin nibh sit amet commodo. In
                      fermentum et sollicitudin ac orci phasellus. Diam in arcu
                      cursus euismod quis viverra nibh. Accumsan sit amet nulla
                      facilisi. Magna eget est lorem ipsum dolor sit.
                      Suspendisse faucibus interdum posuere lorem ipsum dolor
                      sit amet consectetur. Nulla pharetra diam sit amet nisl
                      suscipit adipiscing bibendum. Dui ut ornare lectus sit
                      amet est. Pharetra convallis posuere morbi leo urna
                      molestie. Dolor sit amet consectetur adipiscing elit ut
                      aliquam purus sit. Adipiscing vitae proin sagittis nisl
                      rhoncus mattis.
                    </p>

                    <p className="mt-5 text-[#272727] text-base font-normal leading-[29px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Volutpat diam ut venenatis tellus in metus
                      vulputate eu scelerisque. Ultrices sagittis orci a
                      scelerisque purus semper. Aliquam eleifend mi in nulla
                      posuere sollicitudin aliquam ultrices sagittis. Lacus sed
                      turpis tincidunt id aliquet risus feugiat. Mi sit amet
                      mauris commodo quis. Scelerisque purus semper eget duis.
                      Elit duis tristique sollicitudin nibh sit amet commodo. In
                      fermentum et sollicitudin ac orci phasellus. Diam in arcu
                      cursus euismod quis viverra nibh. Accumsan sit amet nulla
                      facilisi. Magna eget est lorem ipsum dolor sit.
                      Suspendisse faucibus interdum posuere lorem ipsum dolor
                      sit amet consectetur. Nulla pharetra diam sit amet nisl
                      suscipit adipiscing bibendum. Dui ut ornare lectus sit
                      amet est. Pharetra convallis posuere morbi leo urna
                      molestie. Dolor sit amet consectetur adipiscing elit ut
                      aliquam purus sit. Adipiscing vitae proin sagittis nisl
                      rhoncus mattis.
                    </p>
                  </>
                )}
              </div>

              <button
                onClick={() => setMostrarMais(!mostrarMais)}
                className="mt-3 text-legna-500 rounded-md flex justify-end px-7 mb-5"
              >
                <ChevronDown strokeWidth={2} />
                {mostrarMais ? "Ver menos" : "Ver mais"}
              </button>
            </div>
          </div>

          {/* Aqui vai o resto do conteúdo da página */}
        </div>
      ) : (
        <div className="">
          <div className="flex w-full bg-white shadow-md rounded-[35px] h-auto p-6">
            <div className="flex w-full flex-col">
              <div className="flex justify-between w-full">
                <div className="font-semibold text-[#272727] text-3xl">
                  Adicionar políticas de uso
                </div>
              </div>
            </div>
          </div>

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
              <Form className="flex flex-col flex-grow justify-center mt-10">
                <div className="flex w-full bg-white shadow-md rounded-[35px] h-auto p-6">
                  <div className="flex w-full flex-col">
                    <InputField label="Título" name="title" type="text" />
                    <TextAreaField label="Texto" name="text" rows={20} />
                  </div>
                </div>

                <div className="mt-5 sm:mt-4 flex justify-end space-x-4">
                  <button
                    onClick={handleCancelClick}
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
      )}
    </Layout>
  );
};

export default PoliticasDeUsoPage;
