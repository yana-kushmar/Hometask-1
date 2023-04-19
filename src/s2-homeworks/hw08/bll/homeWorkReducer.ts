import type {UserType} from '../HW8'
import user from "../User";

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }



export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return state.sort((a: UserType, b: UserType): any => {
                if(action.payload === 'up') {

                    return a.name > b.name

                }
                return b.name > a.name
            })

        }
        case 'check': {
            return state.filter(a => a.age >= 18) // need to fix
        }
        default:
            return state
    }
}
