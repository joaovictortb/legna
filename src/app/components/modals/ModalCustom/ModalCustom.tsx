import { X } from "lucide-react";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  label: string;
  className?: string;
  variation: "variation1" | "variation2" | "variation3";
  children?: React.ReactNode;
  handleSubmit?: any;
}

const ModalCustom: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  label,
  className,
  variation,
  children,
  handleSubmit,
}) => {
  if (!isOpen) return null;

  const Variation1 = () => (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex mt-28 justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-[#000] opacity-70"></div>
        </div>
        <div
          className={`relative transform overflow-hidden bg-white rounded-[40px] text-left shadow-xl w-full h-full items-center flex flex-col justify-center ${className}`}
        >
          <div>
            <div className="text-center">
              <h3 className="text-[40px] font-semibold text-[#272727]">
                {label}
              </h3>
            </div>
          </div>

          {children}

          <div className="mt-5 sm:mt-4 flex justify-center space-x-4">
            <button
              onClick={() => console.log("Excluir action")}
              className="px-4 py-2 w-[150px] h-[45px] text-legna-500 border-2 border-legna-500 hover:bg-legna-50 rounded-full text-sm font-medium bg-white cursor-pointer transition-transform duration-300 hover:scale-[102%]"
            >
              Excluir
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 w-[150px] h-[45px] text-white bg-legna-500 hover:bg-legna-600 rounded-full text-sm font-medium cursor-pointer transition-transform duration-300 hover:scale-[102%]"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Variation2 = () => (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex mt-28 justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-[#000] opacity-70"></div>
        </div>
        <div
          className={`relative transform overflow-hidden bg-white rounded-[40px] text-left shadow-xl w-full h-full ${className}`}
        >
          <div className="flex justify-between w-full mt-10 px-10">
            <h3 className="text-[40px] font-medium text-[#272727]">{label}</h3>

            <button
              className="text-[40px] font-semibold text-[#272727]"
              onClick={onClose}
            >
              <X size={30} />
            </button>
          </div>

          {children}
        </div>
      </div>
    </div>
  );

  const Variation3 = () => (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex mt-28 justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-[#000] opacity-70"></div>
        </div>
        <div
          className={`relative transform overflow-hidden bg-white rounded-[40px] text-left shadow-xl w-full h-full px-10 flex flex-col justify-center ${className}`}
        >
          <div>
            <div className="text-start">
              <h3 className="text-[40px] font-semibold text-[#272727]">
                {label}
              </h3>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );

  return variation === "variation1" ? (
    <Variation1 />
  ) : variation === "variation2" ? (
    <Variation2 />
  ) : (
    <Variation3 />
  );
};

export default ModalCustom;
