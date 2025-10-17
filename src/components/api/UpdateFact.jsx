import { useState } from 'react'
import Layout from '../Layout'

function UpdateFact() {
    // variables d'état pour stocker l'ID, la techno et le fait
    const [factId, setFactId] = useState('')
    const [techno, setTechno] = useState('')
    const [fact, setFact] = useState('')
    const [isLoaded, setIsLoaded] = useState(false) // pour savoir si on a chargé un fait

    // fonction pour charger le fait existant
    const loadFact = async () => {
        // on fetch le fait en utilisant l'ID
        const response = await fetch(`http://localhost:8000/api/facts/${factId}`)
        const data = await response.json()
        
        // on pre remplit le formulaire avec les données du fait
        setTechno(data.techno)
        setFact(data.fact)
        setIsLoaded(true) 
    }

    // fonction pour modifier le fait
    const handleUpdate = async (e) => {
        // on empêche le formulaire de se soumettre
        e.preventDefault()
        
        // on fetch le fait avec la méthode PUT pour le modifier
        const response = await fetch(`http://localhost:8000/api/facts/${factId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/ld+json'
            },
            body: JSON.stringify({ techno, fact })
        })
        
        const data = await response.json()
  
        // on vide le formulaire après modification et on cache le formulaire en mettant false à isLoaded
        setFactId('')
        setTechno('')
        setFact('')
        setIsLoaded(false) 
    }

    return (
        <Layout>
            <section className="update-fact-container">
            <h2>Modifier un fait</h2>
            
            {/* input pour entrer l'ID du fait à modifier */}
            <div className="load-fact-section">
                <input 
                    type="number" 
                    // on donne la valeur de la variable d'état factId à la variable value
                    value={factId}
                    // on met à jour la variable d'état factId quand l'utilisateur tape dans l'input
                    onChange={(e) => setFactId(e.target.value)}
                    placeholder="ID du fait à modifier"
                />
                <button onClick={loadFact}>Charger</button>
            </div>

            {/* formulaire de modification (donc si isLoaded est true, on affiche uniquement le formulaire) 
            sinon on l'affiche pas*/}
            {isLoaded && (
                // on affiche le formulaire de modification avec la fonction handleUpdate
                <form onSubmit={handleUpdate}>
                    <div>
                        <select 
                            // on donne la valeur de la variable d'état techno à la variable value
                            value={techno} 
                            // on met à jour la variable d'état techno quand l'utilisateur choisit une technologie
                            onChange={(e) => setTechno(e.target.value)}
                            required
                        >
                            <option value="">Choisir une technologie...</option>
                            <option value="Histoire">Histoire</option>
                            <option value="Hardware">Hardware</option>
                            <option value="Software">Software</option>
                            <option value="React">React</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Python">Python</option>
                            <option value="PHP">PHP</option>
                            <option value="Base de données">Base de données</option>
                            <option value="Réseau">Réseau</option>
                            <option value="Sécurité">Sécurité</option>
                        </select>
                    </div>
                    
                    <div>
                        <textarea 
                            // on donne la valeur de la variable d'état fact à la variable value
                            value={fact} 
                            // on met à jour la variable d'état fact quand l'utilisateur tape dans le textarea
                            onChange={(e) => setFact(e.target.value)}
                            placeholder="Description du fait"
                            rows="4"
                            required
                        />
                    </div>
                    
                    <button type="submit">Modifier le fait</button>
                </form>
            )}
            </section>
        </Layout>
    )
}

export default UpdateFact

