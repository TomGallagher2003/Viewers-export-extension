import ExportButton from './components/ExportButton';

export default function getToolbarModule({ commandsManager }) {
  return [
    {
      name: 'ohif.export',
      defaultComponent: ExportButton,
      clickHandler: () => {
        commandsManager.runCommand('triggerExport');
      },
    },
  ];
}
