import Link from "next/link";

interface ButtonFormProps {
  href?: string;
  label: string;
  variation: "variation1" | "variation2";
  className?: string;
  onClick?: any;
}

const ButtonForm: React.FC<ButtonFormProps> = ({
  href,
  label,
  variation,
  className = "",
  onClick,
}) => {
  const baseClasses =
    "w-full gap-3 justify-center font-medium text-base items-center h-auto flex rounded-full cursor-pointer";
  const variationClasses =
    variation === "variation1"
      ? "text-[#727488] border-2 border-[#727488]"
      : "bg-legna-500 text-white cursor-pointer";

  if (href) {
    return (
      <Link onClick={onClick} href={href}>
        <div
          className={`${baseClasses} ${variationClasses} ${className} cursor-pointer`}
        >
          {label}
        </div>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type="submit"
      className={`${baseClasses} ${variationClasses} ${className} cursor-pointer`}
    >
      {label}
    </button>
  );
};

export default ButtonForm;
