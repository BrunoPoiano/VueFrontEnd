<template>
  <div class="vuex-page">
    <div class="title">
      <h2>Jogo da velha</h2>
    </div>
    <h3>player {{ player }}</h3>
    <h3> vitoria {{victory}}</h3>
    <button @click="creatingMatrix"> resetar</button>
    <div class="indexes">
      <ul v-for="(x, indexX) in matrix" :key="indexX">
        <li
          v-for="(value, indexY) in x"
          :key="indexY"
          @click="move(value.x, value.y)"
        >
          {{ value.icon }}
        </li>
      </ul>
    </div>

    <div class="indexes">
      <ul v-for="(x, indexX) in matrix" :key="indexX">
        <li
          v-for="(value, indexY) in x"
          :key="indexY"
          @click="move(value.x, value.y)"
        >
          {{ value.x }}
          {{ value.y }}
          {{ value.check }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axiosClient from '../axiosClient.js'
export default {
  data() {
    return {
      matrix: [],
      player: 1,
      victory: null,
    };
  },
  methods: {
    move() {
      axiosClient.get("teste")
      // this.matrix.forEach(element => {
      //   element.forEach(el => {
      //     if(el.x == x && el.y == y){
      //       if(!el.value){
      //         if(this.player == 1){
      //           this.player = 2
      //           el.check = 1
      //           el.icon = 'X'
      //         }else{
      //           el.check = 2
      //           this.player = 1
      //           el.icon = 'O'
      //         }
      //         el.value = true
      //       }
      //     }
      //   });
      // });
      // this.win()
    },
    win(){
      let teste = this.winCheck(1, 0)
      console.log(teste);
    },
    winCheck(player, local){
      let teste = 0
    for (let index = 0; index < this.matrix.length; index++) {
      console.log("aqui teste for", teste)
        if(this.matrix[local][index].value){
          if(this.matrix[local][index].check == player){
            console.log("aqui", this.matrix[local][index].check)
            return teste = teste +1
          }
        }
      }
    },
    creatingMatrix() {
      this.player = 1
      for (let i = 0; i < 3; i++) {
        this.matrix[i] = [];
        for (let j = 0; j < 3; j++) {
          this.matrix[i][j] = {
            value: false,
            check: null,
            Icon: '',
            x: i,
            y: j,
          };
        }
      }
    },
  },
  mounted() {
    this.creatingMatrix()
  },
};
</script>

<style lang="stylus">
.indexes {
  display: flex;

  ul {
    padding: 0px;
    li {
      border: 1px solid black;
      width: 50px;
      height: 50px;
      border-radius: 3px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>