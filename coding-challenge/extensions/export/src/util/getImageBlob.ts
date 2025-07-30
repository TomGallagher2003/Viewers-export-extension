/**
 * Convert the viewport HTML element to a JPEG blob using fetch
 * @param element the active viewport HTML element
 */
export async function getImageBlob(element: HTMLDivElement): Promise<Blob | null> {

  // get the viewport's canvas element
  const canvas = element.querySelector('canvas');
  if (!canvas) return null;

  // get the image as a JPEG URL
  const dataUrl = (canvas as HTMLCanvasElement).toDataURL('image/jpeg');

  // convert the URL to a Blob
  const response = await fetch(dataUrl);
  return await response.blob();
}

