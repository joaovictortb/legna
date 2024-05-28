import { Download, PenLine, Search } from "lucide-react";

interface BoxHeaderProps {
  title: string;
  searchPlaceholder: string;
  openModal?: any;
}

const BoxHeader = ({ title, searchPlaceholder, openModal }: BoxHeaderProps) => {
  return (
    <div className="flex w-full bg-white shadow-md rounded-[35px] h-auto p-6">
      <div className="flex w-full flex-col">
        <div className="font-semibold text-[#272727] text-3xl">{title}</div>

        <div className="py-5 flex justify-between w-full">
          <div className="flex gap-5">
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="p-2 h-[45px] w-[273px] px-3 text-base outline-none rounded-full border border-[#AEB1C7]"
            />

            <button
              type="button"
              className="bg-legna-500 w-auto px-8 h-[45px] gap-3 rounded-full flex justify-center items-center"
            >
              <Search color="#FFF" size={20} />
              <span className="text-white">Buscar</span>
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

            <button
              onClick={openModal}
              type="button"
              className="bg-legna-500 w-auto px-5 h-[45px] gap-3 rounded-full flex justify-center items-center"
            >
              <PenLine color="#FFF" size={16} />
              <span className="text-white bg-transparent">Cadastrar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxHeader;