type Mods = Record<string, boolean | string>

export const classNames = (
  className: string,
  mods: Mods = {},
  others: string[] = []
): string => {
  return [
    className,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
    ...others.filter(Boolean)
  ].join(' ')
}
