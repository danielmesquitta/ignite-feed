import { Avatar } from './Avatar';
import { Comment, CommentProps } from './Comment';
import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  ChangeEvent,
  FC,
  FormEvent,
  InvalidEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';

export interface PostProps {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Array<{
    type: 'paragraph' | 'link';
    content: string;
  }>;
  publishedAt: Date;
}

export const Post: FC<PostProps> = ({ author, content, publishedAt }) => {
  const submitCommentButtonRef = useRef<HTMLButtonElement>(null);

  const [comments, setComments] = useState<CommentProps[]>([]);

  const [textareaValue, setTextareaValue] = useState('');

  const formattedPublishedAt = useMemo(
    () => format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR }),
    [publishedAt],
  );

  const publishedDateRelativeToNow = useMemo(
    () => formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true }),
    [publishedAt],
  );

  const deleteComment = useCallback((id: number) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== id),
    );
  }, []);

  const handleCreateNewComment = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!textareaValue) {
        return;
      }

      setComments((prevComments) => {
        const id = prevComments.length + 1;

        return [
          {
            id,
            author: {
              avatarUrl: 'https://github.com/danielmesquitta.png',
              name: 'Daniel Mesquita',
            },
            content: textareaValue,
            publishedAt: new Date(),
            onDeleteComment: () => deleteComment(id),
          },

          ...prevComments,
        ];
      });

      setTextareaValue('');

      submitCommentButtonRef.current?.blur();
    },
    [textareaValue],
  );

  const handleInvalidComment = useCallback(
    (e: InvalidEvent<HTMLTextAreaElement>) => {
      e.target.setCustomValidity('Esse campo é obrigatório');
    },
    [],
  );

  const handleCommentChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      e.target.setCustomValidity('');

      setTextareaValue(e.target.value);
    },
    [],
  );

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={formattedPublishedAt} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(({ type, content }) => {
          switch (type) {
            case 'link':
              return (
                <p key={content}>
                  <a href={content} target="_blank">
                    {content}
                  </a>
                </p>
              );
            default:
              return <p key={content}>{content}</p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={textareaValue}
          onChange={handleCommentChange}
          onInvalid={handleInvalidComment}
          required
        />

        <footer>
          <button
            disabled={!textareaValue}
            ref={submitCommentButtonRef}
            type="submit"
          >
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </article>
  );
};
