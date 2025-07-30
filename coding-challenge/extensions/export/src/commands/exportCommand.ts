import { getImageBlob } from '../util/getImageBlob';
import { getCurrentImageMetadata } from '../util/getMetadata';
import { zipFiles } from '../util/zipFiles';
import { getActiveViewportElement } from '../util/getActiveViewportElement';
import { saveAs } from 'file-saver';

export async function exportAsZip({ servicesManager }) {

  const { cornerstoneViewportService,viewportGridService } = servicesManager.services;
  const { activeViewportId } = viewportGridService.getState();

  const element = getActiveViewportElement({cornerstoneViewportService, activeViewportId})

  const imageBlob = await getImageBlob(element);

  const metadata = getCurrentImageMetadata({cornerstoneViewportService, activeViewportId});

  const zipBlob = await zipFiles(imageBlob, metadata);
  saveAs(zipBlob, 'report.zip');
}

