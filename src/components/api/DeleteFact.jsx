import { useState } from 'react'
import Layout from '../layout/Layout'

function DeleteFact() {
    // variable d'état pour stocker l'ID du fait à supprimer
    const [factId, setFactId] = useState('')

    // fonction pour supprimer le fait
    const handleDelete = async () => {
        // on fetch le fait avec la méthode DELETE pour le supprimer
        await fetch(`http://localhost:8000/api/facts/${factId}`, {
            method: 'DELETE'
        })
        
        // on vide l'input après la suppression
        setFactId('')
    }

    return (
        <Layout>
            <section className="delete-fact-container">
            <h2>Supprimer un fait</h2>
            
            <div className="delete-fact-section">
                <input 
                    type="number" 
                    min="1"
                    value={factId}
                    onChange={(e) => setFactId(e.target.value)}
                    placeholder="ID du fait à supprimer"
                />
                <button onClick={handleDelete}>Supprimer</button>
            </div>
            </section>
        </Layout>
    )
}

export default DeleteFact

