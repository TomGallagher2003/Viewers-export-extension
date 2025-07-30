/**
 * Get the HTML element for the viewport with the given id
 * @param cornerstoneViewportService
 * @param activeViewportId the id used to identify the active viewport
 * @return the active viewport HTML element
 */
export function getActiveViewportElement({cornerstoneViewportService, activeViewportId}) {

  const viewportInfo = cornerstoneViewportService.getViewportInfo(activeViewportId);
  return viewportInfo.getElement();

}
