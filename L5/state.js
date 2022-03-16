//reducer - преобразователь, изменяет состояние

function updateState(state, action) { //(текущее состояние и тип действия), возвращает новое состояние
    if (action.type === 'INCREMENT') {
        return { count: state.count + action.amount };
    } else if (action.type === 'DECREMENT') {
        return { count: state.count - action.amount };
    } else {
        return state;
    }
} 

class Store {
    constructor(updateState, state) { //просим пользователя передавать значение и с помощью какой функции его изменить
        this._updateState = updateState;
        this._state = state; //название личных свойств, которые лучше не трогать
        this._callbacks = [];
    }

    get state() {
        return this._state;
    }

    //пользовтаель не должен совершать самостоятельные действия для обновления, создаем update
    //ничего не возвращает, просто сообщаем об изменениях в состоянии
    update(action) {
        this._state = this._updateState(this._state, action);
        this._callbacks.forEach(callback => callback());
    }

    subscribe(callback) {
        this._callbacks.push(callback);
        return () => this._callbacks = this._callbacks.filter(cb => cb !== callback); //удалит из массива ф обратного вызова
    }
}

const initialState = {
    count: 0
}

const store = new Store(updateState, initialState);

const incrementAction = { type: 'INCREMENT', amount: 5 };
const decrementAction = { type: 'DECREMENT', amount: 3 };

const unsubscribe = store.subscribe(() => console.log('state changed 1', store.state));
store.subscribe(() => console.log('state changed 2', store.state));

store.update(incrementAction);
unsubscribe();
store.update(decrementAction);
store.update({});