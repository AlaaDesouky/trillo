import { Review } from './Review'

export const UserReviews = () => {
  const reviewsData = [{
    userName: "Nick Smith",
    userPhoto: "./user-1.jpg",
    userReview: {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.",
      rating: "7.8",
      createdAt: "Feb 23rd, 2021"
    }
  },
  {
    userName: "Mary Thomas",
    userPhoto: "./user-2.jpg",
    userReview: {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.",
      rating: "9.3",
      createdAt: "Sept 13th, 2021"
    }
  }]

  return (
    <figure className="user-reviews">
      {reviewsData.map((e, index) => (<Review reviewData={e} key={index} />))}
      <button className="btn-inline">Show all <span>&rarr;</span></button>
    </figure>
  )
}
