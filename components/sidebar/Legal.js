export const Legal = () => {
  let date = new Date();

  return (
    <div className="legal">
      <br />
      <p>&copy; {date.getFullYear()} by Trillo. All rights reserved.</p>
      <br />
      <p>Original Design by <a target="_blank" rel="noreferrer" className="legal__link" href="https://twitter.com/jonasschmedtman">Jonas</a></p>
      <p>Crafted by <a target="_blank" rel="noreferrer" className="legal__link" href="https://twitter.com/AlaaDesouky3">Desouky</a></p>
    </div>
  )
}
