import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "../../ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavBarProps {
  className?: string;
}

export const Navbar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>
          Main
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};