export async function getImageBlob(element: HTMLDivElement): Promise<Blob | null> {
  const canvas = element.querySelector('canvas');
  if (!canvas) return null;

  // Get the image as a JPEG URL
  const dataUrl = (canvas as HTMLCanvasElement).toDataURL('image/jpeg');

  // convert the URL to a Blob
  const response = await fetch(dataUrl);
  return await response.blob();
}

