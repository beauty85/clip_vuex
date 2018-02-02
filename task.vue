<template>
  <div  class="main-content my_content">
    <dl v-for="list in tasklist" class="dl_task">
      <dt>
        <i class="new-targets"></i>{{ list.detail_name }}
        <a @click="showCretask(list.detail_name,list.detail_id,list.detail_user_id)" class="add_task  xz">
          <i class="new-add_task"></i>新增任务
        </a>
      </dt>
      <dd v-for="task in list.task" >
        <div @click="getTaskDetail(task.task_id)" :class="{ task_active:changeRed == task.task_id}" >
          <div class="title">
            <!--<span v-if="task.logo==undefined" class="name_img">{{ task.username | newName }}</span>-->
            <span v-if="task.logo==undefined && task.username!=undefined" class="name_img">{{ task.username | newName }}</span>
            <span v-if="task.username==undefined" class="name_img"></span>
            <img v-if="task.logo!=undefined" :src="task.logo" />
            <span class="task_name">{{task.task_name}}</span>
          </div>
          <div class="child">
            <span class="status zt" v-if="task.statusName=='暂停'">{{task.statusName}}</span>
            <span class="status wks" v-if="task.statusName=='未开始'">{{task.statusName}}</span>
            <span class="status yq" v-if="task.statusName=='审核中'">{{task.statusName}}</span>
            <span class="status yq" v-if="task.statusName=='延期待审核'">{{task.statusName}}</span>
            <span class="status yq" v-if="task.statusName=='已驳回'">{{task.statusName}}</span>
            <span class="status jx" v-if="task.statusName=='进行中'">{{task.statusName}}</span>
            <span class="status zz" v-if="task.statusName=='终止'">{{task.statusName}}</span>
            <span class="status zz" v-if="task.statusName=='已完成'">{{task.statusName}}</span>
          </div>
        </div>
        <ul v-if="task.child_task!=undefined " class="nav_child">
          <li v-for="child in task.child_task" :class="{ task_active:changeRed == child.task_id}"  @click="getTaskDetail(child.task_id)">
            <div class="ct_box">
              <div class="title">
                <span v-if="child.username==undefined" class="name_img"></span>
                <span v-if="child.logo==undefined && task.username!=undefined" class="name_img">{{ child.username | newName }}</span>
                <img v-if="child.logo!=undefined"  :src="child.logo" />
                <span class="task_name">{{child.task_name}}</span>
              </div>
              <div class="child">
                <span class="status yq" v-if="child.statusName=='审核中'">{{child.statusName}}</span>
                <span class="status zt" v-if="child.statusName=='暂停'">{{child.statusName}}</span>
                <span class="status wks" v-if="child.statusName=='未开始'">{{child.statusName}}</span>
                <span class="status yq" v-if="child.statusName=='延期待审核'">{{child.statusName}}</span>
                <span class="status yq" v-if="child.statusName=='已驳回'">{{child.statusName}}</span>
                <span class="status jx" v-if="child.statusName=='进行中'">{{child.statusName}}</span>
                <span class="status zz" v-if="child.statusName=='终止'">{{child.statusName}}</span>
                <span class="status zz" v-if="child.statusName=='已完成'">{{child.statusName}}</span>
                <!--<span class="status shz">{{task.statusName}}</span>-->
              </div>
            </div>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default{
  data(){
  return{
  tasklist:[],
  }
  }
  created(){
  },
  computed: {
  ...mapState({
  'tasklist': state => state.task.getMineBaseMsg.tasklist
  }),
  ...mapGetters([
  'getMineBaseMsg'
  ])
  },
  mounted(){
  this.getAllTask();
  },
  methods:{
  getAllTask(){
  this.$store.dispatch('getMineBaseApi',{id:LS.get("groupMemberId"),period:'2018',task_status:'1,2,3,4,5,8'});
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
