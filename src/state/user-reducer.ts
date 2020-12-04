// user

export type StateType = {
    name: string
    age: number
    childrenCount: number
}

// action
export type ActionType = {
    type: string
    [key: string]: string
}

// case 'CHANGE-NAME'
// case 'INCREMENT-AGE'
// case 'INCREMENT-CHILDREN-COUNT'

export const userReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            state.age = state.age + 1;
            const newState = {...state}
            newState.age = state.age + 1
            return state;
        case 'INCREMENT-CHILDREN-COUNT':
            return {...state, childrenCount: state.childrenCount + 1};
        case 'CHANGE-NAME':
            return {...state, name: action.name}
        default:
            throw new Error("I don't understand this type")
    }
}