// Write your React code here.
import {Component} from 'react'
import './index.css'

import MojiItems from '../Emoji'

class Feedback extends Component {
  state = {
    isTrue: false,
  }

  feedBackFunctionTrigger = () => {
    this.setState({isTrue: true})
  }

  render() {
    const {isTrue} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    console.log(emojis)
    console.log(loveEmojiUrl)
    return (
      <div className="bg_container">
        <div className="card_container">
          {!isTrue && (
            <>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="itemsContainer">
                {emojis.map(eachItem => (
                  <MojiItems
                    emojisEl={eachItem}
                    key={eachItem.id}
                    feedBackFunctionTrigger={this.feedBackFunctionTrigger}
                  />
                ))}
              </ul>
            </>
          )}
          {isTrue && (
            <>
              <img src={`${loveEmojiUrl}`} alt="love emoji" />

              <h1>Thank You</h1>
              <p>
                We will use your feedback to improve our customer support
                performance.
              </p>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
