// Import User-Defined Modules
import { configurationValues } from 'src/config';

export const jwtConstants = {
  secret: `${configurationValues.jwtSecret}`,
};
