/* eslint-disable import/no-anonymous-default-export */
import "./styles.scss";

import React from 'react';

import most_popular from "./images/most_popular.png";
import love_video from "./images/love_video.png";
import search_video from "./images/search_video.png";
import setting from "./images/setting.png";

export default () => {
  return <div className="home-wrapper">
    <div className="text-sesstion">
      <h4 className="title">Description</h4>
      <div className="content">
        <p>
          Enjoy surfing YouTube while using other apps or with lock screen.
          What this means is that you can listen to your music anywhere and anytime while driving, working out or studying.
          Simple design helps streaming music easier and supports the main function of music which is for users to enjoy and relax.
          Search function is connected to YouTube so that users can easily locate any wanted videos.
          In order to create a playlist, users can favorite any video simply by clicking on the heart next to each video on the dashboard.
          Skipping the hassle of downloading multiple music apps because listening to music cannot get any easier with just one!!
        </p>
        <p>
          It's designed for iOS only and requires version &gt;~ 14.0.
        </p>
      </div>
    </div>

    <div className="text-sesstion">
      <h4 className="title">How to use ?</h4>
      <div className="content">
        After opening, it shows the most popular videos on your region.
        You can pull the screen to reload and get latest video from Youtube.
        <img src={most_popular} alt="most popular videos" />

        You can bookmarks your loved videos by tapping on heart icon on each video.
        You can navigate to Favorite Videos tap to see those videos by selecting Heart icon on dock.
        <img src={love_video} alt="love videos" />

        You can search any videos by tapping on Search icon at top of the right screen.
        You also can tap on heart icon on each videos to bookmark them to your Favorite.
        <img src={search_video} alt="search videos" />

        On setting page, you can set how many number of searched video for each query to Youtube.
        <img src={setting} alt="Setting" />
      </div>
    </div>
  </div>
}
