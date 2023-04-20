import type {UserType} from '../HW8'


type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }



export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return state.sort((a, b) => {
                if(action.payload === 'up') {
                    return a.name > b.name ? 1 : -1
                }

                    return b.name > a.name ? 1 : -1
            })
        }
        case 'check': {
            return state.filter(a => a.age >= 18) // need to fix
        }
        default:
            return state
    }
}
