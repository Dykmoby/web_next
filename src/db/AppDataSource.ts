import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Student } from './entity/Student.entity';
import { Group } from './entity/Group.entity';
import { User } from './entity/User.entity';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DB ?? './db/vki-web.db', // Path to your SQLite database file
  // synchronize: true, // Auto-create schema on startup (use with caution in production)
  synchronize: process.env.NODE_ENV !== 'production', // Отключаем в production
  migrationsRun: process.env.NODE_ENV === 'production', // Включаем миграции в production
  logging: false,
  entities: [Student, Group, User],
});

export const dbInit = async (): Promise<void> => {
  try {
    if (AppDataSource.isInitialized) {
      console.log('>>> AppDataSource.isInitialized');
      return;
    }
    await AppDataSource.initialize();
    console.log('>>> AppDataSource.initialize');
  }
  catch (error) {
    console.log(error);
  }
};


await dbInit();
export default AppDataSource;