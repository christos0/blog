import { useMediaQueries } from "app/hooks";

import { NavBarLg } from "./NavBarLg";
import { NavBarSm } from "./NavBarSm";
import { NavBarItem } from "./NavBarItem";
import { NavBarColorSwitch } from "./NavBarColorSwitch";

interface Props {
  websiteTitle: string;
  children: React.ReactNode;
}

export const NavBar = ({ websiteTitle, children }: Props) => {
  const { isXl } = useMediaQueries();

  if (isXl) return <NavBarLg websiteTitle={websiteTitle}>{children}</NavBarLg>;
  else return <NavBarSm websiteTitle={websiteTitle}>{children}</NavBarSm>;
};

NavBar.Item = NavBarItem;
NavBar.ColorSwitch = NavBarColorSwitch;
