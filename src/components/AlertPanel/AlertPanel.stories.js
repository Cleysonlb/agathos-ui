import React from "react";
import AlertPanel from "./AlertPanel";

export default {
  title: "Components/AlertPanel",
};

export const Colors = () => (
  <>
    <AlertPanel mode="success">Success</AlertPanel>

    <AlertPanel mode="warning">Warning</AlertPanel>

    <AlertPanel mode="danger">Danger</AlertPanel>
  </>
);
