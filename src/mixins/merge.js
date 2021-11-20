const merge = {
  data() {
    return {
      golongan: 'rakyat bebas'
    }
  },
  methods: {
    onClick() {
      console.log('ini di click dari mixins')
    }
  },
}

export default merge;