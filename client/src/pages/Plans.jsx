const About = () => {
    return (
        <div className="flex flex-col items-center">
            <h3 className="heading text-center">Future Plans</h3>
            <div className="about">
                We built 'Remote Pathfinder' as our final project in our computer coding bootcamp course. We are commited to making sure it stays up and running bug free. If you notice any errors, bugs or features that you would like to see added dont hesitate to reach out to us by visiting our contact page!
            </div>
            <ul className="about">
                <li>A more robust job API</li>
                <li>Allow users to apply directly from our website</li>
                <li>Option for users to save jobs to profile</li>
                <li>Functionality to render a users Resume on screen</li>
                <li>SMS functionality for follow ups</li>
                <li>Add chat functionality so users and employers can communicate directly from website</li>
                <li>Employer profiles so users can learn about the company they are interested in</li>
                <li>A way for employers to directly add jobs to our website</li>
            </ul>
        </div>
    );
};

export default About;