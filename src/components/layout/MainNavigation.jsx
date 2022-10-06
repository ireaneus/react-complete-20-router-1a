import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainNav = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>Great Bible Verses</div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/verses" activeClassName={styles.active}>
                All Verses
              </NavLink>
            </li>
            <li>
              <NavLink to="/addverse" activeClassName={styles.active}>
                Add a verse
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default MainNav;
