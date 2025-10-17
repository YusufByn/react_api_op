import { useState, useEffect } from 'react'
import Layout from '../layout/Layout'

function Facts() {
    // déclaration d'une variable d'état qui stock les faits
    // la valeur initiale est un tableau vide
    const [facts, setFacts] = useState([])

    //on utilise un useEffect pour récupérer les faits et les stocker dans ma variable d'état   
    useEffect(() => {
        // on déclare une fonction async pour récupérer les faits
        const fetchAllFacts = async () => {
            // on fetch les faits en utilisant l'url de l'api
            const response = await fetch('http://localhost:8000/api/facts')
            // transforme la réponse en json
            const data = await response.json()
            //on set les données de la variable d'état avec les données de la réponse
            // quand on fait un console log de data on a la key member qui contient le tableau avec mes faits 
            // donc on setFacts avec data.member
            setFacts(data.member)
        }

        //on appelle la fonction fetchAllFacts pour récupérer les faits
        fetchAllFacts()
    }, [])

    return (
        <Layout>
            <section className="facts-container">
                <div>
                    {/* on affiche le titre de la page */}
                    <h1>Liste des Faits IT</h1>
                    {/* on affiche la liste des faits */}
                    <ul className="facts-list">
                        {/* on affiche la liste des faits */}
                        {/* on utilise la fonction map pour boucler et afficher chaque fait */}
                        {facts.map((fact) => (
                        <li key={fact.id} className="fact-item">
                            <h3>Fait n°{fact.id}</h3>
                            <p>Techno: {fact.techno}</p>
                            <p>{fact.fact}</p>
                        </li>
                        ))}
                    </ul>
                </div>
            </section>
        </Layout>
    )
}

export default Facts

