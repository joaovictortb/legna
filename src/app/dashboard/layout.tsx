"use client";

import {
  ArrowBigDown,
  Hospital,
  ClipboardList,
  TestTube,
  UserCheck,
  FileText,
  HelpCircle,
  UserRound,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

const menuItems = [
  {
    name: "Administradores",
    icon: ArrowBigDown,
    path: "/dashboard",
  },
  { name: "Hospitais", icon: Hospital, path: "/dashboard/hospitais" },
  { name: "UTIs", icon: ClipboardList, path: "/dashboard/utis" },
  { name: "Testes", icon: TestTube, path: "/dashboard/testes" },
  { name: "Gestores", icon: UserCheck, path: "/dashboard/gestores" },
  {
    name: "Políticas de uso",
    icon: FileText,
    path: "/dashboard/politicas-de-uso",
  },
  { name: "FAQ", icon: HelpCircle, path: "/dashboard/faq" },
];

export default function LayoutDash({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/auth/login");
  };

  return (
    <div className="flex flex-col lg:flex-row w-full bg-white min-h-screen justify-between">
      <div className="w-full lg:max-w-[280px] flex flex-col items-center lg:items-center">
        <Image
          className="my-6"
          src={"/images/logo1.png"}
          width={178}
          height={38}
          alt={"logo"}
        />

        <ul className="gap-4 flex flex-col w-full px-4 lg:px-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex w-full rounded-full cursor-pointer ${
                pathname === item.path
                  ? "bg-[#575FF2] text-white"
                  : "text-[#AEB1C7] hover:bg-[#575FF2] hover:text-white"
              }`}
            >
              <Link
                href={item.path}
                className="flex items-center px-5 py-3 font-medium w-full"
              >
                <item.icon size={25} />
                <span className="text-base ml-2">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:pr-5 flex flex-col">
        <div className="w-full flex justify-end py-4 items-center gap-x-3 mt-8 lg:mt-3 px-4 lg:px-0">
          <Menu
            menuButton={
              <MenuButton className="pr-8 font-medium text-base flex items-center gap-2">
                <div className="rounded-full bg-[#575FF24D] w-9 h-9 flex justify-center items-center">
                  <UserRound color="#fff" size={20} />
                </div>
                Bem-vindo, João Victor
              </MenuButton>
            }
            transition
            menuClassName="bg-white shadow-lg rounded-lg mt-2"
            arrow
          >
            <MenuItem className="flex items-center gap-2 hover:bg-gray-100">
              <Settings size={20} />
              Configurações
            </MenuItem>
            <MenuItem
              className="flex items-center gap-2 text-red-600 hover:bg-gray-100"
              onClick={handleLogout}
            >
              <LogOut className="stroke-red-600" size={20} />
              Sair
            </MenuItem>
          </Menu>
        </div>
        <div className="bg-[#D38BFA]/20 mb-20 p-4 mt-2 rounded-[25px] border-[rgba(87, 95, 242, 0.15)] border-[1px] mx-4 lg:mx-0">
          {children}
        </div>
      </div>
    </div>
  );
}
