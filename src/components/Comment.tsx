import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export const Comment: React.FC = () => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/danielmesquitta.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Daniel Mesquita</strong>

              <time title="11 de maio, às 08:13" dateTime="2022-05-11 08:13:30">
                Publicado há 2h
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir<span> 20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
