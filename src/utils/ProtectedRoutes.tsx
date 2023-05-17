import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store'

const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.auth.user)
  if (!user.isLogged) {
    return <Navigate to={'/login'} replace />
  }
  return <>{children}</>
}

export default ProtectedRoute
