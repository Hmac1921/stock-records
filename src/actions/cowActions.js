const getHerd = (payload) => {
    return {
        type: 'GET_HERD',
        //api data
        payload: payload
    }
}

const newStock = (payload) => {
    return {
        type: 'ADD_STOCK',
        //a new cow object 
        payload: payload
    }
}

const newLocationNo = (id, location, address) => {
    return {
        type: 'NEW_LOCATION',
        //cow id number
        selector: id,
        //new location number
        payload: location,
        //new location address
        update: address

    }
}


const giveMedicine = (medTo, medUpdate) => {
    return {
        type: 'GIVE_MEDICINE',
        //cow id number
        medTo: medTo,
        //full medicine object
        medUpdate: medUpdate
    }
}

const addCalf = (mother, calf) => {
    return {
        type: 'ADD_CALF',
        //mothers id number
        mother: mother,
        //full calf object
        calf: calf
    }
}
export {
    getHerd,
    newStock,
    newLocationNo,
    giveMedicine,
    addCalf
}