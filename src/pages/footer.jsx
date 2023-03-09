import Link from "next/link"

export default function Footer({className}) {
    return (
        <footer className={className}> 
            <div className="top-footer">
                <div className="column column-1">
                    <Link href="/">
                        <img src="/logo.png" alt="" />
                    </Link>
                </div>
                <div className="column column-2">
                    <div className="footer-contact">
                        <a href="https://goo.gl/maps/PVTyp9jp5HyCN9d59" target="_blank">
                            <img src="/pin.svg" alt="" />
                            <p>Address of the headquarters Address</p>
                        </a>
                    </div>
                    <div className="footer-contact">
                        <a href="mailto:mail@mail.com">
                            <img src="/email-white.svg" alt="" />
                            <p>mail@mail.com</p>
                        </a>
                    </div>
                </div>
                <div className="column column-3">
                    <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                </div>
                <div className="column column-4">
                    <Link href="/tips">Tips</Link>
                    <Link href="/faq">F.A.Q</Link>
                </div>
                <div className="column column-5">
                    <p>Title of the articles from the tips secti...</p>
                    <p>Title of the articles from the tips secti...</p>
                    <p>Title of the articles from the tips secti...</p>
                </div>
            </div>
            <p className="bottom-footer">
                All Rights Reserved © <Link href="/terms">Terms and Conditions</Link> | <Link href="/privacy">Privacy Policy</Link>
            </p>
        </footer>
    );
}
