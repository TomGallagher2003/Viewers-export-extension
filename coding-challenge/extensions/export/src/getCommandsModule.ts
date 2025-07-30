import { exportAsZip } from './commands/exportCommand';

/**
 * Get all new commands required for the export extension
 * @param servicesManager
 */
export default function getCommandsModule({ servicesManager }) {
  return {
    definitions: {
      triggerExport: {
        commandFn: () => exportAsZip({ servicesManager }),
        options: {},
        context: 'CORNERSTONE',
      },
    },
    defaultContext: 'CORNERSTONE',
    actions: {},
  };
}
