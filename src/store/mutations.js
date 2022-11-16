const addOneItem = (state, todoItem ) => {
    const obj = {completed : false, item: todoItem};
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const removeOneItem = (state, payload) =>{
    state.todoItems.splice(payload.index, 1);
    localStorage.removeItem(payload.todoItem.item);   // key 값과 item 값이 동일하기때문에 key 값을 지우는것과 동일
}

const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = []; 
}

export { addOneItem, toggleOneItem, removeOneItem, clearAllItems }