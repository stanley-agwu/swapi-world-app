import Avatar from './Avatar';

import styles from './NameTag.module.scss';

interface INameTag {
  name: string;
}

const NameTag = ({ name }: INameTag) => {
  return (
    <div className={styles.nameTag}>
      <Avatar name={name} />
      <span className={styles.name}>{name}</span>
    </div>
  );
};

export default NameTag;
