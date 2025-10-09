import { getStudentsDb, addStudentDb } from '@/db/studentDb';

export async function GET(): Promise<Response> {
  const students = await getStudentsDb();

  return new Response(JSON.stringify(students), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();
  const student = await addStudentDb(body);

  return new Response(JSON.stringify(student), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
