export const GalleryFigure = ({ src, alt }) => {
  return (
    <figure className="gallery__item">
      <img src={`./${src}`} alt={`${alt}`} className="gallery__photo" />
    </figure>
  )
}
