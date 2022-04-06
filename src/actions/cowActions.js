const getHerd = (payload) => {
    return {
        type: 'GET_HERD',
        payload: payload
    }
}

const newStock = () => {
    return {
        type: 'ADD_STOCK',
        payload: {}
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

/*const giveMedicine = (medTo, medName, start, end, amount, batch) => {
    return {
        type: 'GIVE_MEDICINE',
        medTo: medTo,
        medName: medName,
        start: start,
        end: end,
        amount: amount,
        batch: batch
    }

}*/

const giveMedicine = (medTo, medUpdate) => {
    return {
        type: 'GIVE_MEDICINE',
        medTo: medTo,
        medUpdate: medUpdate
    }

}

export {
    getHerd,
    newStock,
    newLocationNo,
    giveMedicine
}

/* 
 medicine: {
                startOfTreatment: "",
                endOfTreatment: "",
                nameOfMedicine: "",
                amountGivenInMls: 0,
                batchNo: "",
                hadMedicine: false
            },
            offspring: {
                id: 0,
                tag: "",
                breed: "",
                sex: "",
                DoB: "",
                hasOffspring: false
            },
*/