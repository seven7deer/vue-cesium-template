<template>
  <div id="cesiumContainer"></div>
</template>
<script>
export default {
  name: 'cesiumContainer',
  data() {
    return {};
  },
  mounted() {
    this.initCesium();
    this.mouseEvent();
  },
  methods: {
    initCesium() {
      // 创建viewer实例
      viewer = new Cesium.Viewer('cesiumContainer', {
        timeline: false,
        animation: false,
        navigationHelpButton: false,
        geocoder: false,
        SkyAtmosphere: false,
        // sceneModePicker: false,
        // homeButton: false,
        fullscreenButton: false,
        imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
          url:
            'http://t0.tianditu.com/img_w/wmts?tk=2a2c5ce64b61343727085b76c46d7ad3&service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles',
          layer: 'img',
          style: 'default',
          format: 'tiles',
          tileMatrixSetID: 'w',
          maximumLevel: 16,
          show: false,
        }),
        baseLayerPicker: false,
        selectionIndicator: false, //鼠标点击wms选择框
        infoBox: false,
      });

      // 去除版权信息
      viewer._cesiumWidget._creditContainer.style.display = 'none';

      // 确定初始位置
      viewer.camera.flyTo({
        destination: new Cesium.Cartesian3(
          -9256145.42310121,
          24956348.93821263,
          10829723.085629512
        ),
      });

      // home键位置
      viewer.homeButton.viewModel.command.beforeExecute.addEventListener(
        function (e) {
          e.cancel = true;
          //你要飞的位置
          viewer.camera.flyTo({
            destination: new Cesium.Cartesian3(
              -9256145.42310121,
              24956348.93821263,
              10829723.085629512
            ),
          });
        }
      );

      // 增加中文注记
      let provider1 = new Cesium.WebMapTileServiceImageryProvider({
        url:
          'http://t0.tianditu.com/cia_w/wmts?service=wmts&tk=2a2c5ce64b61343727085b76c46d7ad3&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg',
        layer: 'tiandituImgMarker',
        style: 'default',
        format: 'image/jpeg',
        tileMatrixSetID: 'tiandituImgMarker',
        show: true,
        maximumLevel: 16,
      });
      viewer.imageryLayers.addImageryProvider(provider1);
      // 增加行政区划
      let provider2 = new Cesium.WebMapTileServiceImageryProvider({
        url:
          'http://t0.tianditu.com/ibo_w/wmts?service=wmts&tk=2a2c5ce64b61343727085b76c46d7ad3&request=GetTile&version=1.0.0&LAYER=ibo&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg',
        layer: 'tiandituImgQH',
        style: 'default',
        format: 'image/jpeg',
        tileMatrixSetID: 'tiandituImgQH',
        maximumLevel: 16,
      });
      viewer.imageryLayers.addImageryProvider(provider2);
    },
    mouseEvent() {
      var scene = viewer.scene;
      var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);

      // 屏蔽双击实体跟踪事件
      viewer.trackedEntity = undefined;
      viewer._cesiumWidget._screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      );

      var scene = viewer.scene;
      var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
      // 鼠标左击事件
      handler.setInputAction((movement) => {
        var ray = viewer.camera.getPickRay(movement.position);
        var cartesian = viewer.scene.globe.pick(ray, scene);
        if (cartesian) {
          var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
          var lng = Cesium.Math.toDegrees(cartographic.longitude);
          var lat = Cesium.Math.toDegrees(cartographic.latitude);
          var height = viewer.camera.positionCartographic.height;
          var pos = { lon: lng, lat: lat, z: height };
        }
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    },
  },
};
</script>

<style scoped>
#cesiumContainer {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>