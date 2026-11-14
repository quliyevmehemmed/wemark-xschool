
const sitemap = [
    "Case Studies",
    "Services",
    "About",
    "Career",
    "Blog",
    "News",
    "Vacancies",
];

const socials = [
    { name: "Instagram", url: "https://www.instagram.com/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/" },
    { name: "YouTube", url: "https://www.youtube.com/" },
];

export default function Footer() {
    return (
        <footer className="site-footer" id="contact">
            <div className="footer-top">
                <div className="footer-column">
                    <h3>Sitemap</h3>
                    <div className="footer-links">
                        {sitemap.map((item) => (
                            <a key={item} href="#">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-column">
                    <h3>Follow Us On</h3>
                    <div className="footer-links">
                        {socials.map((item) => (
                            <a
                                key={item.name}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-column">
                    <h3>Office</h3>
                    <p>
                        Alibeyov Gardashlari 27,
                        <br />
                        Sabail, Sabah Residence
                    </p>
                </div>

                <div className="footer-column">
                    <h3>For Partnerships</h3>
                    <div className="footer-links">
                        <a href="mailto:partnership@wemark.az">
                            partnership@wemark.az
                        </a>
                        <a href="tel:+994515555555">
                            +994 51 555 55 55
                        </a>
                    </div>
                </div>

                <a href="#top" className="footer-back-top" aria-label="Back to top">
                    <svg
                        viewBox="0 0 48 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24 60V5M3 26L24 5L45 26"
                            stroke="currentColor"
                            strokeWidth="2.5"
                        />
                    </svg>
                </a>
            </div>

            <div className="footer-brand">
                wemark
            </div>

            <div className="footer-bottom">
                <div className="footer-legal">
                    <span>COPYRIGHT © 2024 WEMARK</span>
                    <a href="#">TERMS &amp; PRIVACY</a>
                </div>

                <div className="footer-language">
                    <span className="footer-globe">◎</span>
                    <span>AZƏRBAYCAN DİLİ</span>
                </div>
            </div>
        </footer>
    );
}
