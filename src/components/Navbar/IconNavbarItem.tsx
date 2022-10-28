import useBaseUrl from "@docusaurus/useBaseUrl";
import DefaultNavbarItem from "@theme/NavbarItem/DefaultNavbarItem";
import * as React from "react";

interface IconNavbarItemProps {
  href: string;
  target: string;
  className?: string;
}

export default function IconNavbarItem(
  props: React.PropsWithChildren<IconNavbarItemProps>
) {
  const { href, target, children, className } = props;

  return (
    <a
      className={`navbar__item ${className}`}
      href={useBaseUrl(href)}
      target={target}
    >
      {children}
    </a>
  );
}
