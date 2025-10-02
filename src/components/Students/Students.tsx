'use client';

import useStudents from '@/hooks/useStudents';
import Student from '@/components/Students/Student/Student'
import type StudentInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';
import {deleteStudentApi} from '@/api/studentsApi';

const Students = (): React.ReactElement => {
  const { students, deleteStudentMutate } = useStudents();

  const deleteHandler = (id: number) => {
    deleteStudentMutate(id);
  }

  return (
    <div className={styles.Groups}>
      {students.map((student: StudentInterface) => (
        <h2 key={student.id}>
          <Student
            student={student}
            onDelete={deleteHandler}
          />
        </h2>
      ))}
    </div>
  );
};


export default Students;
