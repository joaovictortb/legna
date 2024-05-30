// pages/index.tsx
import { kronaOne } from "@/fonts/fonts";
import Image from "next/image";
import Background1 from "../../public/images/background1.jpg";
import Background2 from "../../public/images/background2.png";
import Background3 from "../../public/images/background3.png";
import Background4 from "../../public/images/background4.jpeg";
import Logo1 from "../../public/images/logo.png";
import Logo2 from "../../public/images/logo1.png";
import Logo3 from "../../public/images/logo3.png";

import ButtonForm from "./components/buttons/ButtonForm/ButtonForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFDFF]">
      {/* <header className="bg-white py-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold text-legna-500">Legna</div>
          <button className="bg-legna-500 text-white py-2 px-4 rounded-full shadow hover:bg-legna-600 transition">
            Entrar em contato
          </button>
        </div>
      </header> */}

      <main className="mx-auto w-full px-5 py-5">
        <div className="relative">
          <Image src={Background1} alt="Background" layout="responsive" />
          <div className="absolute left-0 top-0 h-full w-[620px]">
            <Image
              className="object-cover absolute rounded-[40px]"
              fill
              src="/images/backgroundMascara.png"
              alt="backgroundAuth"
              quality={100}
              priority
            />
          </div>
          <div className="absolute bg-[#FFF]/80 h-[75px] rounded-[76px] px-10 inset-0 flex items-center mx-20 mt-10">
            <div className="flex w-full justify-between items-center">
              <div>
                <Image
                  src={Logo3}
                  alt="Logo"
                  width={158}
                  height={33.853}
                  className="object-cover mt-1"
                />
              </div>
              <div>
                {" "}
                <ButtonForm
                  label={"Entre em contato"}
                  variation={"variation2"}
                  className="px-10"
                />
              </div>
            </div>
          </div>

          <section className="absolute inset-0 flex items-end px-24 py-10">
            <div className="flex flex-col -space-y-6">
              <div
                className={`text-[64px] font-normal text-white ${kronaOne.className}`}
              >
                Gestão inteligente de UTIs,
              </div>

              <div
                className={`text-[64px] font-normal text-[#AADC6A] ${kronaOne.className}`}
              >
                unindo tecnologia e cuidados
              </div>

              <div
                className={`text-[64px] font-normal text-white ${kronaOne.className}`}
              >
                de saúde para salvar vidas.
              </div>
            </div>
          </section>
        </div>
      </main>
      <section className="flex justify-center items-center">
        <div
          className={`text-[48px] mt-10 font-normal text-center text-[#575FF2] ${kronaOne.className}`}
        >
          Somos uma solução tecnológica de
          <br />
          protocolos assistenciais centralizados
          <br />
          para resultados superiores.
        </div>
      </section>

      <section
        style={{
          boxShadow: " 0px 4px 14.2px 4px rgba(39, 39, 39, 0.11)",
        }}
        className="bg-[#F5F5F9] rounded-[30px] h-[483px] mx-10 mt-10"
      >
        <div className="flex h-full w-full">
          <div className="w-[50%] flex flex-col justify-center h-full px-10">
            <div
              className={`text-[36px] font-normal text-[#575FF2] ${kronaOne.className}`}
            >
              Busca pela Contribuição
              <br />e Excelência:
            </div>
            <div className={`text-base mt-3 font-normal text-[#CDCFFB]`}>
              Trabalho em equipe sistematicamente e constantemente. É<br />
              necessário entendimento para ter engajamento. O objetivo
              <br />
              não é avaliar performances individuais e sim a qualidade
              <br />
              como um todo através dos dados gerados após cada teste.
            </div>
          </div>
          <div className="w-[50%]">
            <Image src={Background2} alt="Background" layout="responsive" />
          </div>
        </div>
      </section>

      <section
        style={{
          boxShadow: "0px 4px 14.2px 4px rgba(39, 39, 39, 0.11)",
        }}
        className="bg-[#FFFFFF] rounded-[30px] h-[483px] mx-10 mt-10"
      >
        <div className="flex h-full w-full">
          <div className="w-[50%] flex flex-col justify-center h-full px-10">
            <div
              className={`text-[36px] font-normal text-[#575FF2] ${kronaOne.className}`}
            >
              Nosso compromisso
              <br />
              com cuidado:
            </div>
            <div className={`text-base mt-3 font-normal text-[#727488]`}>
              Cuidar de um paciente transcende a profissão, envolvendo
              <br />
              valores como compaixão, generosidade e respeito. Embora
              <br />
              seja uma experiência individual, os métodos de cuidado
              <br />
              podem nos ajudar a nos tornar nossa melhor versão humana.
            </div>
          </div>
          <div className="w-[50%] flex p-10">
            <Image src={Background3} alt="Background" layout="responsive" />
          </div>
        </div>
      </section>

      <section className="px-10 mt-10">
        <div className="relative rounded-[50px]">
          <Image
            src={Background4}
            alt="Background"
            layout="responsive"
            className="rounded-[50px]"
          />
          <div className="absolute left-0 top-0 h-full w-[620px]">
            <Image
              className="object-cover absolute rounded-[50px]"
              fill
              src="/images/backgroundMascara.png"
              alt="backgroundAuth"
              quality={100}
              priority
            />
          </div>

          <section className="absolute inset-0 flex items-end px-24 py-10">
            <div className="flex flex-col items-center justify-center w-full">
              <div
                className={`text-[48px] font-normal text-center text-white ${kronaOne.className}`}
              >
                Adquira Legna e simplifique sua
                <br />
                gestão de forma inteligente.
              </div>
              <div>
                <ButtonForm
                  label={"Entre em contato"}
                  variation={"variation2"}
                  className="mt-10 bg-[#D38BFA] px-10"
                />
              </div>
            </div>
          </section>
        </div>
      </section>

      <footer
        style={{
          boxShadow: " 0px 4px 14.2px 4px rgba(39, 39, 39, 0.11)",
        }}
        className="bg-[#F5F5F9] rounded-[30px] h-[219px] mx-10 mt-10 flex justify-center mb-10"
      >
        <div className="flex w-full justify-between items-center px-10">
          <div className="flex flex-col items-center gap-10">
            <div className="flex justify-start w-full">
              <Image
                src={Logo3}
                alt="Logo"
                width={246}
                height={152}
                className="object-cover"
              />
            </div>
            <div className="text-[#AEB1C7] text-center">
              Legna 2023 todos direitos reservados.
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <ButtonForm
              label={"Entre em contato"}
              variation={"variation2"}
              className="h-[40px]"
            />
            <div className="text-[#AEB1C7]">Termos e políticas de uso</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
