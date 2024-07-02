'use client';
import styles from './task-pill.module.scss';
import { inconsolata } from '../../fonts';

import FingerIcon from '../../assets/unfk-white-finger-small.svg';
import CheckIcon from '../../assets/checkmark.svg';
import LoadingIcon from '../loading-icon/loading-icon';

export default function TaskPill({
  completed,
  points,
  isLoading,
}: {
  completed: boolean;
  points: number;
  isLoading?: boolean;
}) {
  return completed ? (
    <div className={`${styles.container} ${styles.complete}`}>
      <div className={`${styles.container} ${styles.inner}`}>
        <FingerIcon className={styles.finger} />
        <div className={`${styles.points} ${inconsolata.className}`}>{points}</div>
      </div>
      <CheckIcon className={styles.check} />
    </div>
  ) : (
    <div className={`${styles.container} ${styles.incomplete} ${isLoading ? styles.disabled : ''}`}>
      {isLoading ? <LoadingIcon height={17} width={17} /> : <FingerIcon className={styles.finger} />}
      <div className={`${styles.points} ${inconsolata.className}`}>{points}</div>
    </div>
  );
}
