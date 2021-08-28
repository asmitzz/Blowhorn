import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: <span className="iconify" data-icon="tabler:file-certificate" style={{color: "white",fontSize:"1.5rem"}}></span>,
      name: "CERTIFICATIONS",
      content: "Each of our plan will you and your team with certifications.",
    },
    {
      icon: <span className="iconify" data-icon="ion:notifications-outline" style={{color: "white",fontSize:"1.5rem"}}></span>,
      name: "NOTIFICATIONS",
      content:
        "Send out notifications to all your customers to keep them engaged.",
    },
    {
      icon: <span className="iconify" data-icon="akar-icons:shipping-box-v1" style={{color: "white",fontSize:"1.5rem"}}></span>,
      name: "BUNDLES",
      content: "High quality bundles of awesome tools to help you out.",
    },
    {
      icon: <span className="iconify" data-icon="ic:baseline-developer-mode" style={{color: "white",fontSize:"1.5rem"}}></span>,
      name: "DEVELOPER TOOLKIT",
      content:
        "Developer tools to help grow your application and keep it up-to-date.",
    },
    {
      icon: <span className="iconify" data-icon="cil:library-building" style={{color: "white",fontSize:"1.5rem"}}></span>,
      name: "BUILDING BLOCKS",
      content:
        "The right kind of building blocks to take your company to the next level.",
    },
    {
      icon: <span className="iconify" data-icon="bx:bxs-coupon" style={{color: "white",fontSize:"1.5rem"}} data-rotate="180deg"></span>,
      name: "COUPONS",
      content:
        "Coupons system to provide special offers and discount for your app.",
    },
  ];

  return (
    <section className="features">
      <h2 className="heading">Our Features</h2>
      <p className="content">Check out our list of awesome features below.</p>
      <div className="card-container">
        {features.map((feat,i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon">{feat.icon}</div>
            <h4 className="feature-card-heading">{feat.name}</h4>
            <p className="feature-card-content">{feat.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
