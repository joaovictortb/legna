"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import { loginSchema } from "./SchemaValidator";
import InputField from "../../inputs/InputField/InputField";
import { kronaOne } from "@/fonts/fonts";
import FooterButton from "../../buttons/FooterButton/FooterButton";

function ErrorMessage({ showError }: any) {
  if (!showError) return null;
  return (
    <div className="w-full bg-[#FF6B6B] py-10 fixed top-0 right-0 z-0 flex justify-end">
      <div className="w-full max-w-[50%] text-center font-medium text-lg text-white">
        Usuário ou senha incorretos, tente novamente.
      </div>
    </div>
  );
}

export default function LoginForm() {
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (values: any) => {
    setShowError(false);
    setIsLoading(true);

    setTimeout(() => {
      try {
        console.log("Dados validados com sucesso:", values);
        router.push("/dashboard");
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
      <div className="flex flex-col min-h-screen justify-between">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleLogin(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col flex-grow justify-center">
              <div className="flex flex-col gap-5">
                <h1 className={`text-legna-500 text-2xl ${kronaOne.className}`}>
                  Login
                </h1>
                <InputField
                  label="Nome de usuário ou e-mail"
                  name="email"
                  type="email"
                />
                <InputField label="Senha" name="password" type="password" />
              </div>
              <Link
                className="text-[#61646B] cursor-pointer text-right justify-end flex w-full text-sm mt-3"
                href={"/auth/forgot-password"}
              >
                Esqueci minha senha
              </Link>

              <div className="w-full flex justify-end mt-5">
                <button
                  type="submit"
                  disabled={isSubmitting || isLoading}
                  className="bg-legna-500 h-[50px] justify-end px-5 text-white rounded-full p-2 w-[230px] flex items-center"
                >
                  {isLoading ? (
                    <>
                      <div className="spinner mr-2"></div>
                      <span>Carregando...</span>
                    </>
                  ) : (
                    <>
                      <span className="mr-2">Entrar</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="w-full flex justify-center fixed bottom-0 right-0 z-0">
          <div className="w-[50%]"></div>
          <div className="w-[50%]">
            <div className="w-full py-10 flex justify-center">
              <FooterButton
                href="/auth/support"
                label="Contatar suporte"
                variation="variation1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
