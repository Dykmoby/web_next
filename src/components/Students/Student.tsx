"use client";

import React from 'react';
import useStudent from '@/hooks/useStudent';
import BackButton from '@/components/Common/BackButton';
import type StudentInterface from '@/types/StudentInterface';
import Page from '@/components/layout/Page/Page';

interface Props {
  id: number;
}

const Student = ({ id }: Props): React.ReactElement => {
  const { student } = useStudent(id);

  if (!student) {
    return (
      <Page>
        <BackButton />
        <h2>Студент не найден</h2>
      </Page>
    );
  }

  const fullName = `${student.lastName} ${student.firstName} ${student.middleName ?? ''}`.trim();

  return (
    <Page>
      <BackButton />
      <h1>Студент</h1>
      <div>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>ФИО:</strong> {fullName}</p>
        <p><strong>Группа:</strong> {student.groupId}</p>
        <p><strong>UUID:</strong> {student.uuid}</p>
      </div>
    </Page>
  );
};

export default Student;
