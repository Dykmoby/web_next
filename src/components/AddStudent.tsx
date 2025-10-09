'use client';

import { useForm, SubmitHandler } from "react-hook-form"
import styles from './AddStudent.module.scss';
import useStudents from '@/hooks/useStudents';
import Student from '@/components/Students/Student/Student'
import type StudentInterface from '@/types/StudentInterface';

const AddStudent = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentInterface>()

  const { addStudent } = useStudents();
  const onSubmit: SubmitHandler<StudentInterface> = (data) => addStudent(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.AddStudent}`}>
        <div>
            <span>First name: </span>
            <input {...register("firstName", { required: true })} />
            {errors.firstName && <span>    This field is required</span>}
        </div>

        <div>
            <span>Last name: </span>
            <input {...register("lastName", { required: true })} />
            {errors.lastName && <span>    This field is required</span>}
        </div>

        <div>
            <span>Middle name: </span>
            <input {...register("middleName", { required: true })} />
            {errors.middleName && <span>    This field is required</span>}
        </div>
        <input type="submit" />
    </form>
  )
}

export default AddStudent;