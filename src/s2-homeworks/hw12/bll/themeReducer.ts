
type initialStateType = {
    themeId: number
}

type actionType = {
    type: 'SET_THEME_ID',
    themeId: number

}
const initState = {
    themeId: 1,
    value: 'Light'
}



export const themeReducer = (state: initialStateType = initState, action: actionType): initialStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.themeId
            }
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (themeId: number): actionType => ({ type: 'SET_THEME_ID', themeId })
