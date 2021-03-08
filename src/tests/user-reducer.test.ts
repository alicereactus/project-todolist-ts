import { ActionType, StateType, userReducer } from './user-reducer';

test('user reducer should increment only age', () => {
    const startState: StateType = { name: 'Dimych', age: 20, childrenCount: 2 };
    const action: ActionType = { type: 'INCREMENT-AGE' }

    const endState = userReducer(startState, action)

    expect(endState.name).toBe('Dimych');
    expect(endState.age).toBe(21);
    expect(endState.childrenCount).toBe(2);
});

test('user reducer should increment only childrenCount', () => {
    const startState: StateType = { name: 'Dimych', age: 20, childrenCount: 2 };
    const action: ActionType = { type: 'INCREMENT-CHILDREN-COUNT' }

    const endState = userReducer(startState, action)

    expect(endState.name).toBe('Dimych');
    expect(endState.age).toBe(20);
    expect(endState.childrenCount).toBe(3);
});

test('user reducer should increment only childrenCount', () => {
    const startState: StateType = { name: 'Dimych', age: 20, childrenCount: 2 };
    const action: ActionType = { 
        type: 'CHANGE-NAME',
        name: 'Dmitriy'
     }

    const endState = userReducer(startState, action)

    expect(endState.name).toBe('Dmitriy');
    expect(endState.age).toBe(20);
    expect(endState.childrenCount).toBe(2);
});