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
                    <h1>About Frontend Developer</h1>

                    <ul>
                        <li>
                            Frontend developers are responsible for creating the visual
                            elements of a website or web application that users interact with.
                            They use HTML, CSS, and JavaScript to build the layout, design,
                            and interactivity of the user interface.
                        </li>
                        <li>
                            Frontend developers ensure that web applications and sites are
                            responsive, meaning they adapt to different screen sizes and
                            devices
                        </li>
                        <li>
                            Frontend developers focus on optimizing the performance of web
                            applications by reducing page load times and minimizing resource
                            requests. They may employ techniques like code splitting, lazy
                            loading, and image optimization to achieve this.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default VideoAnimation;
