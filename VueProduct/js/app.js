new Vue({
    el: "#vueapp",
    data:{
        name:"米斯特吴",
        job:"web开发",
        website: "https://www.baidu.com",
        websiteTag:"<a href='https://www.baidu.com'>newUrl</a>",
        age:30,
        x:0,
        y:0
    },
    methods: {
        greet:function(time){
            return "Good " + time +" " + this.name+ "!";
        },
        addAge:function(inc){
            this.age +=inc;
        },
        delAge:function(dec){
            this.age-=dec;
        },
        updateXY:function(event){
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopmoving: function (e) {
            e.stopPropagation();
        },
        alert:function(e){
           alert("你已经成功见到我了");
        }
    }
})



new Vue({
    el: "#vuestudy",
    data:{
        height:500,
        name:"",
        age:"",
        a:0,
        b:0,
        full:20
    },
    methods:{
        logName:function(){
            console.log("你正在输入名字");
        },
        logAge:function () {
            console.log("你正在输入年龄");
        },
        showName: function () {
           this.name = this.$refs.name.value; 
        },
        showAge: function () {
            this.age = this.$refs.age.value;
        }
    },
    computed:{
        addToA:function(){
            return this.full + this.a;
        },
        addToB: function () {
            return this.full + this.b;
        }
    }
})
/***
 * el element需要获取的元素，一定是html的根元素
 * data 用于数据的存储
 * methods：{{}}获取函数的时候一定要加（），传参数需要加（）
 * 绑定事件可以不加（）
 */