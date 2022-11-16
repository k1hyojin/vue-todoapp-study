<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 = "현재 컴포넌트의 메서드 명"></TodoInput> -->
    <TodoList></TodoList>
    <!-- <TodoList : 내려보낼 프롭스 속성 이름 = " 현재 위치의 컴포넌트 데이터 속성"></TodoList> -->
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';


export default {
    // data () {
    //   return{
    //     todoItems : []
    //   }
    // },
    // methods :{
      // addOneItem (todoItem){ vuex로 옮겨감
        // var obj = {completed : false, item: this.newTodoItem};  TodoInput 에서 받은 인자값을 리팩토링 하면서 todoItem 으로 변경했을 뿐.
        // localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        // const obj = {completed : false, item: todoItem};
        // localStorage.setItem(todoItem, JSON.stringify(obj));
        // this.todoItems.push(obj); // localStorage 목록과 화면에 있는 list 가 동기화 되게끔.
      // },
      // removeOneItem (todoItem, index){
      //   this.todoItems.splice(index, 1);
      //   localStorage.removeItem(todoItem.item);   // key 값과 item 값이 동일하기때문에 key 값을 지우는것과 동일
      // },
      // toggleOneItem (todoItem, index){
      //   this.todoItems[index].completed = !this.todoItems[index].completed
      //   // 안티패턴으로 인해 밑의 코드를 위의 코드처럼 변경. 컴포넌트간의 경계를 명확히함
      //   // todoItem.completed = !todoItem.completed;
      //   // 로컬 스토리지 데이터 갱신

      //   localStorage.removeItem(todoItem.item);
      //   // 삭제 후 
      //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      //   // 다시 상태 업데이트 
      // },
      // clearAllItems (){
      //   localStorage.clear(); // 저장소 비우기
      //   this.todoItems = [];  // 화면단 비우기
      // }
    // },
    // created(){
    //     if(localStorage.length > 0){
    //         for (let i = 0; i < localStorage.length ; i++ ){
    //             this.todoItems.push(JSON.parse(localStorage.getItem((localStorage.key(i)))));
    //         }
    //     }        
    // },
    components :{
      // 컴포넌트 태그명 : 컴포넌트 내용
      TodoHeader,
      TodoInput,
      TodoList,
      TodoFooter
    }
}
</script>

<style>
  body{
    text-align: center;
    background-color: #f6f6f6;
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
  }
</style>
