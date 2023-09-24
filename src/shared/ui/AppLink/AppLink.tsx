import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = ({
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...props
}: AppLinkProps) => {
  return (
    <Link
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...props}
    >
      {children}
    </Link>
  );
};
