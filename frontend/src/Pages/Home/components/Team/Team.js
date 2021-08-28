import "./Team.css";

const Team = () => {
    const team = [
        {
            pic:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            name:"Freddy Smith",
            title:"CEO and Founder"
        },
        {
            pic:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name:"Carl Jones",
            title:"CTO and CO-Founder"
        },
        {
            pic:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
            name:"Susan Teterson",
            title:"Marketing Directory"
        },
        {
            pic:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
            name:"Tommy Barnes",
            title:"Designer"
        },
        {
            pic:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
            name:"Ron Jenson",
            title:"Senior Developer"
        },
        {
            pic:"https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
            name:"Pete Tompkins",
            title:"Web Developer"
        },
        {
            pic:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name:"Kelly Richards",
            title:"Sales Manager"
        },
        {
            pic:"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
            name:"Alexis Jordon",
            title:"Affiliate Manager"
        }
    ]

    const getBg = (i) => {
        let getNum = i % 3
        if(getNum === 1) return "#EFF6FF"
        if(getNum === 0) return "#FDF2F8"
        if(getNum === 2) return "#ECFDF5"
    }
    
    return (
        <section className="team">
            <span className="title">OUR TEAM</span>
            <h1 className="heading">An increadible team of<br/> amazing individuals</h1>
            <div className="avatar-container">
                {
                    team.map((mem,i) => (
                        <div className="avatar" key={i}>
                            <div style={{background:getBg(i + 1)}} className="img-container">
                                <img className="avatar-img" width="100%" height="100%" alt="avatar" src={mem.pic}/>
                            </div>
                            <div className="avatar-name">{mem.name}</div>
                            <span className="avatar-title">{mem.title}</span>
                            <div className="icon-container">
                              <a href={"/"}>
                              <span className="iconify" data-icon="akar-icons:twitter-fill" style={{color: "#ccc"}}></span>
                              </a>
                              <a href={"/"}>
                              <span className="iconify" data-icon="akar-icons:github-fill" style={{color: "#ccc"}}></span>
                              </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Team;
