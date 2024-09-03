import { useRoutes } from 'react-router-dom'

import { AuthTabs, ForgotPassword } from './pages/auth'

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTabs />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    }
  ])

  return elements
}
