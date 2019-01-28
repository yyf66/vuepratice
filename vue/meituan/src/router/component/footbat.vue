<template>
    <Tabs :animated="false" v-model="tabs" class="footerbar">
        <TabPane  v-for="item in footlist" :key="item.value" :label="item.label"></TabPane>
    </Tabs>
   
</template>


<script>
export default {
    props:["footlist"],
    name:"FooterBar",
    data(){
        return{
            tabs:""
        }
    },
    watch:{
        "tabs":function(){
            console.log(this.tabs);
        }
    }
}
</script>


<style scoped lang="stylus">
    .footerbar
        
                .ivu-tabs-nav 
                border 2px solid red
                    display flex;
                    justify-content center;
                    align-items center;

                    .ivu-tabs-tab
                        flex 1;

        

</style>
