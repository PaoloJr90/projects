import { getItem, listItems, editItem, addItem, deleteItem } from '../models/pets.models.js'

// controller functions
// these functions are called by the routes
// they call the model functions and send the response

// getPet is called when a GET request is made to /pets/:id
export const getPet = (req, res) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

// listPets is called when a GET request is made to /pets
export const listPets = (req, res) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

// editPet is called when a PUT request is made to /pets/:id
export const editPet = (req, res) => {
    try {
        const resp = editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

// addPet is called when a POST request is made to /pets
export const addPet = (req, res) => {
    try {
        const resp = addItem(req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

// deletePet is called when a DELETE request is made to /pets/:id
export const deletePet = (req, res) => {
    try {
        const resp = deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}