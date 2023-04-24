// Import Third-Party Modules
import * as dotenv from 'dotenv';

/**
 * Environmemt File path based on our server environment.
 */
const envFilePath = `${process.cwd()}/src/common/env/development.env`;

// Assigning dotenv appropriate environment file
dotenv.config({ path: envFilePath, debug: false });

// Defining configuration for development based on environment values
export const configurationValues = {
  database: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  jwtSecret: process.env.JWT_SECRET,
};
