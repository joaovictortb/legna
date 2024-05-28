import Link from "next/link";

interface FooterButtonProps {
  href: string;
  label: string;
  variation: "variation1" | "variation2";
  className?: string;
  onClick?: any;
}

const FooterButton: React.FC<FooterButtonProps> = ({
  href,
  label,
  variation,
  className = "",
  onClick,
}) => {
  const baseClasses =
    "w-[207px] gap-3 justify-center font-medium text-lg items-center h-[50px] flex rounded-full";
  const variationClasses =
    variation === "variation1"
      ? "text-[#727488] border-2 border-[#727488]"
      : "bg-legna-500 text-white";

  return (
    <>
      <Link
        href={href}
        className={`${baseClasses} ${variationClasses} ${className}`}
        onClick={onClick}
      >
        {label}
      </Link>
    </>
  );
};

export default FooterButton;
