import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1>Faits IT</h1>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/search">Rechercher</Link>
                    <Link to="/create">Créer</Link>
                    <Link to="/update">Modifier</Link>
                    <Link to="/delete">Supprimer</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header

