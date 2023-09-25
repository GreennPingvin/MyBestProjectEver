import { useTheme, Theme } from "app/providers/ThemeProvider";
import { ButtonHTMLAttributes } from "react";
import DarkIcon from "shared/assets/theme-dark.svg";
import LightIcon from "shared/assets/theme-light.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ThemeSwitcher = ({ className, ...props }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      {...props}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
