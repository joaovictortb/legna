"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { kronaOne } from "@/fonts/fonts";
import FooterButton from "@/app/components/buttons/FooterButton/FooterButton";

export default function NewPassword() {
  return (
    <>
      <div className="min-h-screen justify-between w-full md:max-w-md flex flex-col">
        <div className="flex flex-col flex-grow justify-center">
          <div className="flex flex-col gap-5">
            <h1 className={`text-legna-500 text-2xl ${kronaOne.className}`}>
              Redefinir senha
            </h1>
            <form>
              <div className="mt-3 flex flex-col gap-5">
                <div>
                  <label className="text-base">Nova senha</label>
                  <input
                    type="password"
                    className="w-full p-2 px-3 text-sm outline-none rounded-[15px] border border-[#AEB1C7]"
                  />
                </div>

                <div>
                  <label className="text-base">Confirmar senha</label>
                  <input
                    type="password"
                    className="w-full p-2 px-3 text-sm outline-none rounded-[15px] border border-[#AEB1C7]"
                  />
                </div>
              </div>

              <div className="w-full flex justify-end mt-5">
                <Link
                  className="bg-legna-500 h-[50px] justify-end px-5 text-white rounded-full p-2 w-[230px] flex items-center"
                  href="/auth/login"
                >
                  <span className="mr-2">Enviar</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </form>
          </div>
        </div>
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
