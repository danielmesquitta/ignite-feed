import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';

export const App: React.FC = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main></main>
      </div>
    </div>
  );
};
