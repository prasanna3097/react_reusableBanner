// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {BannerCardsList} = props
  const {headerText, description, className} = BannerCardsList
  return (
    <li className={`${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p>{description}</p>
        <button className="button-style" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
