import mainLogo from '../../img/inco_large.svg'
import s from './Header.module.css'

const Header = () => {
    return ( 
        <header className={s.header}>
        <img src={mainLogo} alt="" />
      </header>
     );
}
 
export default Header;