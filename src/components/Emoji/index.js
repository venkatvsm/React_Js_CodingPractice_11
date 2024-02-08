import './index.css'

const MojiItems = props => {
  const {emojisEl, feedBackFunctionTrigger,key} = props
  const {name, imageUrl} = emojisEl
  const onChangeFunc = () => {
    feedBackFunctionTrigger()
  }
  return (
    <li>
      <button type="button" className="btnEl">
        <img
          src={imageUrl}
          className="image"
          alt=""
          onClick={onChangeFunc}
          alt={name}
        />
        {name}
      </button>
    </li>
  )
}
export default MojiItems
