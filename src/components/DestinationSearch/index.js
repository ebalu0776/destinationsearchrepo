const DestinationSearch = props => {
  const {destinationList} = props
  const {name, imgUrl} = destinationList

  return (
    <li className="bg-container">
      <div className="card-container">
        <img src={imgUrl} alt={name} />
        <div>
          <p className="paragraph">{name}</p>
        </div>
      </div>
    </li>
  )
}
export default DestinationSearch
