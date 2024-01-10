import noTmage from '../assets/no-image-placeholder-6f3882e0.webp'
const getCroppedImageUrl = (url : string) => {

  if(!url) return noTmage
  const target = 'media/'
  const index = url.indexOf(target) + target.length
  return url.slice(0,index) + 'crop/600/400/' + url.slice(index)
  // return url.replace("media/", "media/crop/600/400/")
}

export default getCroppedImageUrl