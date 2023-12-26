import React from "react";
import { createPortal } from "react-dom";
import { cn } from "./theme/utils/cn";
import { ResponsiveGrid } from "./theme";

export const Overlay = ({
  children,
  id,
  as: Component = "div",
  backdropAs: BackdropComponent = "div",
  backdropClassName = "",
  handleClose,
  className = "",
  backdropProps,
  ...props
}) => {
  return createPortal(
    <BackdropComponent
      onClick={(e) => {
        handleClose && handleClose(e);
      }}
      id={id}
      className={cn(
        `fixed w-full h-full top-0 left-0 bg-black/20`,
        backdropClassName
      )}
      {...backdropProps}
    >
      <Component
        className={cn(`overlay-content-wrapper  bg-white`, className)}
        onClick={(e) => {
          e.stopPropagation();
        }}
        {...props}
      >
        {children}
      </Component>
    </BackdropComponent>,
    document.body
  );
};
