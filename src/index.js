let width = 500;
let height = 650;
let numberText = 2;
let time = false;
let mirrorArr = [];
let directionCommon = true;

var stage = new Konva.Stage({
  container: "container",
  width,
  height,
});

var layer = new Konva.Layer();
stage.add(layer);

var box = new Konva.Rect({
  x: 0,
  y: 0,
  width: 500,
  height: 650,
  fill: "#EC808D",
});
layer.add(box);
// 第一屏
var boxContent = new Konva.Rect({
  x: 90,
  y: 175,
  width: 300,
  height: 300,
  fill: "#FACD91",
});

var textFirst = new Konva.Text({
  x: width / 2 - 150,
  y: height / 2 - 60,
  text: "开始游戏前，让我们先\n来了解下什么是光的\n             反射？",
  fontSize: 28,
  fill: "#333",
  storke: "#333",
});

layer.add(boxContent);
layer.add(textFirst);
layer.draw();
compatible(stage, drawSec);

// 公用的方法
function compatible(main, fun) {
  main.on("tap", fun);
  main.on("click", fun);
}

function offFunc(main) {
  main.off("tap");
  main.off("click");
}
// 写文字
function drawText() {
  var word = new Konva.Text({
    x: 330,
    y: 600,
    text: "x" + numberText,
    fontSize: 14,
    fill: "#fff",
    storke: "#fff",
    name: "number",
  });
  layer.add(word);
  layer.draw();
}

function drawLight(xs, yx, xe, ye, color = "#95F204") {
  var arrow = new Konva.Arrow({
    points: [xs, yx, xe, ye],
    pointerLength: 20,
    pointerWidth: 20,
    fill: color,
    stroke: color,
    strokeWidth: 4,
    name: "light",
  });
  layer.add(arrow);
  layer.draw();
}

// 绘制背景方格
function drawRect() {
  for (let i = 0; i < 11; i++) {
    var dashedLine = new Konva.Line({
      points: [width / 2 - 250, 50 * (i + 1), width / 2 + 250, 50 * (i + 1)],
      stroke: "#D7D7D7",
      tension: 1,
    });
    dashedLine.dash([5, 2]);
    layer.add(dashedLine);
  }
  for (let i = 0; i < 10; i++) {
    var dashedLine1 = new Konva.Line({
      points: [(i + 1) * 50, 0, (i + 1) * 50, 550],
      stroke: "#D7D7D7",
      tension: 1,
    });
    dashedLine1.dash([5, 2]);
    layer.add(dashedLine1);
  }
}

//画障碍物
function drawObstacle(x, y, w, h) {
  var rect = new Konva.Rect({
    x: x,
    y: y,
    width: w,
    height: h,
    fill: "#555555",
  });
  layer.add(rect);
  layer.draw();
}

// 绘制第二屏
function drawSec() {
  layer.children.splice(1, 2);
  layer.draw();
  offFunc(stage);
  // 第二屏
  var box2 = new Konva.Rect({
    x: width / 2 - 200,
    y: height / 2 - 280,
    width: 400,
    height: 200,
    fill: "#FACD91",
  });
  var text2 = new Konva.Text({
    x: width / 2 - 200,
    y: height / 2 - 250,
    text:
      "1.镜面反射：平行光线经界面反\n射后沿某一方向平行射出，只能\n在某一方向接收到反射光线\n（反射面是光滑平面）",
    fontSize: 28,
    fill: "#333",
    storke: "#333",
  });
  layer.add(box2);
  layer.add(text2);
  var imageObj = new Image();
  imageObj.src = "./images/mirror.jpeg";
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: width / 2 - 180,
      y: height / 2 - 20,
      image: imageObj,
      width: 360,
      height: 260,
    });

    layer.add(yoda);
    layer.draw();
  };
  layer.draw();

  compatible(stage, drawThird);
}

//绘制第三屏
function drawThird() {
  layer.children.splice(1);
  layer.draw();
  offFunc(stage);
  // 第三屏
  var box3 = new Konva.Rect({
    x: width / 2 - 200,
    y: height / 2 - 280,
    width: 400,
    height: 200,
    fill: "#FACD91",
  });
  var text3 = new Konva.Text({
    x: width / 2 - 200,
    y: height / 2 - 250,
    text:
      "2.漫反射：\n平行光经界面反射后向各个不同\n的方向反射出去，即在各个不同\n的方向都能接收到反射光线（反\n射面是粗糙平面或曲面） ",
    fontSize: 28,
    fill: "#333",
    storke: "#333",
  });
  layer.add(box3);
  layer.add(text3);
  var imageObj2 = new Image();
  imageObj2.src = "./images/man.jpeg";
  imageObj2.onload = function () {
    var yoda2 = new Konva.Image({
      x: width / 2 - 180,
      y: height / 2 - 20,
      image: imageObj2,
      width: 360,
      height: 260,
    });

    layer.add(yoda2);
    layer.draw();
  };
  layer.draw();
  compatible(stage, drawForth);
}
//绘制第四屏
function drawForth() {
  layer.children.splice(1);
  layer.draw();
  offFunc(stage);
  var box4 = new Konva.Rect({
    x: width / 2 - 160,
    y: height / 2 - 150,
    width: 300,
    height: 300,
    fill: "#FACD91",
  });
  var text4 = new Konva.Text({
    x: width / 2 - 150,
    y: height / 2 - 60,
    text:
      "现在初步认识了两种光\n的反射，让我们主要学\n习基于镜面反射的知识\n吧！",
    fontSize: 28,
    fill: "#333",
    storke: "#333",
  });

  layer.add(box4);
  layer.add(text4);
  layer.draw();
  compatible(stage, gotoTeach);
}

// 进入讲解关
function gotoTeach() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();
  var imageObj = new Image();
  imageObj.src = "./images/1.png";
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: width / 2 - 250,
      y: height / 2 - 325,
      image: imageObj,
      width: 500,
      height: 580,
    });
    layer.add(yoda);
    layer.draw();
  };
  compatible(stage, teacher2);
}

function teacher2() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();
  var imageObj = new Image();
  imageObj.src = "./images/2.png";
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: width / 2 - 250,
      y: height / 2 - 325,
      image: imageObj,
      width: 500,
      height: 580,
    });
    layer.add(yoda);
    layer.draw();
  };
  compatible(stage, teacher3);
}

function teacher3() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();
  var imageObj = new Image();
  imageObj.src = "./images/3.png";
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: width / 2 - 250,
      y: height / 2 - 325,
      image: imageObj,
      width: 500,
      height: 580,
    });
    layer.add(yoda);
    layer.draw();
  };
  compatible(stage, teacher4);
}

function teacher4() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();
  var imageObj = new Image();
  imageObj.src = "./images/4.png";
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: width / 2 - 250,
      y: height / 2 - 325,
      image: imageObj,
      width: 500,
      height: 580,
    });
    layer.add(yoda);
    layer.draw();
  };
  compatible(stage, anotherAngle);
}

function anotherAngle() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();
  var box5 = new Konva.Rect({
    x: width / 2 - 160,
    y: height / 2 - 150,
    width: 300,
    height: 300,
    fill: "#FACD91",
  });
  var text5 = new Konva.Text({
    x: width / 2 - 150,
    y: height / 2 - 60,
    text: "为了巩固刚刚学到的反\n射知识，下面再来看一\n个入射角不同的例子",
    fontSize: 28,
    fill: "#333",
    storke: "#333",
  });
  layer.add(box5);
  layer.add(text5);
  layer.draw();
  compatible(stage, teacher5);
}

function teacher5() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();
  var imageObj = new Image();
  imageObj.src = "./images/5.png";
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: width / 2 - 250,
      y: height / 2 - 325,
      image: imageObj,
      width: 500,
      height: 580,
    });
    layer.add(yoda);
    layer.draw();
  };
  compatible(stage, teacher6);
}

function teacher6() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();
  var box5 = new Konva.Rect({
    x: width / 2 - 160,
    y: height / 2 - 150,
    width: 300,
    height: 300,
    fill: "#FACD91",
  });
  var text5 = new Konva.Text({
    x: width / 2 - 150,
    y: height / 2 - 60,
    text: "现在初步认识了两种光\n的反射，来开始基于镜\n面反射的演示游戏吧！",
    fontSize: 28,
    fill: "#333",
    storke: "#333",
  });
  layer.add(box5);
  layer.add(text5);
  layer.draw();
  compatible(stage, gotoGame);
}

function gotoGame() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();
  var game1 = new Konva.Rect({
    x: width / 2 - 160,
    y: height / 2 - 150,
    width: 300,
    height: 300,
    fill: "#FACD91",
  });
  var text6 = new Konva.Text({
    x: width / 2 - 150,
    y: height / 2 - 60,
    text:
      "假设猫是发光源，老鼠\n不能动，猫可以沿着光\n线移动，需要指定数量\n的镜子当做反射面引导\n猫捉到老鼠",
    fontSize: 28,
    fill: "#333",
    storke: "#333",
  });
  layer.add(game1);
  layer.add(text6);
  layer.draw();
  compatible(stage, gotoGame1);
}

// 画结算三角
function drawEnd() {
  var star = new Konva.RegularPolygon({
    x: 460,
    y: 620,
    sides: 3,
    radius: 30,
    fill: "#699BC8",
    strokeWidth: 4,
    rotation: 90,
  });
  star.on("mouseover", function () {
    document.body.style.cursor = "pointer";
  });
  star.on("mouseout", function () {
    document.body.style.cursor = "default";
  });
  compatible(star, clickEnd);
  layer.add(star);
  layer.draw();
}

function drawMirror(n) {
  for (let i = 0; i <= n; i++) {
    var obj = {
      points: [300, 600, 350, 650],
      stroke: "#FFFF00",
      tension: 1,
      draggable: i === 0 ? false : true,
      strokeWidth: 6,
    };
    var mirror1 = new Konva.Line(obj);
    mirror1.on("mouseover", function () {
      document.body.style.cursor = "pointer";
    });
    mirror1.on("mouseout", function () {
      document.body.style.cursor = "default";
    });
    layer.add(mirror1);
    mirror1.on("dragend", dragendFun);
    mirror1.on("dragstart", dragstart);
    mirror1.on("dragmove", drag);
  }
  time = false;
  drawText();
}

function dragstart(e) {
  let xOffset = e.evt.offsetX
    ? Math.floor(e.evt.offsetX / 50) * 50
    : e.currentTarget.attrs.points[0];
  let yOffset = e.evt.offsetY
    ? Math.floor(e.evt.offsetY / 50) * 50
    : e.currentTarget.attrs.points[1];
  for (let i = 0; i < mirrorArr.length; i++) {
    if (mirrorArr[i][0] === xOffset && mirrorArr[i][1] === yOffset) {
      directionCommon = mirrorArr[i][2];
      mirrorArr.splice(i, 1);
      break;
    }
  }
}

function drag() {
  time = true;
}

// 拖拽结束后判定动画
function dragendFun(e) {
  if (time) {
    let xOffset = e.evt.offsetX
      ? e.evt.offsetX
      : e.currentTarget.attrs.points[0] + e.currentTarget.attrs.x;
    let yOffset = e.evt.offsetY
      ? e.evt.offsetY
      : e.currentTarget.attrs.points[1] + e.currentTarget.attrs.y;
    xOffset = Math.floor(xOffset / 50) * 50;
    yOffset = Math.floor(yOffset / 50) * 50;
    time = false;
    e.target.drag = true;
    let x = -1;
    for (let i = 0; i < layer.children.length; i++) {
      let item = layer.children[i];
      if (item.drag) {
        x = i;
        break;
      }
    }
    layer.children.splice(x, 1);

    let mirror1 = new Konva.Line({
      points: directionCommon
        ? [xOffset, yOffset, xOffset + 50, yOffset + 50]
        : [xOffset + 50, yOffset, xOffset, yOffset + 50],
      stroke: "#FFFF00",
      tension: 1,
      draggable: true,
      strokeWidth: 6,
    });
    mirror1.on("mouseover", function () {
      document.body.style.cursor = "pointer";
    });
    mirror1.on("mouseout", function () {
      document.body.style.cursor = "default";
    });
    mirror1.on("dragend", dragendFun);
    mirror1.on("dragmove", drag);
    mirror1.on("dragstart", dragstart);
    mirrorArr.push([xOffset, yOffset, directionCommon]);
    layer.add(mirror1);
    let textNum = -1;
    for (let i = 0; i < layer.children.length; i++) {
      let item = layer.children[i];
      if (item.attrs.name) {
        textNum = i;
        break;
      }
    }
    layer.children.splice(textNum, 1);
    let leftNum = numberText - mirrorArr.length;
    let txt = new Konva.Text({
      x: 330,
      y: 600,
      text: "x" + leftNum,
      fontSize: 14,
      fill: "#fff",
      storke: "#fff",
      name: "number",
    });
    layer.add(txt);
    layer.draw();
    directionCommon = true;
  } else {
    let startX = e.evt.offsetX ? e.evt.offsetX : e.target.attrs.points[0];
    let startY = e.evt.offsetY ? e.evt.offsetY : e.target.attrs.points[1];
    if (startX >= 0 && startX <= 500 && startY >= 0 && startY <= 550) {
      e.target.change = true;
      let x = -1;
      for (let i = 0; i < layer.children.length; i++) {
        let item = layer.children[i];
        if (item.change) {
          x = i;
          break;
        }
      }
      layer.children.splice(x, 1);
      let direction = true;
      let xOffset = Math.floor(startX / 50) * 50;
      let yOffset = Math.floor(startY / 50) * 50;

      for (let i = 0; i < mirrorArr.length; i++) {
        if (mirrorArr[i][0] === xOffset && mirrorArr[i][1] === yOffset) {
          direction = mirrorArr[i][2];
          mirrorArr.splice(i, 1);
          break;
        }
      }

      mirrorArr.push([xOffset, yOffset, !direction]);
      let mirror1 = new Konva.Line({
        points: !direction
          ? [xOffset, yOffset, xOffset + 50, yOffset + 50]
          : [xOffset + 50, yOffset, xOffset, yOffset + 50],
        stroke: "#FFFF00",
        tension: 1,
        draggable: true,
        strokeWidth: 6,
      });
      mirror1.on("mouseover", function () {
        document.body.style.cursor = "pointer";
      });
      mirror1.on("mouseout", function () {
        document.body.style.cursor = "default";
      });
      mirror1.on("dragend", dragendFun);
      mirror1.on("dragmove", drag);
      mirror1.on("dragstart", dragstart);
      layer.add(mirror1);
      layer.draw();
    }
  }
}

function drawCatAndMouse() {
  var cat = new Image();
  cat.src = "./images/cat.jpg"; // 设置图片路径
  cat.onload = function () {
    var catImg = new Konva.Image({
      x: 50,
      y: 250,
      image: cat,
      width: 50,
      height: 50,
    });
    layer.add(catImg); // 添加图片对象到画布
    layer.draw(); // 渲染
  };
  var mouse = new Image();
  mouse.src = "./images/mouse.jpg"; // 设置图片路径
  mouse.onload = function () {
    var mouseImg = new Konva.Image({
      x: 400,
      y: 250,
      image: mouse,
      width: 50,
      height: 50,
    });
    layer.add(mouseImg); // 添加图片对象到画布
    layer.draw(); // 渲染
  };
}

function gotoGame1() {
  offFunc(stage);
  layer.children.splice(1);
  drawRect();
  drawObstacle(150, 200, 200, 150);
  drawCatAndMouse();
  layer.draw();
  drawMirror(2);
  drawEnd();
}

function showReStart(n) {
  layer.children.splice(1);
  var text = new Konva.Text({
    x: 100,
    y: 270,
    text: "不好意思您失败了，\n请点击屏幕重新开始",
    fontSize: 34,
    fill: "#FFFF00",
    storke: "#FFFF00",
  });
  layer.add(text);
  layer.draw(); // 渲染
  if (n === 1) {
    setTimeout(() => {
      compatible(stage, gotoGame1);
    }, 500);
    mirrorArr = [];
    numberText = 2;
  } else {
    setTimeout(() => {
      compatible(stage, gotoGame2);
    }, 500);
    mirrorArr = [];
    numberText = 4;
  }
}

// 第一关结算方法
function clickEnd() {
  let xArr = [];
  let yArr = [];
  let dir = [];
  mirrorArr.forEach((item) => {
    xArr.push(item[0]);
    yArr.push(item[1]);
    dir.push(item[2]);
  });
  if (xArr.indexOf(50) >= 0) {
    let index = xArr.indexOf(50);
    let y = yArr[index];
    if (y < 200) {
      drawLight(75, 250, 75, y + 25);
      if (dir[index]) {
        drawLight(75, y + 25, 0, y + 25);

        setTimeout(() => {
          showReStart(1);
        }, 500);
      } else {
        xArr.splice(index, 1);
        yArr.splice(index, 1);
        dir.splice(index, 1);
        if (xArr.length > 0) {
          if (yArr.includes(y)) {
            let yPos = yArr.indexOf(y);
            let xPos = xArr[yPos];
            let dirPos = dir[yPos];
            drawLight(75, y + 25, xPos + 25, y + 25);
            if (dirPos) {
              if (xPos === 100) {
                drawLight(xPos + 25, y + 25, xPos + 25, 550);
                setTimeout(() => {
                  showReStart(1);
                }, 500);
              } else if (
                xPos === 150 ||
                xPos === 200 ||
                xPos === 250 ||
                xPos === 300
              ) {
                drawLight(xPos + 25, y + 25, xPos + 25, 200);
                setTimeout(() => {
                  showReStart(1);
                }, 500);
              } else if (xPos === 350 || xPos === 450) {
                drawLight(xPos + 25, y + 25, xPos + 25, 550);
                setTimeout(() => {
                  showReStart(1);
                }, 500);
              } else {
                drawLight(xPos + 25, y + 25, xPos + 25, 250);
                //成功
                // pictureAni(50, y, xPos, y)
                setTimeout(() => {
                  successPage();
                }, 1000);
              }
            } else {
              drawLight(xPos + 25, y + 25, xPos + 25, 0);
              setTimeout(() => {
                showReStart(1);
              }, 500);
            }
          } else {
            drawLight(75, y + 25, 500, y + 25);
            setTimeout(() => {
              showReStart(1);
            }, 500);
          }
        } else {
          drawLight(75, y + 25, 500, y + 25);
          setTimeout(() => {
            showReStart(1);
          }, 500);
        }
      }
    }
    if (y > 300) {
      drawLight(75, 300, 75, y + 25);
      if (dir[index]) {
        xArr.splice(index, 1);
        yArr.splice(index, 1);
        dir.splice(index, 1);
        if (xArr.length > 0) {
          if (yArr.includes(y)) {
            let yPos = yArr.indexOf(y);
            let xPos = xArr[yPos];
            let dirPos = dir[yPos];
            drawLight(75, y + 25, xPos + 25, y + 25);
            if (dirPos) {
              drawLight(xPos + 25, y + 25, xPos + 25, 550);
              setTimeout(() => {
                showReStart(1);
              }, 500);
            } else {
              if (xPos === 100) {
                drawLight(xPos + 25, y + 25, xPos + 25, 0);
                setTimeout(() => {
                  showReStart(1);
                }, 500);
              } else if (
                xPos === 150 ||
                xPos === 200 ||
                xPos === 250 ||
                xPos === 300
              ) {
                drawLight(xPos + 25, y + 25, xPos + 25, 350);
                setTimeout(() => {
                  showReStart(1);
                }, 500);
              } else if (xPos === 350 || xPos === 450) {
                drawLight(xPos + 25, y + 25, xPos + 25, 0);
                setTimeout(() => {
                  showReStart(1);
                }, 500);
              } else {
                drawLight(xPos + 25, y + 25, xPos + 25, 300);
                //成功
                // pictureAni(50, y, xPos, y)
                setTimeout(() => {
                  successPage();
                }, 1000);
              }
            }
          } else {
            drawLight(75, y + 25, 500, y + 25);
            setTimeout(() => {
              showReStart(1);
            }, 500);
          }
        } else {
          drawLight(75, y + 25, 500, y + 25);
          setTimeout(() => {
            showReStart(1);
          }, 500);
        }
      } else {
        drawLight(75, y + 25, 0, y + 25);
        setTimeout(() => {
          showReStart(1);
        }, 500);
      }
    }
  } else {
    drawLight(75, 250, 75, 0);
    drawLight(75, 300, 75, 550);
    setTimeout(() => {
      showReStart(1);
    }, 500);
  }
}

function successPage() {
  layer.children.splice(1);
  var success = new Image();
  success.src = "./images/good.jpg"; // 设置图片路径
  success.onload = function () {
    var successImg = new Konva.Image({
      x: 150,
      y: 20,
      image: success,
      width: 200,
      height: 200,
    });
    layer.add(successImg); // 添加图片对象到画布
    var word = new Konva.Text({
      x: 150,
      y: 270,
      text: "Congratulations\n你太棒了！\n第二关稍加了点\n难度，加油哦！",
      fontSize: 34,
      fill: "#FFFF00",
      storke: "#FFFF00",
    });
    compatible(stage, gotoGame2);
    layer.add(word);
    layer.draw(); // 渲染
  };
}

function drawPoliceAndThief() {
  var police = new Image();
  police.src = "./images/thief.jpg"; // 设置图片路径
  police.onload = function () {
    var policeImg = new Konva.Image({
      x: 250,
      y: 200,
      image: police,
      width: 50,
      height: 50,
    });
    layer.add(policeImg); // 添加图片对象到画布
    layer.draw(); // 渲染
  };
  var thief = new Image();
  thief.src = "./images/police.jpg"; // 设置图片路径
  thief.onload = function () {
    var thiefImg = new Konva.Image({
      x: 250,
      y: 300,
      image: thief,
      width: 50,
      height: 50,
    });
    layer.add(thiefImg); // 添加图片对象到画布
    layer.draw(); // 渲染
  };
}

function gotoGame2() {
  numberText = 4;
  mirrorArr = [];
  offFunc(stage);
  layer.children.splice(1);
  drawRect();
  drawObstacle(200, 50, 150, 50);
  drawObstacle(200, 200, 150, 150);
  drawObstacle(200, 450, 150, 50);
  drawPoliceAndThief();
  layer.draw();
  drawMirror(4);
  drawEnd2();
}

function drawEnd2() {
  var star = new Konva.RegularPolygon({
    x: 460,
    y: 620,
    sides: 3,
    radius: 30,
    fill: "#699BC8",
    strokeWidth: 4,
    rotation: 90,
  });
  star.on("mouseover", function () {
    document.body.style.cursor = "pointer";
  });
  star.on("mouseout", function () {
    document.body.style.cursor = "default";
  });
  setTimeout(() => {
    compatible(star, clickEnd2);
  }, 500);
  layer.add(star);
  layer.draw();
}

function clickEnd2() {
  const arr = mirrorArr.filter((item) => item[0] === 250);
  const firstArr = arr.filter((item) => item[1] > 300);
  if (firstArr.length > 0) {
    drawLight(275, 350, 275, firstArr[0][1] + 25);
    for (let i = 0; i < mirrorArr.length; i++) {
      if (mirrorArr[i][0] === 250 && mirrorArr[i][1] === firstArr[0][1]) {
        mirrorArr.splice(i, 1);
        i--;
      }
    }
    if (firstArr[0][2]) {
      const secondArr = mirrorArr.filter((item) => item[1] === firstArr[0][1]);
      const secondX = secondArr.filter((item) => item[0] > 250);
      if (secondX.length > 0) {
        drawLight(
          275,
          firstArr[0][1] + 25,
          secondX[0][0] + 25,
          firstArr[0][1] + 25
        );
        for (let i = 0; i < mirrorArr.length; i++) {
          if (
            mirrorArr[i][0] === secondX[0][0] &&
            mirrorArr[i][1] === firstArr[0][1]
          ) {
            mirrorArr.splice(i, 1);
            i--;
          }
        }
        if (secondX[0][2]) {
          // drawLight()
          setTimeout(() => {
            showReStart(2);
          }, 500);
        } else {
          const thirdArr = mirrorArr.filter(
            (item) => item[0] === secondX[0][0]
          );
          const thirdY = thirdArr.filter(
            (item) => item[1] < 200 && item[1] > 50
          );
          if (thirdY.length > 0) {
            drawLight(
              secondX[0][0] + 25,
              firstArr[0][1] + 25,
              secondX[0][0] + 25,
              thirdY[0][1] + 25
            );
            for (let i = 0; i < mirrorArr.length; i++) {
              if (
                mirrorArr[i][0] === secondX[0][0] &&
                mirrorArr[i][1] === thirdY[0][1]
              ) {
                mirrorArr.splice(i, 1);
                i--;
              }
            }
            if (thirdY[0][2]) {
              const forthArr = mirrorArr.filter(
                (item) => item[1] === thirdY[0][1]
              );
              const forthX = forthArr.filter((item) => item[0] === 250);
              if (forthX.length > 0) {
                drawLight(
                  secondX[0][0] + 25,
                  thirdY[0][1] + 25,
                  275,
                  thirdY[0][1] + 25
                );
                if (forthX[0][2]) {
                  drawLight(275, thirdY[0][1] + 25, 275, 100);
                  setTimeout(() => {
                    showReStart(2);
                  }, 500);
                } else {
                  drawLight(275, thirdY[0][1] + 25, 275, 200);
                  setTimeout(() => {
                    successPage2();
                  }, 1000);
                }
              }
            } else {
              drawLight(
                secondX[0][0] + 25,
                thirdY[0][1] + 25,
                secondX[0][0] + 25,
                500
              );
              setTimeout(() => {
                showReStart(2);
              }, 500);
            }
          } else {
            drawLight(
              secondX[0][0] + 25,
              firstArr[0][1] + 25,
              secondX[0][0] + 25,
              0
            );
            setTimeout(() => {
              showReStart(2);
            }, 500);
          }
        }
      } else {
        drawLight(275, firstArr[0][1] + 25, 500, firstArr[0][1] + 25);
        setTimeout(() => {
          showReStart(2);
        }, 500);
      }
    } else {
      const secondArr = mirrorArr.filter((item) => item[1] === firstArr[0][1]);
      const secondX = secondArr.filter((item) => item[0] < 250);
      if (secondX.length > 0) {
        drawLight(
          275,
          firstArr[0][1] + 25,
          secondX[0][0] + 25,
          firstArr[0][1] + 25
        );
        for (let i = 0; i < mirrorArr.length; i++) {
          if (
            mirrorArr[i][0] === secondX[0][0] &&
            mirrorArr[i][1] === firstArr[0][1]
          ) {
            mirrorArr.splice(i, 1);
            i--;
          }
        }
        if (secondX[0][2]) {
          const thirdArr = mirrorArr.filter(
            (item) => item[0] === secondX[0][0]
          );
          const thirdY = thirdArr.filter(
            (item) => item[1] < 200 && item[1] > 50
          );
          if (thirdY.length > 0) {
            drawLight(
              secondX[0][0] + 25,
              firstArr[0][1] + 25,
              secondX[0][0] + 25,
              thirdY[0][1] + 25
            );
            for (let i = 0; i < mirrorArr.length; i++) {
              if (
                mirrorArr[i][0] === secondX[0][0] &&
                mirrorArr[i][1] === thirdY[0][1]
              ) {
                mirrorArr.splice(i, 1);
                i--;
              }
            }
            if (thirdY[0][2]) {
              drawLight(
                secondX[0][0] + 25,
                thirdY[0][1] + 25,
                secondX[0][0] + 25,
                500
              );
              setTimeout(() => {
                showReStart(2);
              }, 500);
            } else {
              const forthArr = mirrorArr.filter(
                (item) => item[1] === thirdY[0][1]
              );
              const forthX = forthArr.filter((item) => item[0] === 250);
              if (forthX.length > 0) {
                drawLight(
                  secondX[0][0] + 25,
                  thirdY[0][1] + 25,
                  275,
                  thirdY[0][1] + 25
                );
                if (forthX[0][2]) {
                  drawLight(275, thirdY[0][1] + 25, 275, 200);
                  setTimeout(() => {
                    successPage2();
                  }, 1000);
                } else {
                  drawLight(275, thirdY[0][1] + 25, 275, 100);
                  setTimeout(() => {
                    showReStart(2);
                  }, 500);
                }
              }
            }
          } else {
            drawLight(
              secondX[0][0] + 25,
              firstArr[0][1] + 25,
              secondX[0][0] + 25,
              0
            );
            setTimeout(() => {
              showReStart(2);
            }, 500);
          }
        } else {
          // drawLight()
          setTimeout(() => {
            showReStart(2);
          }, 500);
        }
      } else {
        drawLight(275, firstArr[0][1] + 25, 0, firstArr[0][1] + 25);
      }
    }
  } else {
    drawLight(275, 350, 275, 450);
    setTimeout(() => {
      showReStart(2);
    }, 500);
  }
}

function successPage2() {
  layer.children.splice(1);
  var success = new Image();
  success.src = "./images/good.jpg"; // 设置图片路径
  success.onload = function () {
    var successImg = new Konva.Image({
      x: 150,
      y: 20,
      image: success,
      width: 200,
      height: 200,
    });
    layer.add(successImg); // 添加图片对象到画布
    var word = new Konva.Text({
      x: 150,
      y: 270,
      text:
        "Congratulations\n你太棒了！\n\n通过二关游戏，你\n已经充分掌握了\n光的反射原理，\n下面让我们学习\n光的折射",
      fontSize: 34,
      fill: "#FFFF00",
      storke: "#FFFF00",
    });
    compatible(stage, gotoZheshe);
    layer.add(word);
    layer.draw(); // 渲染
  };
}
function gotoZheshe() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();
  var game1 = new Konva.Rect({
    x: width / 2 - 160,
    y: height / 2 - 150,
    width: 300,
    height: 300,
    fill: "#FACD91",
  });
  var text6 = new Konva.Text({
    x: width / 2 - 150,
    y: height / 2 - 60,
    text: "前面我们熟悉了光的反\n射，下面来了解光的\n折射",
    fontSize: 28,
    fill: "#333",
    storke: "#333",
  });
  layer.add(game1);
  layer.add(text6);
  layer.draw();
  compatible(stage, zheshe1);
}
function zheshe1() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();
  // 第二屏
  var box2 = new Konva.Rect({
    x: width / 2 - 230,
    y: height / 2 - 310,
    width: 460,
    height: 120,
    fill: "#FACD91",
  });
  var text2 = new Konva.Text({
    x: width / 2 - 200,
    y: height / 2 - 290,
    text:
      "光的折射：光从一种介质射入另\n一种介质时，传播方向会发生偏\n折，这种现象就叫做光的折射",
    fontSize: 28,
    fill: "#333",
    storke: "#333",
  });
  layer.add(box2);
  layer.add(text2);
  var imageObj = new Image();
  imageObj.src = "./images/mirror.jpeg";
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: width / 2 - 230,
      y: height / 2 - 150,
      image: imageObj,
      width: 230,
      height: 200,
    });

    layer.add(yoda);
    layer.draw();
  };

  // 图2
  var imageObj1 = new Image();
  imageObj1.src = "./images/zheshe1.jpg";
  imageObj1.onload = function () {
    var yoda1 = new Konva.Image({
      x: width / 2 + 5,
      y: height / 2 - 150,
      image: imageObj1,
      width: 225,
      height: 200,
    });

    layer.add(yoda1);
    layer.draw();
  };

  var box3 = new Konva.Rect({
    x: width / 2 - 230,
    y: height / 2 + 90,
    width: 460,
    height: 200,
    fill: "#FACD91",
  });
  var text3 = new Konva.Text({
    x: width / 2 - 220,
    y: height / 2 + 110,
    text:
      "光的折射与光的反射一样都是发生在两种介质\n的交界处，只是反射光返回原介质中，\n而折射光则进入到另一种介质中。\n由于光在在两种不同的物质里传播速度不同，\n故在两种介质的交界处传播方向发生变化，\n这就是光的折射",
    fontSize: 22,
    fill: "#333",
    storke: "#333",
  });
  layer.add(box3);
  layer.add(text3);
  layer.draw();
  compatible(stage, zheshe2);
}

function zheshe2() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();
  var imageObj = new Image();
  imageObj.src = "./images/zheshe2.png";
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: width / 2 - 250,
      y: height / 2 - 325,
      image: imageObj,
      width: 500,
      height: 580,
    });
    layer.add(yoda);
    layer.draw();
  };
  compatible(stage, zheshe3);
}

function zheshe3() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();
  var imageObj = new Image();
  imageObj.src = "./images/zheshe3.png";
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: width / 2 - 250,
      y: height / 2 - 325,
      image: imageObj,
      width: 500,
      height: 580,
    });
    layer.add(yoda);
    layer.draw();
  };
  compatible(stage, zheshe4);
}
function zheshe4() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();
  var imageObj = new Image();
  imageObj.src = "./images/zheshe4.png";
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: width / 2 - 250,
      y: height / 2 - 325,
      image: imageObj,
      width: 500,
      height: 580,
    });
    layer.add(yoda);
    layer.draw();
  };
  compatible(stage, zhesheGame);
}
function zhesheGame() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();
  var game1 = new Konva.Rect({
    x: width / 2 - 160,
    y: height / 2 - 150,
    width: 300,
    height: 300,
    fill: "#FACD91",
  });
  var text6 = new Konva.Text({
    x: width / 2 - 150,
    y: height / 2 - 60,
    text: "熟悉了光的折射，我们\n赶紧来通过游戏加深\n印象吧！",
    fontSize: 28,
    fill: "#333",
    storke: "#333",
  });
  layer.add(game1);
  layer.add(text6);
  layer.draw();
  compatible(stage, zhesheGame2);
}
function zhesheGame2() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();

  let obj = {
    points: [50, 250, 450, 250],
    stroke: "#7F7F7F",
    tension: 1,
    strokeWidth: 6,
  };
  let line = new Konva.Line(obj);
  let dashLineObj = {
    points: [250, 50, 250, 450],
    stroke: "#0000FF",
    tension: 1,
    strokeWidth: 2,
  };
  let line1 = new Konva.Line(dashLineObj);

  line1.dash([5, 2]);
  layer.add(line);
  layer.add(line1);
  var imageObj = new Image();
  imageObj.src = "./images/eye.jpeg";
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: width / 2 + 80,
      y: height / 2 - 220,
      image: imageObj,
      width: 100,
      height: 60,
    });

    layer.add(yoda);
    layer.draw();
  };
  var imageObj1 = new Image();
  imageObj1.src = "./images/fish.png";
  imageObj1.onload = function () {
    var yoda1 = new Konva.Image({
      x: width / 2 - 180,
      y: height / 2 + 20,
      image: imageObj1,
      width: 100,
      height: 60,
    });

    layer.add(yoda1);
    layer.draw();
  };

  var lineLightObj = {
    points: [350, 150, 250, 250],
    stroke: "#FFFF00",
    tension: 1,
    strokeWidth: 2,
  };
  var zhesheLightObj = {
    points: [250, 250, 150, 350],
    stroke: "#FFFF00",
    tension: 1,
    strokeWidth: 2,
  };
  let lineLight = new Konva.Line(lineLightObj);
  let lineLight2 = new Konva.Line(zhesheLightObj);
  layer.add(lineLight);
  layer.add(lineLight2);

  let textRect = new Konva.Rect({
    x: 20,
    y: 440,
    width: 450,
    height: 170,
    fill: "#FACD91",
  });
  layer.add(textRect);

  let textTips = new Konva.Text({
    x: 40,
    y: 460,
    text:
      "如果你在岸上，看到了池水中的鱼，\n只能瞄准选择鱼的上下左右4个\n按键之一来去捕鱼，请点击图中\n的按钮进行选择。",
    fontSize: 28,
    fill: "#333",
    storke: "#333",
  });
  layer.add(textTips);

  let airRect = new Konva.Rect({
    x: 400,
    y: 200,
    width: 40,
    height: 30,
    fill: "#81D3F8",
  });
  let airText = new Konva.Text({
    x: 400,
    y: 210,
    text: "空气",
    fontSize: 18,
    fill: "#333",
    storke: "#333",
  });
  let waterRect = new Konva.Rect({
    x: 400,
    y: 270,
    width: 40,
    height: 30,
    fill: "#81D3F8",
  });
  let waterText = new Konva.Text({
    x: 410,
    y: 280,
    text: "水",
    fontSize: 18,
    fill: "#333",
    storke: "#333",
  });

  let aRect = new Konva.Rect({
    x: 100,
    y: 290,
    width: 60,
    height: 30,
    fill: "#81D3F8",
  });
  let aText = new Konva.Text({
    x: 120,
    y: 293,
    text: "A",
    fontSize: 28,
    fill: "#333",
    storke: "#333",
  });
  let bRect = new Konva.Rect({
    x: 190,
    y: 350,
    width: 40,
    height: 30,
    fill: "#81D3F8",
  });
  let bText = new Konva.Text({
    x: 200,
    y: 353,
    text: "B",
    fontSize: 28,
    fill: "#333",
    storke: "#333",
  });
  let cRect = new Konva.Rect({
    x: 100,
    y: 409,
    width: 50,
    height: 30,
    fill: "#81D3F8",
  });
  let cText = new Konva.Text({
    x: 115,
    y: 413,
    text: "C",
    fontSize: 28,
    fill: "#333",
    storke: "#333",
  });
  let dRect = new Konva.Rect({
    x: 15,
    y: 350,
    width: 50,
    height: 30,
    fill: "#81D3F8",
  });
  let dText = new Konva.Text({
    x: 30,
    y: 350,
    text: "D",
    fontSize: 28,
    fill: "#333",
    storke: "#333",
  });

  layer.add(waterRect);
  layer.add(waterText);
  layer.add(airRect);
  layer.add(airText);
  layer.add(aRect);
  layer.add(aText);
  layer.add(bRect);
  layer.add(bText);
  layer.add(cRect);
  layer.add(cText);
  layer.add(dRect);
  layer.add(dText);

  layer.draw();
  aRect.on("mouseover", function () {
    document.body.style.cursor = "pointer";
  });
  aText.on("mouseover", function () {
    document.body.style.cursor = "pointer";
  });
  aRect.on("mouseout", function () {
    document.body.style.cursor = "default";
  });
  aText.on("mouseout", function () {
    document.body.style.cursor = "default";
  });

  bRect.on("mouseover", function () {
    document.body.style.cursor = "pointer";
  });
  bRect.on("mouseout", function () {
    document.body.style.cursor = "default";
  });
  bText.on("mouseover", function () {
    document.body.style.cursor = "pointer";
  });
  bText.on("mouseout", function () {
    document.body.style.cursor = "default";
  });

  cRect.on("mouseover", function () {
    document.body.style.cursor = "pointer";
  });
  cRect.on("mouseout", function () {
    document.body.style.cursor = "default";
  });
  cText.on("mouseover", function () {
    document.body.style.cursor = "pointer";
  });
  cText.on("mouseout", function () {
    document.body.style.cursor = "default";
  });

  dRect.on("mouseover", function () {
    document.body.style.cursor = "pointer";
  });
  dRect.on("mouseout", function () {
    document.body.style.cursor = "default";
  });
  dText.on("mouseover", function () {
    document.body.style.cursor = "pointer";
  });
  dText.on("mouseout", function () {
    document.body.style.cursor = "default";
  });
  compatible(aRect, errorFun);
  compatible(aText, errorFun);
  compatible(bRect, errorFun);
  compatible(bText, errorFun);
  compatible(cRect, rightFun);
  compatible(cText, rightFun);
  compatible(dRect, errorFun);
  compatible(dText, errorFun);
}

function errorFun() {
  // offFunc(aRect);
  // offFunc(aText);
  // offFunc(bRect);
  // offFunc(bText);
  // offFunc(cRect);
  // offFunc(cText);
  // offFunc(dRect);
  // offFunc(dText);
  layer.children.splice(1);
  var word = new Konva.Text({
    x: 130,
    y: 270,
    text: "很遗憾选择错误，\n下面来看下原因吧",
    fontSize: 34,
    fill: "#FFFF00",
    storke: "#FFFF00",
  });
  layer.add(word);
  layer.draw(); // 渲染

  setTimeout(() => {
    compatible(stage, reasonPic1);
  }, 500);
}
function rightFun() {
  layer.children.splice(1);
  var success = new Image();
  success.src = "./images/good.jpg"; // 设置图片路径
  success.onload = function () {
    var successImg = new Konva.Image({
      x: 150,
      y: 20,
      image: success,
      width: 200,
      height: 200,
    });
    layer.add(successImg); // 添加图片对象到画布
    var word = new Konva.Text({
      x: 150,
      y: 270,
      text: "Congratulations\n恭喜你闯完\n最后一关！",
      fontSize: 34,
      fill: "#FFFF00",
      storke: "#FFFF00",
    });
    layer.add(word);
    layer.draw(); // 渲染
  };
}

function reasonPic1() {
  offFunc(stage);
  layer.children.splice(1);
  layer.draw();

  let obj = {
    points: [50, 250, 450, 250],
    stroke: "#7F7F7F",
    tension: 1,
    strokeWidth: 6,
  };
  let line = new Konva.Line(obj);
  let dashLineObj = {
    points: [250, 50, 250, 450],
    stroke: "#0000FF",
    tension: 1,
    strokeWidth: 2,
  };
  let line1 = new Konva.Line(dashLineObj);

  line1.dash([5, 2]);
  layer.add(line);
  layer.add(line1);
  var imageObj = new Image();
  imageObj.src = "./images/eye.jpeg";
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: width / 2 + 80,
      y: height / 2 - 220,
      image: imageObj,
      width: 100,
      height: 60,
    });

    layer.add(yoda);
    layer.draw();
  };
  var imageObj1 = new Image();
  imageObj1.src = "./images/fish.png";
  imageObj1.onload = function () {
    var yoda1 = new Konva.Image({
      x: width / 2 - 180,
      y: height / 2 - 20,
      image: imageObj1,
      width: 100,
      height: 60,
    });

    layer.add(yoda1);
    layer.draw();
  };
  var imageObj2 = new Image();
  imageObj2.src = "./images/fish.png";
  imageObj2.onload = function () {
    var yoda1 = new Konva.Image({
      x: width / 2 - 180,
      y: height / 2 + 50,
      image: imageObj2,
      width: 100,
      height: 60,
    });

    layer.add(yoda1);
    layer.draw();
  };

  drawLight(350, 150, 250, 240, "#0000FF");
  drawLight(250, 240, 170, 315, "#0000FF");
  drawLight(170, 380, 250, 250);
  drawLight(250, 250, 350, 160);

  let textRect = new Konva.Rect({
    x: 20,
    y: 440,
    width: 450,
    height: 170,
    fill: "#FACD91",
  });
  layer.add(textRect);

  let textTips = new Konva.Text({
    x: 40,
    y: 460,
    text:
      "从鱼身上反射出的光线由水中进入空气时，在水面上\n发生折射，折射角大于入射角，折射光线进入人眼，\n人眼会逆着折射光线的方向看去，\n就会觉得鱼变浅了，眼睛看到的是鱼的虚像，\n在鱼的上方，所以叉鱼时要瞄准像的下方。\n温馨提示：由于光的折射，\n在岸边看到的池水会比实际深度浅，\n所以不要贸然下去。",
    fontSize: 18,
    fill: "#333",
    storke: "#333",
  });
  layer.add(textTips);
  setTimeout(() => {
    compatible(stage, rightFun);
  }, 500);
}
