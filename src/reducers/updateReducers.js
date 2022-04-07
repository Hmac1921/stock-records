let initialState = {
    update: []
}

const updateReducer = (state = initialState, action) => {

    switch (action.type) {
        // gets data from api and saves to redux store
        case "GET_MEDICINE":
            return {
                ...state,
                update: action.payload
            }
            //filters via batch number, total qty and qty given data sent from medicine page changed to numbers to deduct 
            //one from the other then new total added into object and its spliced back into array
            case "UPDATE_MEDICINE":
                let medFind = state.update.filter((e) => e.batchNo === action.batch)
                let id = state.update.findIndex((meds) => meds.batchNo === action.batch)
                let total = parseInt(medFind[0].totalQty)
                let reduce = parseInt(action.amount)
                medFind[0].totalQty = total - reduce
                let medsCopy = {
                    ...state
                }
                medsCopy.update.splice(id, 1, medFind[0])
                return {
                    ...state,
                    update: medsCopy.update
                }
                default:
                    return state
    }
}
export default updateReducer