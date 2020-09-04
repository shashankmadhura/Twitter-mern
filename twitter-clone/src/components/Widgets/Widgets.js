import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton,TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search'
import './Widgets.css'

function Widgets() {
    return (
        <div className="widgets">
            <div className="widget__input">
                <SearchIcon className="widget__searchIcon"/>
                <input type="text"></input>
            </div>
            <div className="widget__container">
                <h2>What's Happenning</h2>
                <TwitterTweetEmbed tweetId={"1293451250965635074"}/>
                <TwitterTweetEmbed tweetId={"1293561078350327813"}/>
                <TwitterTimelineEmbed sourceType="profile"  screenName="TechnicalGuruji" options={{ height: 400 }}/>
                <TwitterShareButton url={"https://facebook.com/cleverprogrammer"} options={{ text: "#reactjs is awesome", via: "cleverqazi" }}/>
            </div>
            
        </div>
    )
}

export default Widgets
