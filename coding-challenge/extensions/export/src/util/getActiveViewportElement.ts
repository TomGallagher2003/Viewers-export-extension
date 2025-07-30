export function getActiveViewportElement({cornerstoneViewportService, activeViewportId}) {

  const viewportInfo = cornerstoneViewportService.getViewportInfo(activeViewportId);
  const element = viewportInfo.getElement();

  return element;
}
