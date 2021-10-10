import {reducer, StateType} from './Reducer';

test('collapsed should be true', () => {
    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: 'TOGGLE_COLLAPSED'})

    expect(newState.collapsed).toBe(true)
})

test('reducer should throw error because action type is incorrect', () => {
    const state: StateType = {
        collapsed: true
    }

    expect(() => {
        reducer(state, {type: 'FAKETYPE'})
    }).toThrowError();
})