<template>
    <div>
        <transition-group name="list" tag="ul">
        <!-- <ul> -->
            <li v-for=" (todoItem,index) in this.storedTodoItems" :key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check" :class="{checkBtnCompleted : todoItem.completed}" @click="toggleComplete({todoItem, index})"></i>
                <span :class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
                <!-- 뷰의 장점 : class 에도 변수를 두어 값 변화시에 바로 반응을 만들어 낼 수 있음. js 에선 toggle을 썼어야 했을 것. -->
                <span class="removeBtn" @click="removeTodo({todoItem,index})">
                    <i class="removeBtn fas fa-trash-alt"></i>
                </span>
            </li>
        <!-- </ul> -->
        </transition-group>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    methods: {
      ...mapMutations({
        removeTodo : 'removeOneItem',
        toggleComplete : 'toggleOneItem'
      })
        // removeTodo(todoItem, index) {
        //   this.$store.commit('removeOneItem', {todoItem, index});
        //     // this.$emit("removeItem", todoItem, index);
        //     // App.vue 에서 실행
        //     // this.todoItems.splice(index, 1);  // 선택한 index 값 1개를 지우고 재구성하겠다는 뜻
        //     // localStorage.removeItem(todoItem.item);
        // },
        // toggleComplete (todoItem, index){
        //   this.$store.commit('toggleOneItem', {todoItem, index});
        //   // this.$emit("toggleItem", todoItem, index);
        //     // App.vue 에서 실행
        //     // todoItem.completed = !todoItem.completed;
        //     // 로컬 스토리지 데이터 갱신
        //     // localStorage.removeItem(todoItem.item);
        //     // 삭제 후 
        //     // localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        //     // 다시 상태 업데이트 
        // }
    },
    computed:{
      ...mapGetters(['storedTodoItems'])
    }
}
</script>

<style scoped>
    ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* list item transition */

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}


</style>