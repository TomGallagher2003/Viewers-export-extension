import JSZip from 'jszip';

/**
 * Zip up the given jpeg with the given metadata (as JSON)
 * @param imageBlob The JPEG image blob to include in the zip
 * @param metadata  The metadata to include in the zipped JSON
 * @return the zip file blob
 */
export async function zipFiles(imageBlob: Blob, metadata: object): Promise<Blob> {
  const zip = new JSZip();

  zip.file('image.jpg', imageBlob, { binary: true });
  zip.file('metadata.json', JSON.stringify(metadata, null, 2));

  // return the zip blob when ready
  return await zip.generateAsync({ type: 'blob' });
}
