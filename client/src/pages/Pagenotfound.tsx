import React from "react";
import { Appbar } from "../components/Appbar";
import PopupTest from "../components/PopupTest";

export const Pagenotfound: React.FC = () => {
  return (
    <div>
      <Appbar title="News" />
      <PopupTest />
    </div>
  );
};
