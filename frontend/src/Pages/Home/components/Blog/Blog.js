import "./Blog.css";

const Blog = () => {
  return (
    <section className="blog">
      <h1 className="heading">The Project Blog</h1>
      <p className="content">Designs and layouts to help with your app.</p>
      
      <div className="template-container-1">
        <div style={{background:"#E508C3",color:"#E508C3",borderRadius:"10px"}} className="template-1">
          <div className="img-container">
            <div className="badge">RESOURCES</div>
            <img width="100%" height="300px" src="https://machinecoding-nullbrains.netlify.app/assets/blog/1.jpg" alt=""/>
          </div>
          <div className="template1-content">
              <h1>Refreshing Designs</h1>
              <p>Quench satisfying designs to help you stir up emotion and tell a story.</p>
          </div>
        </div>

        <div style={{background:"#6E82FE",color:"#6E82FE",borderRadius:"10px",height:"104%",position:"relative",top:"-20px"}}  className="template-1">
          <div className="img-container">
            <div className="badge">LIFESTYLE</div>
            <img width="100%" height="300px" style={{borderRadius:"10px 10px 0 0"}} src="https://machinecoding-nullbrains.netlify.app/assets/blog/2.jpg" alt=""/>
          </div>
          <div className="template1-content">
            <h1>Healthier Lifestyle</h1>
            <p>Living a healthier lifestyle will help with your productivity and your mind-set.</p>
          </div>
        </div>

        <div style={{background:"#FBBF24",color:"#FBBF24",borderRadius:"10px"}} className="template-1">
          <div className="img-container">
            <div className="badge">ENTERTAINMENT</div>
            <img width="100%" height="300px" src="https://machinecoding-nullbrains.netlify.app/assets/blog/3.jpg" alt=""/>
          </div>
          <div className="template1-content">
            <h1>Gaming Evolution</h1>
            <p>Learn about the evolution of gaming and how it started a revolution.</p>
          </div>
        </div>
      </div>

      <div className="template-container-2">
        <div className="template-2">
          <div className="img-container">
            <div style={{color:"var(--secondary)",background:"#828DF8"}} className="badge">FOOD</div>
            <img width="100%" height="150px" src="https://machinecoding-nullbrains.netlify.app/assets/blog/4.jpg" alt=""/>
          </div>
          <div className="template2-content">
              <h5>Best Workstations of the Year</h5>
              <p>Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
          </div>
        </div>
        <div className="template-2">
          <div className="img-container">
            <div style={{color:"var(--secondary)",background:"#F87171"}} className="badge">INSPIRATION</div>
            <img width="100%" height="150px" src="https://machinecoding-nullbrains.netlify.app/assets/blog/5.jpg" alt=""/>
          </div>
          <div className="template2-content">
              <h5>Eating for productivity</h5>
              <p>Learn how to be more disciplined in your diet and how you can eat to maximize productivity.</p>
          </div>
        </div>
        <div className="template-2">
          <div className="img-container">
            <div style={{color:"var(--secondary)",background:"#8B5CF6"}} className="badge">RESOURCES</div>
            <img width="100%" height="150px" src="https://machinecoding-nullbrains.netlify.app/assets/blog/6.jpg" alt=""/>
          </div>
          <div className="template2-content">
              <h5>A Design Mind-set</h5>
              <p>What does it mean to have a design mind-set? Learn how to improve your eye for design.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
