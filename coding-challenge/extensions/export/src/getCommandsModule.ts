export default function getCommandsModule() {
  return {
    definitions: {
      triggerExport: {
        commandFn: ({ servicesManager }) => {
          // TODO
          console.log('Export command invoked');
        },
        options: {},
        context: 'CORNERSTONE',
      },
    },
    defaultContext: 'CORNERSTONE',
    actions: {},
  };
}
