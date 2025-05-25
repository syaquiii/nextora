import React, { FC } from "react";
import { TNavLink } from "../type/Tnavlink";

interface NavListProps {
  props: TNavLink;
}

export const Navlist: FC<NavListProps> = ({ props }) => {
  return <li className="font-bold">{props.title}</li>;
};
