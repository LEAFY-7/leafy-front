import React, { HTMLAttributes, PropsWithChildren } from "react";
import Flex from "@components/atoms/Group/flex";

interface Props extends HTMLAttributes<HTMLElement> {}

const DiTemplate: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return <Flex direction="column"></Flex>;
};

export default DiTemplate;
