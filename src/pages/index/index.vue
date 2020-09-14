<!--
 * @description: 主页
 * @author: XianPengFei
 * @lastEditors: XianPengFei
 * @Date: 2020-09-09 11:20:31
 * @LastEditTime: 2020-09-11 11:09:23
 * @Copyright: 1.0.0
-->
<template>
    <div>
        <div>index test</div>
        <a-button type="primary" @click="toLogin">to Login</a-button>
        <div ref="myEchart" style="width: 600px;height:400px;"></div>
    </div>
</template>

<script>
export default {
    name:"index",
    computed:{
    },
    mounted(){
        this.drawEchart()
    },
    methods:{
        /**
         * @description: 跳转登录页
         * @Date: 2020-09-11 10:35:41
         * @author: XianPengFei
         * @param {type} 
         * @return {type} 
         */
        toLogin(){
            this.$router.push({path:"/login"})
        },


        drawEchart(){
            let myChart = this.echarts.init(this.$refs.myEchart,"plume_1");

            // 指定图表的配置项和数据
            let option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }

        
    }
}
</script>