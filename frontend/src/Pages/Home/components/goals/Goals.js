import "./Goals.css";
import Boost from "../../../../assets/boost.png";
import Task from "../../../../assets/task.png";

const Goals = () => {
    return (
        <div className="goals">
            <div className="content">
                <img alt="productivity" loading="lazy" width="100%" height="auto" src={Boost}/>
                <div>
                    <h2 className="heading">Boost Productivity</h2>
                    <p className="detail">Build an atmosphere that creates productivity in your organization and your company culture.</p>
                    <ul>
                        <li><div className="list-icon"></div>Maximize productivity and growth</li>
                        <li><div className="list-icon"></div>Speed past your competition</li>
                        <li><div className="list-icon"></div>Learn the top techniques</li>
                    </ul>
                </div>
            </div>

            <div className="content tasks">
                <div>
                    <h2 className="heading">Automated Tasks</h2>
                    <p className="detail">Save time and money with our revolutionary services. We are the leaders in the industry.</p>
                    <ul>
                        <li><div className="list-icon"></div>Automated task management workflow</li>
                        <li><div className="list-icon"></div>Detailed analytics for your data</li>
                        <li><div className="list-icon"></div>Some awesome integrations</li>
                    </ul>
                </div>
                <img alt="tasks" width="100%" height="auto" loading="lazy" src={Task}/>
            </div>
        </div>
    )
}

export default Goals
