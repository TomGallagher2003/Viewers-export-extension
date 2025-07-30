import OHIF from '@ohif/core';
export function getCurrentImageMetadata({cornerstoneViewportService, activeViewportId}) {
  const displaySets = cornerstoneViewportService.getViewportDisplaySets(activeViewportId);
  const displaySet = displaySets[0];

  const imageId = displaySet.imageIds[0];

  const instance = OHIF.classes.MetadataProvider.get('instance', imageId);

  return {
    PatientName: instance?.PatientName || '',
    StudyDate: instance?.StudyDate || '',
  };
}
