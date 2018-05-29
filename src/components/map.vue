<template>
  <div id="baiduMap"></div>
</template>
<script>
export default {
  name: 'map',
  mounted() {
      this.initBaiduMap()
  },
  data () {
    return {
      CityInfo: {
        longitude: 104.06, 
        latitude: 30.67
      },
    }
  },
  methods: {
    initBaiduMap() {
      let that = this
      let script = document.createElement("script")
      script.src = "http://api.map.baidu.com/api?v=2.0&ak=zishHhU993mnCRDS3zncmazHuZkIRfti&callback=createMap"
      document.head.appendChild(script)
      window.createMap = () => {
        //创建Map实例
        var map = new BMap.Map("baiduMap"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(this.CityInfo.longitude, this.CityInfo.latitude), 11); // 创建点坐标,初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.addControl(new BMap.ScaleControl({
            anchor: BMAP_ANCHOR_BOTTOM_LEFT
        }));
        map.addControl(new BMap.NavigationControl({
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT
        }));
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        map.enableInertialDragging(); //两秒后开启惯性拖拽
      }
    },
  },
}
</script>