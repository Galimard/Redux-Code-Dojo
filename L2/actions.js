let state = 0;

//reducer - преобразователь

function updateState(state, action) { //текущее состояние и тип действия
    if (action.type === 'INCREMENT') {
        return state + action.amount;
    } else if (action.type === 'DECREMENT') {
        return state - action.amount;
    } else {
        return state;
    }
} //возвращает новое состояние

const incrementAction = { type: 'INCREMENT', amount: 5 };
const decrementAction = { type: 'DECREMENT', amount: 3 };

state = updateState(state, incrementAction);
console.log(state);

state = updateState(state, decrementAction);
console.log(state);

state = updateState(state, {});
console.log(state);