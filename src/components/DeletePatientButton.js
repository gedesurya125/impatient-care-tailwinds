"use client";
import React from "react";
import { Trash } from "./svgs";
import { BUTTON_VARIANT } from "constants/buttonVariant";
import { SideBarButton } from "./SideBarButton";

export function DeletePatientButton() {
  return (
    <SideBarButton variant={BUTTON_VARIANT.danger}>
      <Trash />
    </SideBarButton>
  );
}
