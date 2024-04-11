import { CSSProperties, ReactNode } from "react";

interface MyBtnProps {
  className?: string;
  children?: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void | null;
  style?: CSSProperties;
  disabled?: boolean;
}

const Button = ({
  className,
  children,
  type,
  onClick,
  style,
  disabled,
}: MyBtnProps) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      <h3>{children}</h3>
    </button>
  );
};

export default Button;
