const getMedicine = (payload) => {
    return {
        type: "GET_MEDICINE",
        //api data
        payload: payload
    }
}

const updateMedicine = (amount, batch) => {
    return {
        type: 'UPDATE_MEDICINE',
        //amount given
        amount: amount,
        //batch number
        batch: batch

    }
}

export {
    getMedicine,
    updateMedicine

}