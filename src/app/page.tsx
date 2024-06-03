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
      <main className="mx-auto w-full px-5 py-5">
        <div className="relative">
          <div className="relative w-full h-[850px] md:h-[969px] sm:h-[500px] rounded-[40px]">
            <Image
              src={Background1}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="rounded-[40px]"
            />
          </div>
          <div className="absolute left-0 top-0 h-full w-full sm:w-[620px]">
            <Image
              className="object-cover absolute rounded-[40px]"
              fill
              src="/images/mascara2.png"
              alt="backgroundAuth"
              quality={100}
              priority
            />
          </div>

          <section className="absolute inset-0 flex items-end px-4 md:px-24 py-14">
            <div className="flex flex-col space-y-3">
              <div
                className={`text-4xl md:text-6xl font-normal text-white tracking-[-0.08em] ${kronaOne.className}`}
              >
                Gestão inteligente de UTIs,
              </div>

              <div
                className={`text-4xl md:text-6xl font-normal text-[#AADC6A] tracking-[-0.08em] ${kronaOne.className}`}
              >
                unindo tecnologia e cuidados
              </div>

              <div
                className={`text-4xl md:text-6xl font-normal text-white tracking-[-0.08em] ${kronaOne.className}`}
              >
                de saúde para salvar vidas.
              </div>
            </div>
          </section>
        </div>

        <div className="absolute bg-[#FFF]/80 h-[75px] rounded-[76px] px-4 md:px-10 inset-x-0 top-0 flex items-center mx-8 lg:mx-20 md:mx-20 mt-14">
          <div className="flex w-full justify-between items-center">
            <Image
              src={Logo3}
              alt="Logo"
              className="object-cover mt-1 w-[115px] h-[25px] lg:w-[158px] lg:h-[33.853px]"
            />
            <div>
              <ButtonForm
                label={"Entre em contato"}
                variation={"variation2"}
                className="px-2 lg:px-10 lg:text-sm text-sm py-2 lg:py-3"
              />
            </div>
          </div>
        </div>
      </main>
      <section className="flex flex-col gap-3 justify-center items-center mt-32 mb-32 px-5">
        <div
          className={`text-3xl md:text-6xl font-normal text-center text-legna-500 tracking-[-0.05em] leading-relaxed md:leading-[70px] ${kronaOne.className}`}
        >
          Somos uma solução tecnológica de
          <br />
          protocolos assistenciais centralizados
          <br />
          para resultados superiores.
        </div>
      </section>

      <section
        // style={{
        //   boxShadow: "0px 4px 14.2px 4px rgba(39, 39, 39, 0.11)",
        // }}
        className="bg-white shadow-2xl rounded-[30px] h-auto md:h-[483px] mx-5 md:mx-10 p-5 md:p-10"
      >
        <div className="flex flex-col md:flex-row h-full w-full">
          <div className="w-full md:w-[50%] flex flex-col justify-center h-full px-5 md:px-10">
            <div
              className={`text-3xl md:text-4xl font-normal text-[#575FF2] tracking-[-0.08em] ${kronaOne.className}`}
            >
              Busca pela Contribuição
              <br />e Excelência:
            </div>

            <div
              className={`text-base md:text-lg mt-3 font-normal text-[#727488]`}
            >
              Trabalho em equipe sistematicamente e constantemente. É
              <br />
              necessário entendimento para ter engajamento. O objetivo
              <br />
              não é avaliar performances individuais e sim a qualidade
              <br />
              como um todo através dos dados gerados após cada teste.
            </div>
          </div>
          <div className="w-full md:w-[50%] flex items-center justify-end py-10 mt-3 md:mt-0">
            <div className="w-full md:max-w-[700px] flex mt-14">
              <Image src={Background2} alt="Background" />
            </div>
          </div>
        </div>
      </section>

      <section
        // style={{
        //   boxShadow: "0px 4px 14.2px 4px rgba(39, 39, 39, 0.11)",
        // }}
        className="bg-[#FFFFFF] rounded-[30px] shadow-2xl h-auto md:h-[483px] mx-5 md:mx-10 mt-10 p-5 md:p-10"
      >
        <div className="flex flex-col md:flex-row h-full w-full">
          <div className="w-full md:w-[50%] flex flex-col justify-center h-full px-5 md:px-10">
            <div
              className={`text-3xl md:text-4xl font-normal text-[#575FF2] tracking-[-0.08em] ${kronaOne.className}`}
            >
              Nosso compromisso
              <br />
              com cuidado:
            </div>
            <div
              className={`text-base md:text-lg mt-3 font-normal text-[#727488]`}
            >
              Cuidar de um paciente transcende a profissão, envolvendo
              <br />
              valores como compaixão, generosidade e respeito. Embora
              <br />
              seja uma experiência individual, os métodos de cuidado
              <br />
              podem nos ajudar a nos tornar nossa melhor versão humana.
            </div>
          </div>
          <div className="w-full md:w-[50%] flex items-center justify-end py-10">
            <div className="w-full md:max-w-[580px] flex justify-center">
              <Image
                src={Background3}
                alt="Background"
                layout="responsive"
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-10 mt-24">
        <div className="relative rounded-[50px]">
          <Image
            src={Background4}
            alt="Background"
            layout="responsive"
            className="rounded-[50px]"
          />
          <div className="absolute left-0 top-0 h-full w-full sm:w-[620px]">
            <Image
              className="object-cover absolute rounded-[50px]"
              fill
              src="/images/backgroundMascara.png"
              alt="backgroundAuth"
              quality={100}
              priority
            />
          </div>

          <section className="absolute inset-0 flex items-end px-5 md:px-24 py-20">
            <div className="flex flex-col items-center justify-center w-full">
              <div
                className={`text-base md:text-3xl lg:text-[48px] font-normal text-center text-white ${kronaOne.className}`}
              >
                Adquira Legna e simplifique sua
              </div>

              <div
                className={`mt-3 text-base md:text-3xl lg:text-[48px] font-normal text-center text-white ${kronaOne.className}`}
              >
                gestão de forma inteligente.
              </div>
              <div>
                <ButtonForm
                  label={"Entre em contato"}
                  variation={"variation2"}
                  className="mt-10 bg-[#D38BFA] px-4 md:px-10 py-4"
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
        className="bg-[#F5F5F9] rounded-[30px] h-auto md:h-[219px] mx-5 md:mx-10 mt-10 flex justify-center mb-10 p-5"
      >
        <div className="flex w-full justify-between items-center flex-col md:flex-row px-5 md:px-10">
          <div className="flex flex-col items-center gap-5 md:gap-10">
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

          <div className="flex flex-col gap-5 md:gap-10 items-center md:items-end">
            <ButtonForm
              label={"Entre em contato"}
              variation={"variation2"}
              className="h-[40px] py-4"
            />
            <div className="text-[#AEB1C7]">Termos e políticas de uso</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
