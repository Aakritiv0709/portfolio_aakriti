import React from "react";
import RequirementStyles from "./Requirement.module.css"
const Requirement = () => {
    return (
        <div className="container">
            <div className={RequirementStyles.parent}>
                <div className={RequirementStyles.child1}>
                    <h1>Have different requirements for your project?</h1></div>
                <div className={RequirementStyles.child2}> <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                </p></div>
                <div className={RequirementStyles.child3}>
                    <button>Contact Me</button></div>
            </div>
        </div>
    );
};

export default Requirement;
