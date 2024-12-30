import React from "react";

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
  onClick?: () => void;
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
  ...rest
}: Props): JSX.Element {
  const primaryClasses = primary
    ? "font-bold outline outline-2 outline-primary-variant rounded-md"
    : "";
  const lightClasses = light
    ? "font-bold outline outline-2 outline-white rounded-md"
    : "";
  const secondaryClasses = secondary
    ? "font-bold outline outline-2 outline-secondary-variant rounded-md"
    : "";
  const filledPrimaryClasses =
    filled && primary
      ? "bg-primary-variant text-on-primary hover:bg-primary hover:outline-primary"
      : "";
  const outlinePrimaryClasses =
    outline && primary
      ? "bg-transparent text-primary-variant hover:bg-primary-variant hover:text-white"
      : "";
  const textPrimaryClasses =
    text && primary ? "outline-0 text-primary-variant" : "";
  const filledLightClasses =
    filled && light ? "bg-white text-primary-variant" : "";
  const outlineLightClasses =
    outline && light
      ? "bg-transparent text-white hover:bg-white hover:text-primary"
      : "";
  const textLightClasses = text && light ? "outline-0 text-white" : "";
  const filledSecondaryClasses =
    filled && secondary
      ? "bg-secondary-variant text-on-secondary hover:bg-secondary hover:outline-secondary"
      : "";
  const outlineSecondaryClasses =
    outline && secondary
      ? "bg-transparent text-secondary-variant hover:bg-secondary-variant hover:text-white"
      : "";
  const textSecondaryClasses =
    text && secondary ? "outline-0 text-secondary-variant" : "";
  const largeClasses = large ? "text-xl" : "";
  const smallClasses = small ? "text-xs rounded-sm font-thin" : "";
  const longClasses = long ? "h-10 w-full text-xl" : "";

  const buttonClasses = `fold-bold ${primaryClasses} ${lightClasses} ${secondaryClasses} ${filledPrimaryClasses} ${outlinePrimaryClasses} ${textPrimaryClasses} ${filledLightClasses} ${outlineLightClasses} ${textLightClasses} ${filledSecondaryClasses} ${outlineSecondaryClasses} ${textSecondaryClasses} ${largeClasses} ${smallClasses} ${longClasses} ${className}`;

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
}
