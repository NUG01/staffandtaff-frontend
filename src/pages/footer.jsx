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
                            <p>
                                Kornquaderweg 70, <br />
                                Rheinklingen, Switzerland, 8259
                            </p>
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
                    <Link href="/">Emplois</Link>
                <Link href="/about">À propos de nous</Link>
                </div>
                <div className="column column-4">
                    <Link href="/tips">Conseils</Link>
                    <Link href="/faq">F.A.Q</Link>
                </div>
                <div className="column column-5">
                    <p>Titre d'un article Conseils Titre d'un a...</p>
                    <p>Titre d'un article Conseils Titre d'un a...</p>
                    <p>Titre d'un article Conseils Titre d'un a...</p>
                </div>
            </div>
            <p className="bottom-footer">
            Tous Droits Réservés © <Link href="/terms">Termes et Conditions</Link> | <Link href="/privacy">Politique de Confidentialité</Link>
            </p>
        </footer>
    );
}
