"use client";
import React from "react";
import { Overlay } from "./Overlay";
import { BurgerIcon } from "./svgs/BurgerIcon";
import clsx from "clsx";
import { navigationData } from "data/navigationData";
import Link from "next/link";
import { ResponsiveGrid } from "./theme";

export const MenuButton = () => {
  const [open, setOpen] = React.useState(false);

  const toggleOpenOverlay = () => setOpen((state) => !state);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        className="col-end-13 w-8 p-0 justify-self-end"
        onClick={toggleOpenOverlay}
      >
        <BurgerIcon className="text-secondary" />
      </button>
      {open && <NavigationOverlay handleClose={handleClose} />}
    </>
  );
};

const NavigationOverlay = ({ handleClose }) => {
  return (
    <Overlay
      id="nav-overlay"
      handleClose={handleClose}
      className="pt-28 bg-primary pb-24"
    >
      <ResponsiveGrid>
        <div className="col-start-1 col-end-13 flex flex-col">
          {navigationData?.links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="text-secondary font-body text-md [&:not(:first-of-type)]:mt-6"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </ResponsiveGrid>
    </Overlay>
  );
};
