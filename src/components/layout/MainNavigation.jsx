import Layout from './Layout'
import styles from './MainNavigation.module.css'

const MainNav = () => {
  return <div>
    <header className={styles.header} >
      <h2>Great Bible Verses</h2>
      <nav className={styles.nav} >
      <ul>
        <li>All Verses</li>
        <li>Add a verse</li>
      </ul>
    </nav>
    </header>
    <Layout />
  </div>
}
export default MainNav