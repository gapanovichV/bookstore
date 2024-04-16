import notFound from '/src/shared/assets/img/notFound.png'
export const fixImage = (url: string | undefined): string => {
  console.log(url)
  return url !== undefined ? url.replace(/zoom=1/i, 'zoom=6') : notFound
}