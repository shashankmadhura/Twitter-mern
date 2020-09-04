import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "../Tweetbox/TweetBox";
import Post from "../Post/Post";
import axios from "../../api/axios";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, [posts]);

  const fetchPosts = async () => {
    const response = await axios.get("/v2/posts");
    response.data.reverse();
    setPosts(response.data);
  };

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      <FlipMove>
        {posts.map(
          ({
            displayName,
            userName,
            verified,
            text,
            likes,
            image,
            avatar,
            _id,
          }) => (
            <Post
              key={_id}
              displayName={displayName}
              userName={userName}
              verified={verified}
              text={text}
              likes={likes}
              image={image}
              avatar={avatar}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default Feed;
