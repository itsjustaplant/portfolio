import type { ComponentPropsWithoutRef } from "react";

type Props = {
  className?: string;
  showIcon?: boolean;
  size?: "md" | "lg";
} & ComponentPropsWithoutRef<"a">;

const Link = (props: Props) => {
  const {
    showIcon = true,
    href,
    target = "_blank",
    className = "",
    size = "md",
  } = props;

  return (
    <a
      className={`text-primary text-${size} no-underline cursor-pointer hover:underline ${className}`}
      href={href}
      target={target}
    >
      {props.children}
      {showIcon && (
        <svg
          className="inline-block mb-1"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
        </svg>
      )}
    </a>
  );
};

export default Link;
