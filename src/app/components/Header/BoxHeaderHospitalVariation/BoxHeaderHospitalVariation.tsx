import { Calendar, Download, Eye, Filter, PenLine, Search } from "lucide-react";
import TableTeste from "../../Tables/TableTeste/TableTeste";

interface BoxHeaderProps {
  title: string;
  searchPlaceholder: string;
  openModal?: any;
  handleBack?: any;
}

const data = [
  {
    data: "02/11/2023 - 11:00",
    ventilacao: "Sim",
    escala: "05",
    rass: "-3",
    cam: "Positivo",
    profissional: "Germano Augustin Souza Ferreira",
    turno: "Manhã",
  },
  {
    data: "02/11/2023 - 13:00",
    ventilacao: "Não",
    escala: "03",
    rass: "0",
    cam: "Negativo",
    profissional: "Ana Paula Silva",
    turno: "Tarde",
  },
  {
    data: "03/11/2023 - 09:00",
    ventilacao: "Sim",
    escala: "06",
    rass: "-1",
    cam: "Positivo",
    profissional: "Carlos Eduardo Santos",
    turno: "Manhã",
  },
  {
    data: "03/11/2023 - 15:00",
    ventilacao: "Não",
    escala: "04",
    rass: "-2",
    cam: "Negativo",
    profissional: "Maria Fernanda Oliveira",
    turno: "Tarde",
  },
  {
    data: "04/11/2023 - 08:00",
    ventilacao: "Sim",
    escala: "02",
    rass: "-4",
    cam: "Positivo",
    profissional: "José Ricardo Lima",
    turno: "Manhã",
  },
  {
    data: "04/11/2023 - 14:00",
    ventilacao: "Não",
    escala: "05",
    rass: "-1",
    cam: "Negativo",
    profissional: "Patrícia Almeida",
    turno: "Tarde",
  },
  {
    data: "05/11/2023 - 07:00",
    ventilacao: "Sim",
    escala: "03",
    rass: "1",
    cam: "Positivo",
    profissional: "Fernando Costa",
    turno: "Manhã",
  },
  {
    data: "05/11/2023 - 16:00",
    ventilacao: "Não",
    escala: "02",
    rass: "-3",
    cam: "Negativo",
    profissional: "Juliana Mendes",
    turno: "Tarde",
  },
];

const BoxHeaderHospitalVariation = ({
  title,
  searchPlaceholder,
  openModal,
  handleBack,
}: BoxHeaderProps) => {
  return (
    <>
      <div className="flex w-full bg-white shadow-md rounded-[35px] h-auto p-6">
        <div className="flex w-full flex-col">
          <div className="flex justify-between w-full">
            <div className="font-semibold text-[#272727] text-3xl">{title}</div>
          </div>
          <div className="flex w-full">
            <div className="text-[#27272780] font-normal text-[13px] mt-2">
              Hospital Mãe de Deus Center
            </div>
          </div>
          <div className="py-5 flex justify-between w-full">
            <div className="flex gap-5">
              <div className="flex gap-3 items-center">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="De"
                    className="p-2 h-[45px] w-[130px] px-3 text-base outline-none rounded-full border border-[#AEB1C7] pr-10"
                  />
                  <Calendar
                    className="absolute right-3 text-blue-500"
                    size={20}
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Até"
                    className="p-2 h-[45px] w-[130px] px-3 text-base outline-none rounded-full border border-[#AEB1C7] pr-10"
                  />
                  <Calendar
                    className="absolute right-3 text-blue-500"
                    size={20}
                  />
                </div>
              </div>

              <button
                type="button"
                className="bg-legna-500 w-auto px-8 h-[45px] gap-3 rounded-full flex justify-center items-center"
              >
                <Search color="#FFF" size={20} />
                <span className="text-white font-normal">Buscar</span>
              </button>

              <button
                type="button"
                className="bg-legna-500 w-auto px-8 h-[45px] gap-3 rounded-full flex justify-center items-center"
              >
                <Filter color="#FFF" className="fill-white" size={20} />
                <span className="text-white font-normal">Exibir filtros</span>
              </button>
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
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white shadow-md rounded-[35px] h-auto">
        <TableTeste data={data} />
      </div>
    </>
  );
};

export default BoxHeaderHospitalVariation;
