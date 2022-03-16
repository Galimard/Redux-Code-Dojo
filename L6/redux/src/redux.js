export function createStore(reducer, initialState) { //reducer - ф, изменяющая состояние, initialState - начальное состояние
    let state = initialState;
    let callbacks = [];

    const getState = () => state;

    const dispatch = action => { //изменяет состояние (update)
        state = reducer(state, action);
        callbacks.forEach(callback => callback());
    } 

    const subscribe = callback => { //подписываемся на изменения
        callbacks.push(callback);
        return () => () => this._callbacks = this._callbacks.filter(cb => cb !== callback); //отписка
    }

    dispatch({}); //добавляем, если пользователь не передал initialState

    return { getState, dispatch, subscribe };
}