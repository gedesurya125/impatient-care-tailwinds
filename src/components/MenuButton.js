"use client";
import React from "react";
import { Overlay } from "./Overlay";
import { BurgerIcon } from "./svgs/BurgerIcon";
import { navigationData } from "data/navigationData";
import Link from "next/link";
import { ResponsiveGrid } from "./theme";
import { AnimatePresence } from "framer-motion";
import { usePathChangeEffect } from "hooks/usePathChangeEffect";

export const MenuButton = () => {
  const [open, setOpen] = React.useState(false);

  const toggleOpenOverlay = () => setOpen((state) => !state);

  const handleClose = () => {
    setOpen(false);
  };

  usePathChangeEffect(handleClose);

  return (
    <>
      <button
        className="col-end-13 w-8 p-0 justify-self-end"
        onClick={toggleOpenOverlay}
      >
        <BurgerIcon className="text-secondary" />
      </button>
      <AnimatePresence>
        {open && <NavigationOverlay handleClose={handleClose} />}
      </AnimatePresence>
    </>
  );
};

const NavigationOverlay = ({ handleClose }) => {
  // TODO: replace the Overlay Components with the AnimatedOverlay Component
  return (
    <Overlay
      id="nav-overlay"
      handleClose={handleClose}
      className="bg-primary overflow-hidden"
      initial={{
        height: 0,
      }}
      animate={{
        height: "auto",
      }}
      exit={{
        height: 0,
      }}
      backdropProps={{
        initial: {
          backgroundColor: "rgba(0,0,0, 0)",
        },
        animate: {
          backgroundColor: "rgba(0,0,0, 0.2)",
        },
        exit: {
          backgroundColor: "rgba(0,0,0, 0)",
        },
      }}
    >
      <ResponsiveGrid>
        <div className="col-start-1 col-end-13 flex flex-col pt-28 pb-24">
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
