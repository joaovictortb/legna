import Image from "next/image";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className="w-full h-screen flex justify-between items-center bg-[#FDFBFF]">
        <div className="w-full h-full relative z-10 flex justify-end items-center overflow-hidden rounded-tr-[2em] rounded-br-[5em]">
          <div className="absolute left-0 top-0 h-full w-full">
            <Image
              className="object-cover object-left"
              fill
              src="/images/backgroundAuth.jpg"
              alt="backgroundAuth"
              quality={100}
              priority
            />
          </div>

          <div className="absolute left-0 top-0 h-full w-[620px]">
            <Image
              className="object-cover absolute"
              fill
              src="/images/backgroundMascara.png"
              alt="backgroundAuth"
              quality={100}
              priority
            />
          </div>
          <Image
            className="object-contain z-10 mr-[85px]"
            src="/images/logo.png"
            width={723}
            height={155}
            alt="Logo"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  );
}
