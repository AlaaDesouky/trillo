export const Review = ({ reviewData: { userName, userPhoto, userReview } }) => {

  return (
    <figure className="review">
      <blockquote className="review__text">
        {userReview.text}
      </blockquote>
      <figcaption className="review__user">
        <img src={`${userPhoto}`} className="review__user-photo" />
        <div className="review__user-box" >
          <p className="review__user-name">{userName}</p>
          <p className="review__user-date">{userReview.createdAt}</p>
        </div>
        <div className="review__rating">{userReview.rating}</div>
      </figcaption>
    </figure>
  )
}
