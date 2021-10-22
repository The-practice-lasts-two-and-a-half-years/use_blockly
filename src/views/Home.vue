<template>
    <header class="tab">
      <div>
        <h2>积木编程</h2>
        <h4 @click="saveblock">保存</h4>
        <h4 @click="clearblock">清空</h4>
      </div>
      <div>
        <h3>导出C语言</h3>
        <h3>导出Bin文件</h3>
        <h3>平台烧录</h3>
      </div>
    </header>
    <xml id="toolbox" style="display: none">
      <category name="com配置" colour="210">
          <block type="readdi"></block>
          <block type="readai"></block>
          <block type="writedi"></block>
          <block type="diall"></block>
          <block type="writediall"></block>
          <block type="doall"></block>
          <block type="writedoall"></block>
      </category> 
      <category name="控制" colour="120">
          <block type="if"></block>
          <block type="elif"></block>
          <block type="for"></block>
          <block type="break"></block>
          <block type="fornext"></block>
          <block type="iffor"></block>
          <block type="tempfor"></block>
      </category> 
      <category name="定时器" colour="60">
          <block type="timeout"></block>
          <block type="cleartimeout"></block>
      </category> 
      <category name="延时" colour="345">
          <block type="delay"></block>
      </category> 
      <category name="通讯" colour="30">
          <block type="message"></block>
      </category> 
      <category name="储存" colour="135">
          <block type="readlocal"></block>
          <block type="writelocal"></block>
      </category> 
      <category name="初始" colour="135">
          <block type="initprogram"></block>
          <block type="reuse"></block>
      </category> 
    </xml>
    <div class="container">
      <div id="blocklyDiv"></div>
      <div class="banner">
         <div class="block">
            <el-carousel trigger="click" height="160px" autoplay indicator-position='none'>
              <el-carousel-item v-for="item in 4" :key="item">
                <img src="../assets/banner.png" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
        <ul class="news">
          <li>新闻标题</li>
          <li>新闻标题</li>
          <li>新闻标题</li>
          <li>新闻标题</li>
          <li>新闻标题</li>
          <li>新闻标题</li>
          <li>新闻标题</li>
          <li>新闻标题</li>
        </ul>
      </div>
    </div>
</template>

<script>
import '../json/blockjson'
//获取块实例
let workspace = null;

export default {
  name: 'Home',  
  methods:{
    //清空按钮
    clearblock(){
      workspace.clear()
      this.$message({
        message:'清除成功',
        type:'success'
      })
    },
    getjs(){
        let code = Blockly.JavaScript.workspaceToCode(workspace);
        console.log(code);
    },
    saveblock(){
      this.getjs()
    },
    init(){
      workspace = Blockly.inject('blocklyDiv',{
      toolbox: document.getElementById('toolbox'),
      css:true,
      trashcan:false
      });
      //还原保存的块
      
      //修改工具栏样式
      let dom = document.querySelector('.blocklyToolboxDiv')
      dom.style.width = '260px'
      let item = document.querySelectorAll('.blocklyTreeRow')
      item.forEach((item,index)=>{
        if(!index==0){
          item.style.height = '80px'
          item.style.lineHeight = '80px'
        }
      })
    },
  },
  mounted(){
    this.init()
  },
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .tab{
    width: 100%;
    height: 10vh;
    background-color: #242f42;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6%;
    box-sizing: border-box;
    min-width: 1200px;
  }
  .tab div{
    display: flex;
    line-height: 10vh;
    color: #fff;
  }
  .container{
    display: flex;
    min-width: 1200px;
  }
  .tab h4{
    margin-left: 30px;
    cursor: pointer;
  }
  .tab h3{
    margin-left: 20px;
    margin-right: 10px;
    cursor: pointer;
  }
  #blocklyDiv{
    width: 80vw;
    height: 90vh;
    min-width: 1000px;
  }
  .block{
    height: 160px;
  }
  img{
    width: 100%;
    height: 160px;
    cursor: pointer;
  }
  .news{
    padding: 30px;
    box-sizing: border-box;
    list-style: none;
  }
  .news>li{
    height: 50px;
  }
  .banner{
    width: 20vw;
    min-width: 200px;
    background-color: #dce5f3;
    z-index: 9;
  }
</style>