import { useRoutes } from 'react-router-dom'

import { AuthTabs, ForgotPassword, ResetPassword } from '@page/auth'
import Stream from '@page/social/stream/Stream'

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTabs />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    },
    {
      path: '/reset-password',
      element: <ResetPassword />
    },
    {
      path: '/app/stream',
      element: <Stream />
    }
  ])

  return elements
}
