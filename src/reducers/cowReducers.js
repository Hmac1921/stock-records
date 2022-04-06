let initialState = {
    cows: []
}
const cowReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_HERD":
            return {
                ...state,
                cows: action.payload,
            }
            case "ADD_STOCK":
                return {
                    ...state,
                    cows: [...state.cows, action.payload]
                }
                case "NEW_LOCATION":

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
                        let getCow = state.cows.filter((e) => e.id === action.medTo)
                        let idNo = state.cows.findIndex((cow) => cow.id === action.medTo)
                        getCow[0].medicine.push(action.medUpdate)
                        getCow[0].medicine.hadMedicine = true
                        let getCowCopy = {
                            ...state
                        }
                        getCowCopy.cows.splice(idNo, 1, getCow[0])

                        return {
                            ...state,
                            cows: getCowCopy.cows
                        }

                        default:
                            return state
    }

}

export default cowReducer


/*
  case "ADD_ICECREAM":
    return Object.assign({}, state, {
        ...state,
        [action.order]: state[action.order] + action.payload
    })

case "UPDATE_API":
    return {
        ...state,
      app.post()
    }*/

/* 
 [state.id]: action.payload.id,
                    [state.tag]: action.payload.tag,
                    [state.breed]: action.payload.breed,
                    [state.sex]: action.payload.sex,
                    [state.DoB]: action.payload.DoB,
                    [state.dam]: action.payload.dam,
                    [state.sire]: action.payload.sire,
                    [state.movements]: {
                        [state.prevLocation]: action.payload.movements.prevLocation,
                        [state.prevAddress]: action.payload.movements.prevAddress,
                        [state.currentLocation]: action.payload.movements.currentLocation,
                        [state.currentAddress]: action.payload.movements.currentAddress,
                        [state.newLocations]: 0,
                        [state.newAddress]: "",
                        [state.onFarm]: true
                    },
                    [state.medicine]: {
                        [state.startOfTreatment]: "",
                        [state.endOfTreatment]: "",
                        [state.nameOfMedicine]: "",
                        [state.amountGivenInMls]: 0,
                        [state.batchNo]: "",
                        [state.hadMedicine]: false
                    },
                    [state.offspring]: {
                        [state.id]: 0,
                        [state.tag]: "",
                        [state.breed]: "",
                        [state.sex]: "",
                        [state.DoB]: "",
                        [state.hasOffspring]: false
                    },
                    [state.description]: "",
                    [state.notes]: ""
*/