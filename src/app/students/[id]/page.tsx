import Student from '@/components/Students/Student';
import { META_DESCRIPTION, META_TITLE } from '@/constants/meta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Студенты - ${META_TITLE}`,
  description: META_DESCRIPTION,
};

const StudentPage = ({ params }: { params: { id: string } }): React.ReactNode => {
  const id = Number(params.id);

  return (
    <Student id={id} />
  );
};

export default StudentPage;
