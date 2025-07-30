import OHIF from '@ohif/core';

/**
 * Gets the metadata (specifically the patient name and study date) for the active study
 * @param cornerstoneViewportService
 * @param activeViewportId
 * @return desired fields from the metadata
 */
export function getCurrentImageMetadata({cornerstoneViewportService, activeViewportId}) {

  // get the id of the first image shown in the current viewport
  const displaySets = cornerstoneViewportService.getViewportDisplaySets(activeViewportId);
  const displaySet = displaySets[0];
  const imageId = displaySet.imageIds[0];

  // use OHIF's metadata provider to get the metadata for the image id
  const instance = OHIF.classes.MetadataProvider.get('instance', imageId);

  // return only the fields we need
  return {
    PatientName: instance?.PatientName || '',
    StudyDate: instance?.StudyDate || '',
  };
}
