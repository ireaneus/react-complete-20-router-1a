import { Fragment } from 'react';
import styles from './Layout.module.css';
import MainNav from './MainNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNav />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};
export default Layout;
