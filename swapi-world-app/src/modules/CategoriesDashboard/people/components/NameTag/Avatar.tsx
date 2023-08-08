import { getNameTagInitials } from '../../Utils/peopleUtils';

import styles from './NameTag.module.scss';

interface IAvatar {
  name: string;
}

const Avatar = ({ name }: IAvatar) => {
  return (
    <div className={styles.avatar}>
      <span className={styles.initials}>{getNameTagInitials(name)}</span>
    </div>
  );
};

export default Avatar;
