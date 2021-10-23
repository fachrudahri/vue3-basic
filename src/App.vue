<template>
  <div>
    {{ message }}
  </div>
  <!-- declarative rendering -->
  <span :title="message">test hover</span>

  <!-- methods -->
  <div>{{ count }}</div>
  <button @click="count++">add 1</button>
  <button @click="addCount">add Count</button>

  <!-- V-model -->
  <p>{{ letter }}</p>
  <input v-model="letter" type="text">
  <!-- 2 way data binding before v-model -->
  <input
    :value="letter"
    @input="letter = $event.target.value"
  >
  <br>

  <!-- conditional rendering -->
  <div v-if="status">wah ini statusnya tampil</div>
  <button @click="changeStatus">ubah status</button>
  <div v-if="status">true</div>
  <div v-else>false</div>
  <br>

  <!-- looping v-for -->
  <div v-for="todo in todos" :key="todo.id">
    {{ todo.name }} || {{ todo.task }}
  </div>
  <br>

  <!-- simple components with props-->
    <child-component text='oke lets go'/>
    <br>

  <!-- looping props components -->
    <child-component v-for="todo in todos" :key="todo.id" :text="todo.task"/>
    <br><br><br><br><br>  
    
  <!-- lifecycle vue 3 -->
  <div id="lifecycle">{{ pesan }}</div>
  <button @click="pesan= 'sudah berubah karena di click button update'">Update!</button>
  <br><br><br><br>

  <!-- used v-once -->
  <div v-once>{{ test }}</div>
  <button @click="test = 'berubah ga ya?'">test ubah</button>
  <br><br><br><br>

  <!-- render html tag data with v-html -->
  <div v-html="tag"></div>
  <br><br><br><br>

  <!-- computed -->
  <div>{{ total }}</div>
  <input v-model="sum1"/>
  <input v-model="sum2"/>
  <br><br><br><br>

  <!-- computed getter & setter -->
  <div>{{ discount }}</div>
  <input v-model="num1" />
  <input v-model="num2" />
  <button @click="addDiscount">add discount</button>
  <br><br><br><br>

  <!-- watcher -->
  <div>{{ mengamati }}</div>
  <input v-model="mengamati"/>
  <br><br><br>

  <!-- dynamic class -->
  <div :class="statusColor ? 'success' : 'failed'">STATUS</div>
  <button @click="statusColor = !statusColor">change!</button>
  <div :class="[boldClass, greenClass]">TEST</div>
</template>

<script>
  import ChildComponent from './components/ChildComponent.vue'

export default {
  components: {
    ChildComponent
  },
  beforeCreate() {
    console.log('before create')
  },
  created() {
    console.log('create')
    console.log(this.pesan)
    console.log(document.getElementById('lifecycle'))
  },
  beforeMount() {
    console.log('before mount')
  },
  mounted() {
    console.log('mounted')
    console.log(this.pesan)
    console.log(document.getElementById('lifecycle'))
  },
  beforeUpdate() {
    console.log('before update')
    console.log(document.getElementById('lifecycle').textContent)
  },
  updated() {
    console.log('update')
    console.log(document.getElementById('lifecycle').textContent)
  },
  beforeUnmount() {
    console.log('before destroy')
  },
  unmounted() {
    console.log('destroyed')
  },

  data() {
    return {
        message: 'Hello Fachru',
        count: 0,
        letter: 'hello',
        status: false,
        todos: [
          {
            id: 1,
            name: 'fachru',
            task: 'ngoding'
          },
          {
            id: 2,
            name: 'nusendra',
            task: 'ngajar ngoding'
          },
          {
            id: 3,
            name: 'cindy',
            task: 'belajar anastesis'
          }
        ],
        pesan: 'text awal',
        test: 'mencoba v-once',
        tag: '<h1>hello ini penggunaan v-html</h1>',
        sum1: 0,
        sum2: 0,
        num1:0,
        num2:0,
        mengamati: 'test',
        statusColor: true,
        greenClass: 'success',
        boldClass: 'bold'
    }
  },
  watch: {
    mengamati(value) {
      console.log('perubahan pada mengamati '+value)
    }
  },
  methods: {
    addCount() {
      this.count++
    },
    changeStatus() {
      this.status = !this.status
    },
    addDiscount() {
      this.discount = 500
    }
  },
  computed: {
    total() {
      return parseInt(this.sum1) + parseInt(this.sum2)
    },
    discount: {
      get() {
        return parseInt(this.num1) + parseInt(this.num2)
      },
      set(value) {
        this.num1 -= value
        this.num2 -= value
      }
    }
  }
}
</script>

<style scoped>
  .success {
    color: green;
  }
  .failed {
    color: red
  }
  .bold {
    font-weight: 700;
  }
</style>