import JSZip from 'jszip';

export async function zipFiles(imageBlob: Blob, metadata: object): Promise<Blob> {
  const zip = new JSZip();
  zip.file('image.jpg', imageBlob, { binary: true });
  zip.file('metadata.json', JSON.stringify(metadata, null, 2));
  return await zip.generateAsync({ type: 'blob' });
}
