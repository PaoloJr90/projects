import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// three locig-wise things to consider here:
// 1. a state that stores the list of pets to render
// 2. a function that executes the corresponding request to the API
// 3. a useEffect that executes that function when the component renders

// once the state is updated, the component will render the data provided by the API


function PetList() {
    const [pets, setPets] = useState([])

    const getPets = async () => {
        try {
            /* FETCH */
            // const response = await fetch('http://localhost:3000/pets')
            // const data = await response.json()
            // if (response.status === 200) setPets(data)

            /* AXIOS */
            // more succinct than fetch
            const response = await axios.get('http://localhost:3000/pets')
            if (response.status === 200) setPets(response.data)
            
        } catch (error) {
            console.error('error', error)
        }
    }
  
    useEffect(() => { getPets() }, [])

    return (
        <>
            <h2>Pet List</h2>

            {pets?.map((pet) => {
                return (
                    <div key={pet?.id}>
                        <p>{pet?.name} - {pet?.type} - {pet?.breed}</p>

                        <Link to={`/${pet?.id}`}>
                            <button>Pet detail</button>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default PetList