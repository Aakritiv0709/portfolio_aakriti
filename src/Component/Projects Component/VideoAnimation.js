import React from "react";
import VideoAnimationStyles from "../Projects Component/VideoAnimation.module.css";
import Video from "../../assets/Background.mp4"; // Provide the correct path to your video file

const VideoAnimation = () => {
    return (
        <div className="container">
            <div className={VideoAnimationStyles.parent}>
                <div className={VideoAnimationStyles.child1}>
                    <video
                        autoPlay
                        muted
                        loop
                        className={VideoAnimationStyles.background_container}
                    >
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>
                <div className={VideoAnimationStyles.child2}>
                    <h1>Why book our services?</h1>
                    <p>
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur quis
                        autem vel eum iure{" "}
                    </p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default VideoAnimation;
