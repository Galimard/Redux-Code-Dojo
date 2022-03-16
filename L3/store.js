//reducer - преобразователь

function updateState(state, action) { //(текущее состояние и тип действия), возвращает новое состояние
    if (action.type === 'INCREMENT') {
        return state + action.amount;
    } else if (action.type === 'DECREMENT') {
        return state - action.amount;
    } else {
        return state;
    }
} 

class Store {
    constructor(updateState, state) { //просим пользователя передавать значение и с помощью какой функции его изменить
        this._updateState = updateState;
        this._state = state; //название личных свойств, которые лучше не трогать
    }

    get state() {
        return this._state;
    }

    //пользовтаель не должен совершать самостоятельные действия для обновления, создаем update
    //ничего не возвращает, просто сообщаем об изменениях в состоянии
    update(action) {
        this._state = this._updateState(this._state, action);
    }
}

const store = new Store(updateState, 0);

const incrementAction = { type: 'INCREMENT', amount: 5 };
const decrementAction = { type: 'DECREMENT', amount: 3 };

store.update(incrementAction);
console.log(store.state);

store.update(decrementAction);
console.log(store.state);

store.update({});
console.log(store.state);