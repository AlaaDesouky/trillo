import { GalleryFigure } from './GalleryFigure'

export const Gallery = () => {
  return (
    <div className="gallery">
      <GalleryFigure src="hotel-1.jpg" alt="Photo of hotel 1" />
      <GalleryFigure src="hotel-2.jpg" alt="Photo of hotel 2" />
      <GalleryFigure src="hotel-3.jpg" alt="Photo of hotel 3" />
    </div>
  )
}
