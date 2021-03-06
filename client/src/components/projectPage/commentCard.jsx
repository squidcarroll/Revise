import React, { Component } from 'react';
import UserAvatar from 'react-user-avatar';
// import { goToAnchor } from 'react-scrollable-anchor';

class RevComment extends Component {

  render() {
    const { owner, text, createdAt } = this.props.cmnt;
    return (
      <div className="revComments">
        <div className="commentUser"><UserAvatar size="40" src={owner.avatarUrl ? owner.avatarUrl : owner.defaultAvatar} name="Don Cheadle" /></div>
        <h4 className="commentDate">{owner.username} - <span style={{color: "grey", fontSize:"12px"}}>{new Date(createdAt).toString()}</span></h4>
        <p className="commentText">
        {text.split(/(\s+)/).map( (el, idx) => {
          if (el.match(/^#[a-f\d]{24}$/g))
            return <a key={idx} href={`${el}`}><span className="highlightedId">{el}</span></a>
          else
            return el
        })}
        </p>
      </div>
    )
  }
}

export default RevComment;
