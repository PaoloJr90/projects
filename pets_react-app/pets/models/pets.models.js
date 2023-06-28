import db from '../../db/db.js'

// model functions
// these functions are called by the controller functions
// they interact with the db and return the data to the controller functions
// database is a simple local array of objects

// getItem is called when getPet is called by the GET /pets/:id route
export const getItem = id => {
    try {
        // optional chaining operator (?.) checks if db.pets exists
        // if it does, filter the array to find the pet with the matching id
        const pet = db?.pets?.filter(pet => pet?.id === id)[0]
        return pet
    } catch (err) {
        console.log('Error', err)
    }
}

// listItems is called when listPets is called by the GET /pets route
export const listItems = () => {
    try {
        // optional chaining operator (?.) checks if db.pets exists
        return db?.pets
    } catch (err) {
        console.log('Error', err)
    }
}

// editItem is called when editPet is called by the PUT /pets/:id route
export const editItem = (id, data) => {
    try {
        const index = db.pets.findIndex(pet => pet.id === id)

        if (index === -1) throw new Error('Pet not found')
        else {
            db.pets[index] = data
            return db.pets[index]
        }        
    } catch (err) {
        console.log('Error', err)
    }
}

// addItem is called when addPet is called by the POST /pets route
export const addItem = data => {
    try {  
        const newPet = { id: db.pets.length + 1, ...data }
        db.pets.push(newPet)
        return newPet

    } catch (err) {
        console.log('Error', err)
    }
}

// deleteItem is called when deletePet is called by the DELETE /pets/:id route
export const deleteItem = id => {
    try {
        // delete item from db
        const index = db.pets.findIndex(pet => pet.id === id)

        if (index === -1) throw new Error('Pet not found')
        else {
            db.pets.splice(index, 1)
            return db.pets
        }
    } catch (error) {
        
    }
}