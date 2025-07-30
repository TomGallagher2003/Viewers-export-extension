import { id } from './id';
import { extId } from '../../../extensions/export/src/id'
import toolbarButtons from './toolbarButtons';
import initToolGroups from './initToolGroups'

// Export mode will not be valid for non-image modalities
const NON_IMAGE_MODALITIES = ['ECG', 'SEG', 'RTSTRUCT', 'RTPLAN', 'PR'];

const ohif = {
  layout: '@ohif/extension-default.layoutTemplateModule.viewerLayout',
  sopClassHandler: '@ohif/extension-default.sopClassHandlerModule.stack',
  hangingProtocol: '@ohif/extension-default.hangingProtocolModule.default',
  leftPanel: '@ohif/extension-default.panelModule.seriesList',
  rightPanel: '@ohif/extension-cornerstone.panelModule.panelMeasurement',
};

const cornerstone = {
  viewport: '@ohif/extension-cornerstone.viewportModule.cornerstone',
};

/**
 * Skeleton dependencies, along with the export extension
 */
const extensionDependencies = {
  '@ohif/extension-default': '^3.0.0',
  '@ohif/extension-cornerstone': '^3.0.0',
  [extId]: '^0.0.1',
};

function modeFactory({ modeConfiguration }) {
  return {
    /**
     * Unique mode id
     */
    id,
    routeName: id,
    /**
     * Mode name, which is displayed in the viewer's UI in the workList, for the
     * user to select the mode.
     */
    displayName: 'Export Mode',
    /**
     * Runs when the Mode Route is mounted to the DOM. Used to initialize
     * Services and other resources.
     */
    onModeEnter: ({ extensionManager, servicesManager, commandsManager }) => {
      const { toolbarService, toolGroupService } = servicesManager.services;

      // initialise all tools
      initToolGroups(extensionManager, toolGroupService, commandsManager);


      // register all buttons in the toolbar
      toolbarService.register(toolbarButtons);


      // update the primary section with the registered buttons
      toolbarService.updateSection(
        toolbarService.sections.primary,
        toolbarButtons.map(b => b.id)
      );
    },
    /**
     * Used to clean up when leaving export mode
     * @param servicesManager
     */
    onModeExit: ({ servicesManager }) => {

      // deregister the buttons when leaving export mode
      servicesManager.services.toolbarService.deregister(
        toolbarButtons.map(b => b.id)
      );
    },
    validationTags: {
      study: [],
      series: [],
    },
    /**
     * Does not support non-image modalities
     * Supports the same modalities as the basic viewer
     */
    isValidMode: function ({ modalities }) {
      const modalities_list = modalities.split('\\');

      // Exclude non-image modalities
      return {
        valid: !!modalities_list.filter(modality => NON_IMAGE_MODALITIES.indexOf(modality) === -1)
          .length,
        description:
          'The mode does not support studies that ONLY include the following modalities: SM, ECG, SEG, RTSTRUCT',
      };
    },
    /**
     * Default routing behaviour from the skeleton
     */
    routes: [
      {
        path: id,
        layoutTemplate: ({ location, servicesManager }) => {
          return {
            id: ohif.layout,
            props: {
              leftPanels: [ohif.leftPanel],
              rightPanels: [ohif.rightPanel],
              viewports: [
                {
                  namespace: cornerstone.viewport,
                  displaySetsToDisplay: [ohif.sopClassHandler],
                },
              ],
            },
          };
        },
      },
    ],
    /** List of extensions that are used by the mode */
    extensions: extensionDependencies,
    /** SopClassHandlers used by the mode */
    sopClassHandlers: [ohif.sopClassHandler],
  };
}

const mode = {
  id,
  modeFactory,
  extensionDependencies,
};

export default mode;
