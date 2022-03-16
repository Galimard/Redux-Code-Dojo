let state = 0;

//reducer - преобразователь

function updateState(state, action) { //текущее состояние и тип действия
    if (action === 'INCREMENT') {
        return state + 1;
    } else if (action === 'DECREMENT') {
        return state - 1;
    } else {
        return state;
    }
} //возвращает новое состояние

state = updateState(state, 'INCREMENT');
console.log(state);

state = updateState(state, 'DECREMENT');
console.log(state);

state = updateState(state, 'NOTHING');
console.log(state);