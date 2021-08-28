import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Team</a></li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Terms</a></li>
            </ul>
            <ul>
                <li><a href="/"><span className="iconify" data-icon="akar-icons:facebook-fill" style={{color: "#6A6A6A"}}></span></a></li>
                <li><a href="/"><span className="iconify" data-icon="akar-icons:instagram-fill" style={{color: "#6A6A6A"}}></span></a></li>
                <li><a href="/"><span className="iconify" data-icon="akar-icons:twitter-fill" style={{color: "#6A6A6A"}}></span></a></li>
                <li><a href="/"><span className="iconify" data-icon="akar-icons:github-fill" style={{color: "#6A6A6A"}}></span></a></li>
            </ul>
            <p className="footer-content">© 2021 nullBrains, Inc. All rights reserved</p>
        </footer>
    );
};

export default Footer;
