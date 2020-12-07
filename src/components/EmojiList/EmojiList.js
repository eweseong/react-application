import React from 'react';
import './EmojiList.css';

export default class EmojiList extends React.Component {
  state = {
    emojiList: [
      {
        id: 1,
        emoji: '😁',
      },
      {
        id: 2,
        emoji: '😘',
      },
      {
        id: 3,
        emoji: '🤪',
      },
      {
        id: 4,
        emoji: '🤗',
      },
    ],
  };

  deleteEmoji(emojiId) {
    this.setState({
      emojiList: this.state.emojiList.filter((emoji) => emoji.id !== emojiId),
    });
  }

  render = () => (
    <div className="emoji-list">
      <h1>Rate these emojis!</h1>
      {this.state.emojiList.map((emoji, i) => (
        <li className="emoji-item">
          {emoji.emoji}
          <select>
            <option>Bad</option>
            <option>Okay</option>
            <option>Very good</option>
          </select>
          <button onClick={() => this.deleteEmoji(emoji.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}
