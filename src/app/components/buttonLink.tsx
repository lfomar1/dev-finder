import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
type ButtonProps = {
  href?: string;
  bgColor?: string;
  type: "button" | "submit";
  children?: React.ReactNode;
};
const ButtonLink = ({ href, bgColor, type, children }: ButtonProps) => {
  if (!href) {
    return (
      <Button colorScheme={bgColor} type={type}>
        {children}
      </Button>
    );
  }
  return (
    <Link href={href}>
      <Button colorScheme={bgColor} type={type}>
        {children}
      </Button>
    </Link>
  );
};

export default ButtonLink;
