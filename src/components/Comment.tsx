import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useCallback, useMemo, useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export interface CommentProps {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
  };
  onDeleteComment: VoidFunction;
  content: string;
  publishedAt: Date;
}

export const Comment: React.FC<CommentProps> = ({
  author,
  publishedAt,
  content,
  onDeleteComment,
}) => {
  const [likeCount, setLikeCount] = useState(0);

  const formattedPublishedAt = useMemo(
    () => format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR }),
    [publishedAt],
  );

  const publishedDateRelativeToNow = useMemo(
    () => formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true }),
    [publishedAt],
  );

  const handleLike = useCallback(() => {
    setLikeCount((prevLikeCount) => prevLikeCount + 1);
  }, []);

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={author.avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>

              <time
                title={formattedPublishedAt}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button onClick={onDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLike}>
            <ThumbsUp />
            Aplaudir<span> {likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
