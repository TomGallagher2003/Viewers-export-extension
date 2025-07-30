import { extId } from './id';
import getToolbarModule from './getToolbarModule';
import getCommandsModule from './getCommandsModule';

export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   * You ID can be anything you want, but it should be unique.
   */
  id: extId,
  /**
   * ToolbarModule provides a list of tool buttons that will be available in OHIF
   * for Modes to consume and use in the toolbar. Each tool button is defined by
   * {name, defaultComponent, clickHandler }.
   */
  getToolbarModule,
  /**
   * CommandsModule provides a list of commands that will be available in OHIF
   * for Modes to consume and use in the viewports. Each command is defined by
   * an object of { actions, definitions, defaultContext } where actions is an
   * object of functions, definitions is an object of available commands, their
   * options, and defaultContext is the default context for the command to run against.
   */
  getCommandsModule,
};
