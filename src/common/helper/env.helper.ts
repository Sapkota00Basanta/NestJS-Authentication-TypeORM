// Import Third-Party Modules
import { existsSync } from 'fs';
import { resolve } from 'path';

/**
 * This helper module is used to return absoulte path of environment file based on our NODE_ENV.
 * @param destination Path or destination prefix of our environment file location.
 */
export const getEnvironmentFilePath = (destination: string): string => {
  // Variable to set our server environment which can either be production or development
  const serverEnvironment: string | undefined = process.env.NODE_ENV;

  // Using resolve method to return the absolute path
  const environmentFileFallbackAbsolutePath: string = resolve(
    `${destination}/example.env`,
  );

  // Setting the environment fileName based on our server environment variable value
  const environmentFileName: string = serverEnvironment
    ? `${serverEnvironment}.env`
    : `development.env`;

  // Set the environment file folder path
  const environmentFilePath: string = resolve(
    `${destination}/${environmentFileName}`,
  );
  // Check if the enviornment file path exists & if not return the fall file path
  if (existsSync(environmentFilePath)) {
    return environmentFilePath;
  }
  return environmentFileFallbackAbsolutePath;
};
