let initialState = {
    update: []
}

const updateReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_MEDICINE":
            return {
                ...state,
                update: action.payload
            }
            case "UPDATE_MEDICINE":
                let medFind = state.update.filter((e) => e.batchNo === action.batch)
                console.log(medFind);
                let id = state.update.findIndex((meds) => meds.batchNo === action.batch)
                console.log(id);
                let total = parseInt(medFind[0].totalQty)
                let reduce = parseInt(action.amount)
                console.log(total, reduce);
                medFind[0].totalQty = total - reduce
                let medsCopy = {
                    ...state
                }
                medsCopy.update.splice(id, 1, medFind[0])
                console.log(medsCopy);
                return {
                    ...state,
                    update: medsCopy.update
                }
                default:
                    return state
    }
}
export default updateReducer