<template>
  <div id="canvas"></div>
</template>

<script>
import { mapGetters } from "vuex";
import Konva from "konva";

export default {
  name: "home",
  computed: {
    ...mapGetters(["number"]),
  },
  mounted() {
    var stage = new Konva.Stage({
      container: "canvas",
      width: 500,
      height: 500,
    });
    var layer = new Konva.Layer();
    var simpleText = new Konva.Text({
      x: 20,
      y: 20,
      text: "Simple Text",
      fontSize: 14,
      fontFamily: "Calibri",
      fill: "green",
    });
    simpleText.offsetX(-simpleText.width() / 2);
    var blob = new Konva.Line({
      points: [23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93],
      fill: "#00D2FF",
      stroke: "black",
      strokeWidth: 1,
      closed: true,
      tension: 0.3,
    });

    // add the shape to the layer
    layer.add(blob);
    var circle = new Konva.Rect({
      x: 20,
      y: 20,
      width: 100,
      height: 60,
      fill: "red",
      stroke: "black",
      strokeWidth: 4,
      cornerRadius: 4,
    });
    layer.add(circle);
    layer.add(simpleText);

    stage.add(layer);
    layer.draw();
  },
};
</script>

<style>
</style>