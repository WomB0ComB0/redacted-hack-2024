import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const convertBlobUrlToFile = async (blobUrl: string) => {
  const response = await fetch(blobUrl);
  const blob = await response.blob();
  const fileName = Math.random().toString(36).slice(2, 9);
  const mimeType = blob.type || "application/octet-stream";
  const file = new File([blob], `${fileName}.${mimeType.split("/")[1]}`, {
    type: mimeType,
  });
  return file;
}

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
}