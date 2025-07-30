import { exportAsZip } from './commands/exportCommand';

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
