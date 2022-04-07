let initialState = {
    cows: []
}
const cowReducer = (state = initialState, action) => {

    switch (action.type) {
        //gets the data from the api and saves it to redux store 
        case "GET_HERD":
            return {
                ...state,
                cows: action.payload,
            }
            // adds and new cow to the redux store
            case "ADD_STOCK":
                return {
                    ...state,
                    cows: [...state.cows, action.payload]
                }
                case "NEW_LOCATION":
                    //filters vis cow id number, updates new locvation / address details and changes the onFarm to false so cow is omitted
                    // from herd render but can still be searched. updated object spliced back in.
                    let checker = state.cows.filter((e) => e.id === action.selector)
                    let id = state.cows.findIndex((cow) => cow.id === action.selector);
                    checker[0].movements.newLocation = action.payload;
                    checker[0].movements.newAddress = action.update
                    checker[0].movements.onFarm = false
                    let stateCopy = {
                        ...state
                    }
                    stateCopy.cows.splice(id, 1, checker[0])

                    return {
                        ...state,
                        cows: stateCopy.cows
                    }

                    case "GIVE_MEDICINE":
                        //same filter and id used as above but whole object is added to the start of the array so most
                        //recent medicine shows up on screen. new array copy spliced back in.
                        let getCow = state.cows.filter((e) => e.id === action.medTo)
                        let idNo = state.cows.findIndex((cow) => cow.id === action.medTo)
                        getCow[0].medicine.unshift(action.medUpdate)
                        getCow[0].medicine.hadMedicine = true
                        let getCowCopy = {
                            ...state
                        }
                        getCowCopy.cows.splice(idNo, 1, getCow[0])

                        return {
                            ...state,
                            cows: getCowCopy.cows
                        }
                        case "ADD_CALF":
                            //exactly the same process as above but with offspring array.
                            let mother = state.cows.filter((e) => e.id === action.mother)
                            let motherIndex = state.cows.findIndex((cow) => cow.id === action.mother)
                            mother[0].offspring.unshift(action.calf)
                            mother[0].offspring.hasOffspring = true
                            let motherCopy = {
                                ...state
                            }
                            motherCopy.cows.splice(motherIndex, 1, mother[0])

                            return {
                                ...state,
                                cows: motherCopy.cows
                            }

                            default:
                                return state
    }

}

export default cowReducer