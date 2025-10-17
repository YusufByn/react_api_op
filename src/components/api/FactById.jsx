import { useState } from 'react'
import Layout from '../Layout'

function FactById() {
    // déclaration d'une variable d'état pour stocker l'id recherché
    const [searchId, setSearchId] = useState('')
    // déclaration d'une variable d'état pour stocker le fait trouvé par son id
    const [selectedFact, setSelectedFact] = useState(null)

    // fonction pour récupérer un fait par son ID
    const fetchFactById = async () => {
        // on fetch le fait en utilisant l'url de l'api et l'id recherché
        const response = await fetch(`http://localhost:8000/api/facts/${searchId}`)
        // on transforme la réponse en json
        const data = await response.json()
        // on set le fait trouvé par son id dans la variable d'état
        setSelectedFact(data)
    }

    return (
        <Layout>
            <section className="fact-by-id-container">
            <h2>Rechercher un fait par ID</h2>
            
            <div>
                {/* on affiche le formulaire de recherche */}
                <input 
                    type="number" 
                    // on donne la valeur de l'input à la variable d'état searchId
                    value={searchId} 
                    // on met à jour la variable d'état searchId quand l'utilisateur tape dans l'input
                    onChange={(e) => setSearchId(e.target.value)}
                    placeholder="Entrez un ID"
                />
                {/* on affiche le bouton de recherche */}
                <button onClick={fetchFactById}>Rechercher</button>
            </div>

            {selectedFact && (
                <div>
                    <h3>Fait n°{selectedFact.id}</h3>
                    <p>Techno: {selectedFact.techno}</p>
                    <p>{selectedFact.fact}</p>
                </div>
            )}
            </section>
        </Layout>
    )
}

export default FactById

