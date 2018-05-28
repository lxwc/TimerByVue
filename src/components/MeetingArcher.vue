<template>
    <div class="text">
        <div v-if="!isStop">
            你的宝贝还有{{day}}天{{hour}}小时{{minute}}分钟{{second}}秒飞向你
        </div>
        <div v-else>
            你的小宝贝已上线
        </div>
        <snow></snow>
    </div>
</template>
<script>
import Snow from './Snow'
export default {
  data: function() {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      destDate: new Date("2018-4-29 00:45:00"), //终点时间
      currDate: new Date(), //当前时间
      stemptimer: null,
      isStop: false //是否计时结束
    };
  },
  mounted() {
    this.stopTimer();
    if (!this.isStop) {
      this.changeTimer();
    }
  },
  components: {
      Snow
  },
  methods: {
    //计算倒计时
    setTimer() {
      this.currDate = new Date();
      var stempDate = this.destDate - this.currDate; //时间差
      this.day = parseInt(stempDate / 1000 / 60 / 60 / 24);
      this.second = parseInt((stempDate / 1000) % 60);
      this.minute = parseInt((stempDate / 1000 / 60) % 60);
      this.hour = parseInt((stempDate / 1000 / 60 / 60) % 24);
    },
    //动态修改倒计时
    changeTimer() {
      this.stemptimer = setInterval(() => {
        this.setTimer();
        this.stopTimer();
      }, 1000);
    },
    //清除定时器
    clearTimer() {
      clearInterval(this.stemptimer);
      this.stemptimer = null;
    },
    //判断计时结束
    stopTimer() {
      if (this.currDate >= this.destDate) {
        this.isStop = true;
        this.clearTimer();
      } else {
        this.isStop = false;
      }
    }
  }
};
</script>
<style scoped>
    .text{
        font-size: 50px;
    }
</style>

