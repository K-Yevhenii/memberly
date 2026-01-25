import clsx from "clsx";
import "./Button.scss";

function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className,
  ...props
}) {
  return (
    <button
      type={type}
      className={clsx("btn", `btn--${variant}`, `btn--${size}`, className)}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
