import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Parkocator</h1>
      <h4>You park, you bill... & chill!</h4>
    </header>
  )
}

export default Header;
