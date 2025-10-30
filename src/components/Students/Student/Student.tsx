"use client";

import type StudentInterface from '@/types/StudentInterface';
import styles from './Student.module.scss';

interface Props {
  student: StudentInterface;
  onDelete: (id: number) => void;
  onGoToPage: (id: number) => void;
}

const Student = ({ student, onDelete, onGoToPage }: Props): React.ReactElement => {
  const onDeleteHandler = (): void => {
    onDelete(student.id);
  };

  const onGoToPageHandler = (): void => {
    onGoToPage(student.id);
  };

  const modifier = student.isDeleted ? '--isDeleted' : student.isNew ? '--isNew' : '';

  return (
    <div className={`${styles.Student} ${styles[modifier]}`}>
      {`${student.id || 'xxxx'} - ${student.lastName} ${student.firstName} ${student.middleName}`}
      <button onClick={onGoToPageHandler}>Открыть страничку</button>
      <button onClick={onDeleteHandler}>Удалить</button>
    </div>
  );
};

export default Student;
