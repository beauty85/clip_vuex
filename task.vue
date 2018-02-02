<template>
  <div  class="main-content my_content">
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default{
    created(){
    },
    computed: {
      ...mapGetters([
        'getMineBaseMsg'
      ])
    },
    mounted(){
      this.getList();
    },
    methods:{
      getAllTask(){
        this.$store.dispatch('getMineBaseApi');
      }
    }
  }
</script>
<style lang="stylus">
  .task_popper
    top 108px!important
    left 273px!important
    border 1px solid #e5e5e5
    .popper__arrow
      left 12px!important
</style>
