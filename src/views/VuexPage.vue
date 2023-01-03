<template>
  <div class="vuex-page">
    <div class="title">
      <h2>Vuex Page</h2>
    </div>
    <div class="content">
      <div class="add-content">
        <input
          class="input"
          type="text"
          v-model="toDo"
          placeholder="Digite sua tarefa"
          @keydown.enter="enterComputed"
        />
        <button class="edit-button" v-if="editFlag" @click="editTodoHandler">
          Editar
        </button>
        <button
          class="cancel-edit-button"
          v-if="editFlag"
          @click="cancelEditTodoHandler"
        >
          cancelar
        </button>
        <button class="save-button" v-else @click="AddToTheList">Salvar</button>
      </div>
      <div v-if="errorMessage">
        <span style="color: red">
          {{errorMessage}}
        </span>       
      </div>
      <ul class="table-content responsive-table">
        <li class="table-header">
          <div class="col">To Do List</div>
        </li>
        <li class="table-row" v-for="(todo, index) in toDoList" :key="index">
          <div class="col">
            <span>
              {{ todo.toDo }}
            </span>
          </div>
          <div class="col col-btn">
            <button class="delete-btn" @click="deleteTodo(todo)">
              deletar
            </button>
            <button class="edit-btn" @click="editTodo(todo)">Editar</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      toDo: "",
      editFlag: false,
      editTodoObj: {},
      payload: [],
      errorMessage: null,
    };
  },
  computed: {
    ...mapGetters({
      toDoList: "getToDoListState",
    }),
    enterComputed() {
      if (this.editFlag) {
        return this.editTodoHandler();
      }
      return this.AddToTheList();
    },
  },
  methods: {
    AddToTheList() {
      this.errorMessage = null;
      if(this.toDo == ''){
        this.errorMessage = 'nenhum afazer'
      }else{
        let id;
        id =
          this.toDoList.length > 0
            ? this.toDoList[this.toDoList.length - 1].id + 1
            : 1;
        let param = {
          id: id,
          toDo: this.toDo,
          done: false,
        };
  
        this.payload = [...this.toDoList, param];
        this.errorMessage = null
        this.dispatchTodo(this.payload);
      }
    },
    dispatchTodo(payload) {
      this.$store.dispatch("PageModules/addToDOList", payload);
      this.toDo = "";
    },
    deleteTodo(todo) {
      this.payload = [...this.toDoList];
      let teste = this.payload.findIndex((el) => el.id == todo.id);

      if (teste > -1) {
        this.payload.splice(teste, 1);
      }
      this.dispatchTodo(this.payload);
    },
    editTodo(todo) {
      this.editFlag = true;
      this.editTodoObj = todo;
      this.toDo = todo.toDo;
    },
    editTodoHandler() {
      this.payload = [...this.toDoList];
      let teste = this.payload.find((el) => el.id == this.editTodoObj.id);
      if (teste) {
        teste.toDo = this.toDo;
        this.dispatchTodo(this.payload);
      }
      this.cancelEditTodoHandler();
    },
    cancelEditTodoHandler() {
      this.editFlag = false;
      this.editTodoObj = {};
      this.toDo = "";
    },
  },
};
</script>

<style lang='stylus'>
.vuex-page {
  .title {
    display: flex;
    margin-bottom: 20px;
  }

  .content {
    width: 70%;
    padding: 20px;

    .add-content {
      display: flex;

      button {
        border: none;
        padding: 10px 10px;
        border-radius: 10px;
        cursor: pointer;
        margin-left: 10px;
      }

      .save-button {
        background: green;
        color: white;
      }

      .edit-button {
        background: yellow;
      }

      .cancel-edit-button {
        background: red;
        color: white;
      }

      .input {
        border: none;
        outline: none;
        width: 100%;
        height: 30px;
        background: #ffffff00;
        border-bottom: 1px solid gray;
      }

      .input:focus {
        background: white;
        border-bottom: 1px solid black;
      }
    }

    .responsive-table {
      padding: 0px;

      li {
        border-radius: 3px;
        padding: 25px 30px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
      }

      .table-header {
        background-color: #95A5A6;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.03em;
      }

      .table-row {
        background-color: #ffffff;
        box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
      }

      .col {
        display: flex;
        justify-content: start;
        align-items: center;

        span {
          font-size: 18px;
          letter-spacing: 0.03em;
        }
      }

      .col-btn {
        display: flex;
        justify-content: space-between;

        button {
          border: none;
          padding: 10px 10px;
          border-radius: 10px;
          cursor: pointer;
          margin: 0 5px;
        }

        .delete-btn {
          background: red;
          color: white;
        }

        .edit-btn {
          background: yellow;
        }
      }
    }
  }
}
</style>