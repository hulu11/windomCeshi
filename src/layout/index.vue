<template>
   <div>
    <el-row>
        <el-col :span="6" v-for="(item,index) in dataList" :key="index"><router-link :to="item.path + item.children[0].path">啥村</router-link> </el-col>
    </el-row>
    <router-view :key="key"></router-view>
   </div>
</template>

<script>
export default {
    data(){
        return {
            key:'home',
            dataList:this.$store.state.routerView,
        }
    },
    mounted(){
        console.log(this.$store.state.routerView);
    }

}
</script>

<style>

</style>