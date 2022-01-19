import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {UserContext} from '../../UserContext'
import {ReactComponent as MinhasFotos} from  '../../Assets/feed.svg'
import {ReactComponent as Estatisticas} from  '../../Assets/estatisticas.svg'
import {ReactComponent as AddFoto} from  '../../Assets/adicionar.svg'
import {ReactComponent as Sair} from  '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../hooks/useMedia'

const UserHeaderNav = () => {
  const {pathname} = useLocation()
  const {userLogout} = React.useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)
  console.log(mobile)
  React.useEffect(()=>{
    setMobileMenu(false)
  },[pathname])
  return (
    <>
    {mobile && (
      <button 
        aria-label="Menu" 
        className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
        onClick={() => setMobileMenu(!mobileMenu)}>
      </button>
    )}
    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
      <NavLink to='/conta' end>
        <MinhasFotos/>{ mobile && 'Minhas fotos'}
      </NavLink>
      <NavLink to='/conta/estatisticas'>
        <Estatisticas/>{mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to='/conta/postar'>
        <AddFoto/>{mobile && 'Adicionar foto'}
      </NavLink>
      <button onClick={userLogout}>
        <Sair/>{mobile && 'Sair'}
      </button>
    </nav>
    </>
  )
}

export default UserHeaderNav
