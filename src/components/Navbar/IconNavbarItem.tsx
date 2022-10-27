import useBaseUrl from "@docusaurus/useBaseUrl";
import DefaultNavbarItem from "@theme/NavbarItem/DefaultNavbarItem";
import * as React from "react";

interface IconNavbarItemProps {
  alt: string;
  href: string;
  src: string;
  target: string;
}

export default function IconNavbarItem(props: IconNavbarItemProps) {
  const { alt, href, src, target } = props;

  return (
    <a className={"navbar__item"} href={useBaseUrl(href)} target={target}>
      <img src={useBaseUrl(src)} alt={alt} />
    </a>
  );
}
