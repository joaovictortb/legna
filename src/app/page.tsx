import { kronaOne } from "@/fonts/fonts";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className={`text-4xl text-legna-500 ${kronaOne.className} my-8`}>
        Bem-vindo à Página Inicial
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Esta é a página de home do seu aplicativo.
      </p>
      <a href="/auth/login">
        <div className="bg-legna-500 text-white py-2 px-4 rounded-full shadow hover:bg-legna-600 transition">
          Ir para Login
        </div>
      </a>
    </div>
  );
}
