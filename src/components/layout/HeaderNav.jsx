import { Link } from 'react-router-dom'

function HeaderNav() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/search">Rechercher</Link>
            <Link to="/create">Créer</Link>
            <Link to="/update">Modifier</Link>
            <Link to="/delete">Supprimer</Link>
        </nav>
    )
}

export default HeaderNav

