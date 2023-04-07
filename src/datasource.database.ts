// Import Third-Party Modules
import { DataSource, DataSourceOptions } from 'typeorm';

/**
 * This is datasource options which is used by TypeORM to connect with database.
 */
export const mainDataSourceOptions: DataSourceOptions = {
  type: 'mssql',
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: Number(process.env.DATABASE_PORT) ?? 1433,
  username: process.env.DATABASE_USER ?? 'SA',
  password: process.env.DATABASE_PASSWORD ?? 'RootPass@123',
  database: process.env.DATABASE_NAME ?? 'nest_auth',
  //   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  entities: ['dist/**/entities/*.entity.{ts,js}'],
  migrations: ['dist/migration/**/*.{js,ts}'],
  subscribers: ['src/subscriber/**/*.{js,ts}'],
  options: {
    encrypt: false,
  },
};

const dataSource = new DataSource(mainDataSourceOptions);
export default dataSource;
