"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import { kronaOne } from "@/fonts/fonts";
import InputField from "@/app/components/inputs/InputField/InputField";
import FooterButton from "@/app/components/buttons/FooterButton/FooterButton";
import { forgotPasswordValidation } from "./validation";

function ErrorMessage({ showError }: any) {
  if (!showError) return null;
  return (
    <div className="w-full bg-[#D38BFA]/10 py-10 fixed top-0 right-0 z-0 flex justify-end">
      <div className="w-full max-w-[50%] text-center font-medium text-lg text-[#61646B]">
        Código de recuperação enviado para seu e-mail
      </div>
    </div>
  );
}

export default function ForgotPasswordPage() {
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

        // Assuming validation is successful if a user is found with the email
        if (users.length > 0) {
          console.log("Dados validados com sucesso:", values);
          router.push("/auth/redefinir-password");
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
      <div className="min-h-screen justify-between w-full md:max-w-md flex flex-col">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={forgotPasswordValidation}
          onSubmit={(values, { setSubmitting }) => {
            handleLogin(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col flex-grow justify-center">
              <div className="flex flex-col gap-5">
                <h1 className={`text-legna-500 text-2xl ${kronaOne.className}`}>
                  Redefinir senha
                </h1>
                <InputField label="E-mail" name="email" type="email" />
              </div>

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
                      <span className="mr-2">Enviar</span>
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
            <div className="w-full py-10 flex justify-center gap-2">
              <FooterButton
                href="/auth/login"
                label="Login"
                variation="variation2"
              />

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
