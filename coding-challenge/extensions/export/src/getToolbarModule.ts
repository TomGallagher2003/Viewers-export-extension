import ExportButton from './components/ExportButton';

/**
 * Get all new buttons required for the export extension
 * @param commandsManager
 */
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
