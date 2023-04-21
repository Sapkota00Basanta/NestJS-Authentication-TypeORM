// Import Third-Party Modules
import * as typeorm from 'typeorm';

// Import User-Defined Modules
import { configurationValues } from './config';

/**
 * This is datasource options which is used by TypeORM to connect with database.
 */
export const mainDataSourceOptions: typeorm.DataSourceOptions = {
  type: 'mysql',
  host: configurationValues.database.host,
  port: Number(configurationValues.database.port),
  username: configurationValues.database.username,
  password: String(configurationValues.database.password),
  database: configurationValues.database.database,
  //   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  entities: ['dist/**/entities/*.entity.{ts,js}'],
  migrations: ['dist/migration/**/*.{js,ts}'],
  subscribers: ['src/subscriber/**/*.{js,ts}'],
};

const dataSource = new typeorm.DataSource(mainDataSourceOptions);
export default dataSource;
