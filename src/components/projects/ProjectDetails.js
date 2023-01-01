import React from 'react'
import { useParams } from 'react-router-dom' /* updated for react-router v6 */

const ProjectDetails = (props) => {
    /* updated for react-router v6 */
    const { id } = useParams()
    return (
        <div className="container section project-details">
            <div className="card z-depth-1">
                <div className="card content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe, amet velit labore maxime eligendi sapiente voluptate beatae esse consequatur voluptatum odio quis, reprehenderit ab consequuntur hic molestias quia? Harum.</p>
                </div>
                <div className="card-action grey-lighten-4 grey-text">
                    <div>Posted by Jason Ferguson</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails