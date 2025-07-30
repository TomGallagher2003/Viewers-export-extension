import type { Button } from '@ohif/core/types';

export const setToolActiveToolbar = {
  commandName: 'setToolActiveToolbar',
  commandOptions: {
    toolGroupIds: ['default'],
  },
};

const toolbarButtons: Button[] = [
  {
    id: 'Pan',
    uiType: 'ohif.toolButton',
    props: {
      type: 'tool',
      icon: 'tool-move',
      label: 'Pan',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  {
    id: 'Zoom',
    uiType: 'ohif.toolButton',
    props: {
      type: 'tool',
      icon: 'tool-zoom',
      label: 'Zoom',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  {
    id: 'WindowLevel',
    uiType: 'ohif.toolButton',
    props: {
      icon: 'tool-window-level',
      label: 'Window Level',
      tooltip: 'Adjust window/level',
      commands: {
        commandName: 'setToolActiveToolbar',
        commandOptions: {
          toolGroupIds: ['default'],
        },
      },
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  {
    id: 'Export',
    uiType: 'ohif.toolButton',
    props: {
      type: 'tool',
      icon:  'Download',
      label: 'Export',
      commands: 'triggerExport',
    },
  },
];

export default toolbarButtons;


