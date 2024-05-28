"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import { kronaOne } from "@/fonts/fonts";
import InputField from "@/app/components/inputs/InputField/InputField";
import FooterButton from "@/app/components/buttons/FooterButton/FooterButton";
import * as Yup from "yup";
import ButtonForm from "@/app/components/buttons/ButtonForm/ButtonForm";

function ErrorMessage({ showError }: any) {
  if (!showError) return null;
  return (
    <div className="w-full bg-[#D38BFA21] py-10 fixed top-0 right-0 z-0 flex justify-end">
      <div className="w-full max-w-[50%] text-center font-medium text-lg text-[#61646B]">
        Erro ao enviar, tente novamente.
      </div>
    </div>
  );
}

export default function SupportPage() {
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (values: any) => {
    setShowError(false);
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/users?email=${values.email}`
        );
        const users = await response.json();

        if (users.length > 0 && users[0].password === values.password) {
          console.log("Dados validados com sucesso:", values);
          router.push("/dashboard");
        } else {
          setShowError(true);
        }
      } catch (error) {
        console.error("Erro ao validar o login:", error);
        setShowError(true);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <>
      <ErrorMessage showError={showError} />

      <div className="min-h-screen justify-between w-full md:max-w-xl flex flex-col">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            handleLogin(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col flex-grow justify-center">
              <div className="flex flex-col gap-5 items-center">
                <h1
                  className={`text-legna-500 text-[32px] font-normal tracking-tight leading-32px ${kronaOne.className}`}
                >
                  Contatar suporte
                </h1>
              </div>

              <div
                className="bg-white rounded-[30px] h-auto w-full p-6 flex flex-col text-center mt-8"
                style={{
                  boxShadow: "0px 4px 5px 0px rgba(172, 172, 172, 0.22)",
                }}
              >
                <h1 className="text-[#272727] font-medium text-base">
                  Descreva seu bug, dúvida ou reclamação sobre a plataforma.
                </h1>
                <h1 className="text-[#272727] font-medium text-base mt-3">
                  Sua mensagem será enviada para a equipe Legna avaliar e<br />
                  entrar em contato o mais rápido possível.
                </h1>
              </div>

              <div
                className="bg-white rounded-[30px] h-auto w-full flex flex-col text-center mt-8"
                style={{
                  boxShadow: "0px 4px 5px 0px rgba(172, 172, 172, 0.22)",
                }}
              >
                <div className="w-full mx-auto p-6">
                  <div className="mb-4">
                    <label
                      htmlFor="title"
                      className="block text-gray-700 font-medium mb-2 text-start"
                    >
                      Título
                    </label>
                    <input
                      type="text"
                      id="title"
                      placeholder="Digite aqui"
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2 text-start">
                      Assunto
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="assunto"
                          value="bug"
                          className="mr-2"
                        />
                        Bug
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="assunto"
                          value="duvidas"
                          className="mr-2"
                        />
                        Dúvidas
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="assunto"
                          value="sugestao"
                          className="mr-2"
                        />
                        Sugestão
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="assunto"
                          value="outro"
                          className="mr-2"
                        />
                        Outro
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="text"
                      className="block text-gray-700 font-medium mb-2 text-start"
                    >
                      Texto
                    </label>
                    <textarea
                      id="text"
                      placeholder="Digite aqui"
                      className="w-full border border-gray-300 rounded-lg p-2 h-52"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center gap-2 mt-10">
                <ButtonForm
                  label="Cancelar"
                  variation="variation1"
                  className="bg-transparent border-legna-500 text-legna-500"
                  href="/auth/login"
                />

                <ButtonForm label="Salvar" variation="variation2" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
