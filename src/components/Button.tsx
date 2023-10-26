import React from "react";
import classNames from "classnames";

interface Props {
  children: any;
  primary?: boolean;
  light?: boolean;
  secondary?: boolean;
  filled?: boolean;
  outline?: boolean;
  text?: boolean;
  small?: boolean;
  large?: boolean;
  long?: boolean;
  className?: string;
}

export default function Button({
  children,
  primary,
  light,
  secondary,
  filled,
  outline,
  text,
  small,
  large,
  long,
  className,
}: Props): JSX.Element {
  const buttonClasses = classNames(
    "font-bold",
    {
      "font-bold outline outline-2 outline-primary-variant rounded-md": primary,
      "font-bold outline outline-2 outline-white rounded-md": light,
      "font-bold outline outline-2 outline-secondary-variant rounded-md":
        secondary,
      "bg-primary-variant text-on-primary hover:bg-primary hover:outline-primary":
        filled && primary,
      "bg-transparent text-primary-variant hover:bg-primary-variant hover:text-white":
        outline && primary,
      "outline-0 text-primary-variant": text && primary,
      "bg-white text-primary-variant": filled && light,
      "bg-transparent text-white hover:bg-white hover:text-primary":
        outline && light,
      "outline-0 text-white": text && light,
      "bg-secondary-variant text-on-secondary hover:bg-secondary hover:outline-secondary":
        filled && secondary,
      "bg-transparent text-secondary-variant hover:bg-secondary-variant hover:text-white":
        outline && secondary,
      "outline-0 text-secondary-variant": text && secondary,
      "text-xl": large,
      "text-xs rounded-sm font-thin": small,
      "h-10 w-full text-xl": long,
    },
    className
  );

  return <button className={buttonClasses}>{children}</button>;
}
