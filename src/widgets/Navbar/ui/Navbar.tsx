import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import cls from './Navbar.module.scss'

interface NavBarProps {
  className?: string
}

export const Navbar = ({ className }: NavBarProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
          {t('Главная')}
        </AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
          {t('O сайте')}
        </AppLink>
      </div>
    </div>
  )
}
