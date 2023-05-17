import { Link, useLocation } from 'react-router-dom'
import cn from 'clsx'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/store'

const menu = [
  {
    text: 'Home',
    href: '/',
    icon: 'ti-home',
  },
  {
    text: 'About',
    href: '/about',
    icon: 'ti-user',
  },
  {
    text: 'Posting',
    href: '/posting',
    icon: 'ti-book',
  },
]

const Navbar = () => {
  const location = useLocation()
  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useAppDispatch()

  return (
    <header className="minibar">
      <div className="header">
        <div className="brand"></div>
      </div>
      <div className="content">
        <ul className="main-menu">
          {menu.map((data) => (
            <li
              key={data.text}
              className={cn(
                'menu-item',
                location.pathname === data.href && 'active'
              )}
            >
              <Link to={data.href} className="menu-link">
                <span className={cn('icon', data.icon)}></span>
                <span className="caption">{data.text}</span>
              </Link>
            </li>
          ))}
          {!user.isLogged ? (
            <li
              className={cn(
                'menu-item',
                location.pathname === '/login' && 'active'
              )}
            >
              <Link to="/login" className="menu-link">
                <span className="icon ti-shift-right"></span>
                <span className="caption">Login</span>
              </Link>
            </li>
          ) : (
            <li className="menu-item">
              <button
                className="menu-link"
                onClick={() => dispatch({ type: 'auth/logout' })}
              >
                <span className="icon ti-shift-left"></span>
                <span className="caption">Logout</span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
