const SET_THEME_ID = 'SET_THEME_ID'

type initialStateType = {
    themeId: number
}

type actionType = {
    type: 'SET_THEME_ID',
    id: number

}
const initState = {
    themeId: 1,
}



export const themeReducer = (state: initialStateType = initState, action: actionType): initialStateType => { // fix any
    switch (action.type) {
        case SET_THEME_ID:
            return {
                ...state,
                themeId: +action.id
            }
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): actionType => ({ type: SET_THEME_ID, id})
