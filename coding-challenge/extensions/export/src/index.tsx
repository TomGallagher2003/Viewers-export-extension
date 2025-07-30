import { extId } from './id';
import getToolbarModule from './getToolbarModule';
import getCommandsModule from './getCommandsModule';

/**
 *  The required custom modules for the export extension
 */
export default {
  id: extId,
  getToolbarModule,
  getCommandsModule,
};
