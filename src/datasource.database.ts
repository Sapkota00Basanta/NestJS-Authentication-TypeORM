// Import Third-Party Modules
import { DataSource, DataSourceOptions } from 'typeorm';

/**
 * This is datasource options which is used by TypeORM to connect with database.
 */
export const mainDataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: Number(process.env.DATABASE_PORT) ?? 3306,
  username: process.env.DATABASE_USER ?? 'root',
  password: process.env.DATABASE_PASSWORD ?? 'rootpass',
  database: process.env.DATABASE_NAME ?? 'nest_auth',
  //   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  entities: ['dist/**/entities/*.entity.{ts,js}'],
  migrations: ['dist/migration/**/*.{js,ts}'],
  subscribers: ['src/subscriber/**/*.{js,ts}'],
};

const dataSource = new DataSource(mainDataSourceOptions);
export default dataSource;
