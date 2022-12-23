import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
};
