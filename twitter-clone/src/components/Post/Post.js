import React, { useState, forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Post = forwardRef(
  ({ displayName, userName, verified, text, image, avatar, likes }, ref) => {
    const [liked, setLiked] = useState(false);
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar}></Avatar>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="postheader__special">
                  {verified && <VerifiedUserIcon className="post__badge" />}@
                  {userName}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {image === "" ? null : <img alt="post" src={image}></img>}

          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <div className="postFooter__like">
              {liked ? (
                <FavoriteIcon
                  fontSize="small"
                  onClick={() => setLiked(false)}
                />
              ) : (
                <FavoriteBorderIcon
                  fontSize="small"
                  onClick={() => setLiked(true)}
                />
              )}
              <span>{liked ? parseInt(likes) + 1 : parseInt(likes)}</span>
            </div>

            <ShareIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
