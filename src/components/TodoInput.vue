<template>
    <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo" >
        <i class="fas fa-plus addBtn" aria-hidden="true"></i>
    </span>
      <ModalAlert v-if="showModal" @close="showModal = false">
        <!--
        you can use custom content here to overwrite default content
        -->
    <!-- <template #header>
        <h3>경고 !
            <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
        </h3>
    </template>
    <template #body>
        <h3>아무것도 입력하지 않으셨습니다.</h3>
    </template> -->
    <h3 slot="header">
        경고 
        <i class="closeModalBtn fa fa-times" 
          aria-hidden="true" @click="showModal = false"
          >
        </i>
      </h3>
      <p slot="body">할 일을 입력하세요.</p>
      </ModalAlert>
    </div>
</template>

<script>
import ModalAlert from "./common/ModalAlert.vue";
export default {
    data (){
        return{
            newTodoItem : "",
            showModal: false
        }
    },
    methods: {
        addTodo (){
            if (this.newTodoItem !== ''){
                // this.$emit("addTodoItem", this.newTodoItem);
                // this.$emit('이벤트이름', 인자1, 인자2, ...);
                // 자식 컴포넌트에서 props 직접 변경 불가능. (부모컴포넌트에서 자식컴포넌트를 호출할때 적을 메서드이름, 해당 메서드에 들어갈 값) => 1단계 앞만 호출 가능
                // const text = this.newTodoItem.trim();
                // trim() : 입력된 값의 공백을 없애줌.
                this.$store.commit('addOneItem', this.newTodoItem);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput (){
            this.newTodoItem = "";
        }
    },
    components:{
        ModalAlert
    }
}
</script>

<style scoped>
    input:focus{
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float :right;
        background: linear-gradient(to right, #6478fb, #8763fb);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color : white;
        vertical-align: middle;
    }
    .closeModalBtn{
        color : #42b983
    }
    
</style>