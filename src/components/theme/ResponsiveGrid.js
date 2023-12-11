import React from "react";

export const ResponsiveGrid = ({ children, className = "", ...props }) => {
  return (
    <div
      {...props}
      className={`${className} 
        grid
        grid-cols-12
        tabletPortrait:grid-cols-24
        tabletLandscape:grid-cols-24
        desktop:grid-cols-24
        gap-2
        w-container-phone 
        tabletPortrait:w-container-tablet-portrait 
        tabletLandscape:w-container-tablet-landscape 
        desktop:w-container-desktop 
        h-container-phone 
        mx-auto
    `}
    >
      {children}
    </div>
  );
};
