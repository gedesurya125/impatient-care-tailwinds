"use client";
import React from "react";
import { cn } from "./theme/utils";
import { BUTTON_VARIANT } from "constants/buttonVariant";

export const SideBarButton = ({
  children,
  className,
  variant = BUTTON_VARIANT.success,
  ...props
}) => {
  const variants = {
    [BUTTON_VARIANT.danger]: "[&>*]:text-red-700 border-red-700",
    [BUTTON_VARIANT.success]: "[&>*]:text-primary border-primary",
  };

  return (
    <button
      className={cn(
        `w-full p-3  border-2 rounded-md  border-primary ${variants[variant]} ${className}`
      )}
      {...props}
    >
      {children}
    </button>
  );
};
