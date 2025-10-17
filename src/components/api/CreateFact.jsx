import { useState } from 'react'
import Layout from '../layout/Layout'

function CreateFact() {
    // déclaration de 2 variables d'état pour stocker les valeurs du formulaire
    // la variable d'état techno pour stocker la technologie, valeur initial vide
    const [techno, setTechno] = useState('')
    // la variable d'état fact pour stocker le fait, valeur initial vide
    const [fact, setFact] = useState('')

    // fonction pour soumettre le formulaire
    const handleSubmit = async (e) => {
        // on empêche le formulaire de se soumettre
        e.preventDefault()
        
        // on fetch les faits en utilisant l'url de l'api
        const response = await fetch('http://localhost:8000/api/facts', {
            // on utilise la méthode POST pour créer un nouveau fait
            method: 'POST',
            // on utilise le header Content-Type pour indiquer que les données sont en json-ld (API Platform)
            // les headers c'est les en-têtes de la requête
            headers: {
                'Content-Type': 'application/ld+json'
            },
            // on utilise le body pour envoyer les données du formulaire le body c'est les données qu'on envoie
            body: JSON.stringify({ techno, fact })
        })
         
        // on transforme la réponse en json
        const data = await response.json()
        
        // on vide le formulaire après la création
        setTechno('')
        setFact('')
    }

    return (
        <Layout>
            <section className="create-fact-container">
            <h2>Créer un nouveau fait</h2>
            
            {/* on affiche le formulaire qui a la fonction handleSubmit */}
            <form onSubmit={handleSubmit}>
                <div>
                    <select 
                        // on donne la valeur de la variable d'état techno à la variable value
                        value={techno} 
                        // on met à jour la variable d'état techno quand l'utilisateur choisit une technologie
                        onChange={(e) => setTechno(e.target.value)}
                        required
                    >
                        {/* on affiche les options de la variable d'état techno */}
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
                
                <button type="submit">Créer le fait</button>
            </form>
            </section>
        </Layout>
    )
}

export default CreateFact

