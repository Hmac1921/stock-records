const getMedicine = (payload) => {
    return {
        type: "GET_MEDICINE",
        payload: payload
    }
}

const updateMedicine = (amount, batch) => {
    return {
        type: 'UPDATE_MEDICINE',
        amount: amount,
        batch: batch

    }
}

export {
    getMedicine,
    updateMedicine

}