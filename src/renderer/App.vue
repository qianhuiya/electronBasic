<template>
  <div id="app">
    <router-view></router-view>
    <div class="handleBtn">
      <el-button
      type="success"
        @click="backTop"
        v-if="backTopFlag"
        :style="opacityStyle"
        ><i :class="`${$config.BACKTOP}`" aria-hidden="true"></i
      ></el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0, //scroll-top
      backTopFlag: false, //backTop-off
      opacityStyle: {
        //backTop-opacity
        opacity: 0,
      },
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
     document.title = this.$config.TITLE + "     |    " + "欢迎回来!";
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

  methods: {
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        let opacity = that.scrollTop / 400;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        console.log(opacity);
        that.backTopFlag = true;
      } else {
        that.backTopFlag = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/electron-css/reset.css";
@import "~@/assets/electron-css/border.css";

#app {
  display:flex;
  justify-content: center;
  height: 100%;
  .handleBtn {
    width:45px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .el-button {
      margin:0;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover{
        box-shadow: 1px 1px 20px rgba(0,0,0,.7);
      }
      i {
        width: 100%;
        margin:auto;
        font-size: 25px;
      }
    }
  }
}

/*横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 10px; /*对垂直流动条有效*/
  height: 10px; /*对水平流动条有效*/
}

/*滚动条的轨道颜色、内阴影及圆角*/
::-webkit-scrollbar-track {
  background-color: rgb(255, 255, 255);
}

/*滑块颜色、内阴影及圆角*/
::-webkit-scrollbar-thumb {
  background-color: #49b1f5;
}

/*两端按钮的样式*/
::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  background-color: rgb(255, 255, 255);
}

/*汇合处的样式*/
::-webkit-scrollbar-corner {
  background: rgb(255, 255, 255);
}
</style>
