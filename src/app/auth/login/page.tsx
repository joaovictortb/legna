import FooterButton from "@/app/components/buttons/FooterButton/FooterButton";
import LoginForm from "@/app/components/Formularios/LoginForm/page";

export default async function LoginPage() {
  return (
    <>
      <div className="w-full md:max-w-md flex flex-col">
        <LoginForm />
      </div>
    </>
  );
}
