"use client";

import useStudents from '@/hooks/useStudents';
import type StudentInterface from '@/types/StudentInterface';

const useStudent = (studentId: number | string): { student?: StudentInterface } => {
  const { students } = useStudents();

  const idNum = typeof studentId === 'string' ? Number(studentId) : studentId;

  const student = students.find((s) => s.id === idNum);

  return { student };
};

export default useStudent;
