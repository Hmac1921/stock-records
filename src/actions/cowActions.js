const getHerd = (payload) => {
    return {
        type: 'GET_HERD',
        payload: payload
    }
}

const newStock = (payload) => {
    return {
        type: 'ADD_STOCK',
        payload: payload
    }
}

const newLocationNo = (id, location, address) => {
    return {
        type: 'NEW_LOCATION',
        selector: id,
        payload: location,
        update: address

    }
}


const giveMedicine = (medTo, medUpdate) => {
    return {
        type: 'GIVE_MEDICINE',
        medTo: medTo,
        medUpdate: medUpdate
    }
}

const addCalf = (mother, calf) => {
    return {
        type: 'ADD_CALF',
        mother: mother,
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