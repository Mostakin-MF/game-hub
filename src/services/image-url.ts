/**
 * RAWG returns crop_url or sometimes no images
 * This helper provides a fallback placeholder
 */
export const getCroppedImageUrl = (url: string): string => {
  if (!url) return 'https://via.placeholder.com/280x360?text=No+Image';
  // Replace 'media/' with 'media/crop/600/400/' to get medium-sized crop
  return url.replace('media/', 'media/crop/600/400/');
};
