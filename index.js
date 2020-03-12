let width = window.innerWidth;
let height = window.innerHeight;
let topx = width / 2 - 250;
let topy = height / 2 - 300;

var stage = new Konva.Stage({
  container: "container",
  width,
  height
});

var layer = new Konva.Layer();
stage.add(layer);

var box = new Konva.Rect({
  x: width / 2 - 250,
  y: height / 2 - 300,
  width: 500,
  height: 650,
  fill: "#EC808D"
});
layer.add(box);
// 第一屏
var boxContent = new Konva.Rect({
  x: width / 2 - 160,
  y: height / 2 - 150,
  width: 300,
  height: 300,
  fill: "#FACD91"
});

var textFirst = new Konva.Text({
  x: width / 2 - 150,
  y: height / 2 - 60,
  text: "开始游戏前，让我们先\n来了解下什么是光的\n             反射？",
  fontSize: 28,
  fill: "#333",
  storke: "#333"
});

layer.add(boxContent);
layer.add(textFirst);
layer.draw();
stage.on("click", drawSec);

// 绘制第二屏
function drawSec() {
  layer.children.splice(1, 2);
  layer.draw();
  stage.off("click");
  // 第二屏
  var box2 = new Konva.Rect({
    x: width / 2 - 200,
    y: height / 2 - 280,
    width: 400,
    height: 200,
    fill: "#FACD91"
  });
  var text2 = new Konva.Text({
    x: width / 2 - 200,
    y: height / 2 - 250,
    text:
      "1.镜面反射：平行光线经界面反\n射后沿某一方向平行射出，只能\n在某一方向接收到反射光线\n（反射面是光滑平面）",
    fontSize: 28,
    fill: "#333",
    storke: "#333"
  });
  layer.add(box2);
  layer.add(text2);
  var imageObj = new Image();
  imageObj.src = "./images/mirror.jpeg";
  imageObj.onload = function() {
    var yoda = new Konva.Image({
      x: width / 2 - 180,
      y: height / 2 - 20,
      image: imageObj,
      width: 360,
      height: 260
    });

    layer.add(yoda);
    layer.draw();
  };
  layer.draw();

  stage.on("click", drawThird);
}

//绘制第三屏
function drawThird() {
  layer.children.splice(1);
  layer.draw();
  stage.off("click");
  // 第三屏
  var box3 = new Konva.Rect({
    x: width / 2 - 200,
    y: height / 2 - 280,
    width: 400,
    height: 200,
    fill: "#FACD91"
  });
  var text3 = new Konva.Text({
    x: width / 2 - 200,
    y: height / 2 - 250,
    text:
      "2.漫反射：\n平行光经界面反射后向各个不同\n的方向反射出去，即在各个不同\n的方向都能接收到反射光线（反\n射面是粗糙平面或曲面） ",
    fontSize: 28,
    fill: "#333",
    storke: "#333"
  });
  layer.add(box3);
  layer.add(text3);
  var imageObj2 = new Image();
  imageObj2.src = "./images/man.jpeg";
  imageObj2.onload = function() {
    var yoda2 = new Konva.Image({
      x: width / 2 - 180,
      y: height / 2 - 20,
      image: imageObj2,
      width: 360,
      height: 260
    });

    layer.add(yoda2);
    layer.draw();
  };
  layer.draw();
  stage.on("click", drawForth);
}
//绘制第四屏
function drawForth() {
  layer.children.splice(1);
  layer.draw();
  stage.off("click");
  var box4 = new Konva.Rect({
    x: width / 2 - 160,
    y: height / 2 - 150,
    width: 300,
    height: 300,
    fill: "#FACD91"
  });
  var text4 = new Konva.Text({
    x: width / 2 - 150,
    y: height / 2 - 60,
    text:
      "现在初步认识了两种光\n的反射，让我们主要学\n习基于镜面反射的知识\n吧！",
    fontSize: 28,
    fill: "#333",
    storke: "#333"
  });

  layer.add(box4);
  layer.add(text4);
  layer.draw();
  stage.on("click", gotoTeach);
}
// 绘制背景方格
function drawRect() {
  for (let i = 0; i < 11; i++) {
    var dashedLine = new Konva.Line({
      points: [
        width / 2 - 250,
        height / 2 - 300 + 50 * (i + 1),
        width / 2 + 250,
        height / 2 - 300 + 50 * (i + 1)
      ],
      stroke: "#D7D7D7",
      tension: 1
    });
    dashedLine.dash([5, 2]);
    layer.add(dashedLine);
  }
  for (let i = 0; i < 10; i++) {
    var dashedLine = new Konva.Line({
      points: [
        width / 2 - 250 + (i + 1) * 50,
        height / 2 - 300,
        width / 2 - 250 + (i + 1) * 50,
        height / 2 + 250
      ],
      stroke: "#D7D7D7",
      tension: 1
    });
    dashedLine.dash([5, 2]);
    layer.add(dashedLine);
  }
}
//画障碍物
function drawObstacle(x, y, w, h) {
  var rect = new Konva.Rect({
    x: width / 2 - 250 + x,
    y: height / 2 - 325 + y,
    width: w,
    height: h,
    fill: "#555555"
  });
  layer.add(rect);
  layer.draw();
}
// 画镜子

// 进入讲解关
function gotoTeach() {
  stage.off("click");
  layer.children.splice(1);
  layer.draw();
  var imageObj = new Image();
  imageObj.src = "./images/1.png";
  imageObj.onload = function() {
    var yoda = new Konva.Image({
      x: width / 2 - 250,
      y: height / 2 - 325,
      image: imageObj,
      width: 500,
      height: 580
    });
    layer.add(yoda);
    layer.draw();
  };
  stage.on("click", teacher2);
}

function teacher2() {
  stage.off("click");
  layer.children.splice(1);
  layer.draw();
  var imageObj = new Image();
  imageObj.src = "./images/2.png";
  imageObj.onload = function() {
    var yoda = new Konva.Image({
      x: width / 2 - 250,
      y: height / 2 - 325,
      image: imageObj,
      width: 500,
      height: 580
    });
    layer.add(yoda);
    layer.draw();
  };
  stage.on("click", teacher3);
}

function teacher3() {
  stage.off("click");
  layer.children.splice(1);
  layer.draw();
  var imageObj = new Image();
  imageObj.src = "./images/3.png";
  imageObj.onload = function() {
    var yoda = new Konva.Image({
      x: width / 2 - 250,
      y: height / 2 - 325,
      image: imageObj,
      width: 500,
      height: 580
    });
    layer.add(yoda);
    layer.draw();
  };
  stage.on("click", teacher4);
}

function teacher4() {
  stage.off("click");
  layer.children.splice(1);
  layer.draw();
  var imageObj = new Image();
  imageObj.src = "./images/4.png";
  imageObj.onload = function() {
    var yoda = new Konva.Image({
      x: width / 2 - 250,
      y: height / 2 - 325,
      image: imageObj,
      width: 500,
      height: 580
    });
    layer.add(yoda);
    layer.draw();
  };
  stage.on("click", anotherAngle);
}

function anotherAngle() {
  stage.off("click");
  layer.children.splice(1);
  layer.draw();
  var box5 = new Konva.Rect({
    x: width / 2 - 160,
    y: height / 2 - 150,
    width: 300,
    height: 300,
    fill: "#FACD91"
  });
  var text5 = new Konva.Text({
    x: width / 2 - 150,
    y: height / 2 - 60,
    text: "为了巩固刚刚学到的反\n射知识，下面再来看一\n个入射角不同的例子",
    fontSize: 28,
    fill: "#333",
    storke: "#333"
  });
  layer.add(box5);
  layer.add(text5);
  layer.draw();
  stage.on("click", teacher5);
}

function teacher5() {
  stage.off("click");
  layer.children.splice(1);
  layer.draw();
  var imageObj = new Image();
  imageObj.src = "./images/5.png";
  imageObj.onload = function() {
    var yoda = new Konva.Image({
      x: width / 2 - 250,
      y: height / 2 - 325,
      image: imageObj,
      width: 500,
      height: 580
    });
    layer.add(yoda);
    layer.draw();
  };
  stage.on("click", teacher6);
}

function teacher6() {
  stage.off("click");
  layer.children.splice(1);
  layer.draw();
  var box5 = new Konva.Rect({
    x: width / 2 - 160,
    y: height / 2 - 150,
    width: 300,
    height: 300,
    fill: "#FACD91"
  });
  var text5 = new Konva.Text({
    x: width / 2 - 150,
    y: height / 2 - 60,
    text: "现在初步认识了两种光\n的反射，来开始基于镜\n面反射的演示游戏吧！",
    fontSize: 28,
    fill: "#333",
    storke: "#333"
  });
  layer.add(box5);
  layer.add(text5);
  layer.draw();
  stage.on("click", gotoGame);
}

function gotoGame() {
  stage.off("click");
  layer.children.splice(1);
  layer.draw();
  var game1 = new Konva.Rect({
    x: width / 2 - 160,
    y: height / 2 - 150,
    width: 300,
    height: 300,
    fill: "#FACD91"
  });
  var text6 = new Konva.Text({
    x: width / 2 - 150,
    y: height / 2 - 60,
    text:
      "假设猫是发光源，老鼠\n不能动，猫可以沿着光\n线移动，需要指定数量\n的镜子当做反射面引导\n猫捉到老鼠",
    fontSize: 28,
    fill: "#333",
    storke: "#333"
  });
  layer.add(game1);
  layer.add(text6);
  layer.draw();
  stage.on("click", gotoGame1);
}

function drawMirror(n) {
  for (let i = 0; i <= n; i++) {
    var obj = {
      points: [topx + 300, topy + 600, topx + 350, topy + 650],
      stroke: "#FFFF00",
      tension: 1,
      draggable: i === 0 ? false : true,
      strokeWidth: 6
    };
    var mirror1 = new Konva.Line(obj);
    mirror1.on("mouseover", function() {
      document.body.style.cursor = "pointer";
    });
    mirror1.on("mouseout", function() {
      document.body.style.cursor = "default";
    });
    layer.add(mirror1);
  }
  layer.draw();
}

function gotoGame1() {
  stage.off("click");
  layer.children.splice(1);
  drawRect();
  drawObstacle(150, 275, 200, 100);
  layer.draw();
  drawMirror(2);
}
