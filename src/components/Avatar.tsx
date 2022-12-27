import styles from './Avatar.module.css';

interface Props
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  hasBorder?: boolean;
}

export const Avatar: React.FC<Props> = ({ hasBorder = true, ...props }) => (
  <img alt="" {...props} className={styles[hasBorder ? 'avatarWithBorder' : 'avatar']} />
);
