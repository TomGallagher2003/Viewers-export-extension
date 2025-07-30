import { getImageBlob } from '../util/getImageBlob';
import { getCurrentImageMetadata } from '../util/getMetadata';
import { zipFiles } from '../util/zipFiles';
import { getActiveViewportElement } from '../util/getActiveViewportElement';
import { saveAs } from 'file-saver';

/**
 * Gets the current viewport from the services manager and exports a ZIP file containing
 * the viewport image as a jpeg and the associated metadata in JSON format
 * @param servicesManager
 */
export async function exportAsZip({ servicesManager }) {

  const { cornerstoneViewportService,viewportGridService } = servicesManager.services;

  // get the HTML element of the current viewport
  const { activeViewportId } = viewportGridService.getState();
  const element = getActiveViewportElement({cornerstoneViewportService, activeViewportId})

  // convert the current viewport HTML element to a jpeg blob
  const imageBlob = await getImageBlob(element);


  // get the metadata for the current viewport
  const metadata = getCurrentImageMetadata({cornerstoneViewportService, activeViewportId});

  // zip up the image and metadata
  const zipBlob = await zipFiles(imageBlob, metadata);

  // export the zip file
  saveAs(zipBlob, 'report.zip');
}

