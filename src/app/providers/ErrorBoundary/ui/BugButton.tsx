import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

// component for testing ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false)
  const { t } = useTranslation()

  const onErrorThrown = () => {
    setError(true)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return <Button onClick={onErrorThrown}>{t('throw error')}</Button>
}
