const notFound: string = "https://kinogo.inc/uploads/mini/short/bb/1668606113_more-straha.webp"
export const fixImage = (url: string | undefined): string => {
  return url !== undefined ? url.replace(/zoom=1/i, 'zoom=6') : notFound
}