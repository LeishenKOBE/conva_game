let width = 500;
let height = 650;
let numberText = 2;
let time = false;
let mirrorArr = [];
let directionCommon = true

var stage = new Konva.Stage({
	container: "container",
	width,
	height
});

var layer = new Konva.Layer();
stage.add(layer);

var box = new Konva.Rect({
	x: 0,
	y: 0,
	width: 500,
	height: 650,
	fill: "#EC808D"
});
layer.add(box);
// 第一屏
var boxContent = new Konva.Rect({
	x: 90,
	y: 175,
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
		text: "1.镜面反射：平行光线经界面反\n射后沿某一方向平行射出，只能\n在某一方向接收到反射光线\n（反射面是光滑平面）",
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
		text: "2.漫反射：\n平行光经界面反射后向各个不同\n的方向反射出去，即在各个不同\n的方向都能接收到反射光线（反\n射面是粗糙平面或曲面） ",
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
		text: "现在初步认识了两种光\n的反射，让我们主要学\n习基于镜面反射的知识\n吧！",
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
			points: [width / 2 - 250, 50 * (i + 1), width / 2 + 250, 50 * (i + 1)],
			stroke: "#D7D7D7",
			tension: 1
		});
		dashedLine.dash([5, 2]);
		layer.add(dashedLine);
	}
	for (let i = 0; i < 10; i++) {
		var dashedLine = new Konva.Line({
			points: [(i + 1) * 50, 0, (i + 1) * 50, 550],
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
		x: x,
		y: y,
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
		text: "假设猫是发光源，老鼠\n不能动，猫可以沿着光\n线移动，需要指定数量\n的镜子当做反射面引导\n猫捉到老鼠",
		fontSize: 28,
		fill: "#333",
		storke: "#333"
	});
	layer.add(game1);
	layer.add(text6);
	layer.draw();
	stage.on("click", gotoGame1);
}
// 写文字
function drawText() {
	var word = new Konva.Text({
		x: 330,
		y: 600,
		text: "x" + numberText,
		fontSize: 14,
		fill: "#fff",
		storke: "#fff"
	});
	layer.add(word);
	layer.draw();
}

// 画结算三角
function drawEnd() {
	var star = new Konva.RegularPolygon({
		x: 460,
		y: 620,
		sides: 3,
		radius: 30,
		fill: '#699BC8',
		strokeWidth: 4,
		rotation: 90
	});
	star.on("mouseover", function() {
		document.body.style.cursor = "pointer";
	});
	star.on("mouseout", function() {
		document.body.style.cursor = "default";
	});
	star.on('click', clickEnd)
	layer.add(star)
	layer.draw()
}

function drawMirror(n) {
	for (let i = 0; i <= n; i++) {
		var obj = {
			points: [300, 600, 350, 650],
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
		mirror1.on("dragend", dragendFun);
		mirror1.on('dragstart', dragstart)
		mirror1.on("dragmove", drag);
	}
	time = false
	drawText();
}

function dragstart(e) {
	let xOffset = Math.floor(e.evt.offsetX / 50) * 50;
	let yOffset = Math.floor(e.evt.offsetY / 50) * 50;
	for (let i = 0; i < mirrorArr.length; i++) {
		if (mirrorArr[i][0] === xOffset && mirrorArr[i][1] === yOffset) {
			directionCommon = mirrorArr[i][2];
			mirrorArr.splice(i, 1);
			break
		}
	}
}

function drag() {
	time = true;
}

// 拖拽结束后判定动画
function dragendFun(e) {
	if (time) {
		time = false;
		e.target.drag = true;
		let x = -1;
		for (let i = 0; i < layer.children.length; i++) {
			let item = layer.children[i];
			if (item.drag) {
				x = i;
				break
			}
		}
		layer.children.splice(x, 1);
		let xOffset = Math.floor(e.evt.offsetX / 50) * 50;
		let yOffset = Math.floor(e.evt.offsetY / 50) * 50;

		let mirror1 = new Konva.Line({
			points: directionCommon ? [xOffset, yOffset, xOffset + 50, yOffset +
				50
			] : [xOffset + 50, yOffset, xOffset, yOffset + 50],
			stroke: "#FFFF00",
			tension: 1,
			draggable: true,
			strokeWidth: 6
		});
		mirror1.on("mouseover", function() {
			document.body.style.cursor = "pointer";
		});
		mirror1.on("mouseout", function() {
			document.body.style.cursor = "default";
		});
		mirror1.on("dragend", dragendFun);
		mirror1.on("dragmove", drag);
		mirror1.on('dragstart', dragstart)
		mirrorArr.push([xOffset, yOffset, directionCommon]);
		layer.add(mirror1);
		layer.draw();
		directionCommon = true
	} else {
		if (
			e.evt.offsetX >= 0 &&
			e.evt.offsetX <= 500 &&
			e.evt.offsetY >= 0 &&
			e.evt.offsetY <= 550
		) {
			e.target.change = true;
			let x = -1;
			for (let i = 0; i < layer.children.length; i++) {
				let item = layer.children[i];
				if (item.change) {
					x = i;
					break
				}
			}
			layer.children.splice(x, 1);
			let direction = true;
			let xOffset = Math.floor(e.evt.offsetX / 50) * 50;
			let yOffset = Math.floor(e.evt.offsetY / 50) * 50;
			for (let i = 0; i < mirrorArr.length; i++) {
				if (mirrorArr[i][0] === xOffset && mirrorArr[i][1] === yOffset) {
					direction = mirrorArr[i][2];
					mirrorArr.splice(i, 1);
					break
				}
			}

			mirrorArr.push([xOffset, yOffset, !direction]);
			let mirror1 = new Konva.Line({
				points: !direction ? [xOffset, yOffset, xOffset + 50, yOffset +
					50
				] : [xOffset + 50, yOffset, xOffset, yOffset + 50],
				stroke: "#FFFF00",
				tension: 1,
				draggable: true,
				strokeWidth: 6
			});
			mirror1.on("mouseover", function() {
				document.body.style.cursor = "pointer";
			});
			mirror1.on("mouseout", function() {
				document.body.style.cursor = "default";
			});
			mirror1.on("dragend", dragendFun);
			mirror1.on("dragmove", drag);
			mirror1.on('dragstart', dragstart)
			layer.add(mirror1);
			layer.draw();
		}
	}
}

function gotoGame1() {
	stage.off("click");
	layer.children.splice(1);
	drawRect();
	drawObstacle(150, 250, 200, 100);
	layer.draw();
	drawMirror(2);
	drawEnd()
}

function drawLight(xs, yx, xe, ye) {
	var arrow = new Konva.Arrow({
		x: stage.width() / 4,
		y: stage.height() / 4,
		points: [0, 0, width / 2, height / 2],
		pointerLength: 20,
		pointerWidth: 20,
		fill: 'black',
		stroke: 'black',
		strokeWidth: 4
	});
	layer.add(arrow)
	layer.draw()
}

function showReStart(){
	
}

// 第一关结算方法
function clickEnd() {
	let xArr = []
	let yArr = []
	let dir = []
	mirrorArr.forEach(item => {
		xArr.push(item[0])
		yArr.push(item[1])
		dir.push(item[2])
	})
	if (xArr.indexOf(50) >= 0) {
		let index = xArr.indexOf(50)
		let y = yArr[index]
		if (y < 200) {
			drawLight(75, 250, 75, y + 25)
			if (dir[index]) {
				drawLight(75, y + 25, 0, y + 25)
				showReStart()
			} else {
				xArr.splice(index, 1)
				yArr.splice(index, 1)
				dir.splice(index, 1)
				if (xArr.length > 0) {
					if (yArr.includes(y)) {
						let yPos = yArr.indexOf(y)
						let xPos = xArr[yPos]
						let dirPos = dir[yPos]
						drawLight(75, y + 25, xPos + 25, y + 25)
						if (dirPos) {
							if (xPos === 100) {
								drawLight(xPos + 25, y + 25, xPos + 25, 550)
								showReStart()
							} else if (xPos === 150 || xPos === 200 || xPos === 250 || xPos === 300) {
								drawLight(xPos + 25, y + 25, xPos + 25, 200)
								showReStart()
							} else if (xPos === 350 || xPos === 450) {
								drawLight(xPos + 25, y + 25, xPos + 25, 550)
								showReStart()
							} else {
								drawLight(xPos + 25, y + 25, xPos + 25, 250)
								//成功
								// pictureAni(50, y, xPos, y)
								setTimeout(() => {
									successPage()
								}, 1000)
							}
						} else {
							drawLight(xPos + 25, y + 25, xPos + 25, 0)
							showReStart()
						}
					} else {
						drawLight(75, y + 25, 500, y + 25)
						showReStart()
					}
				} else {
					drawLight(75, y + 25, 500, y + 25)
					showReStart()
				}
			}
		}
		if (y > 300) {
			drawLight(75, 300, 75, y + 25)
			if (dir[index]) {
				xArr.splice(index, 1)
				yArr.splice(index, 1)
				dir.splice(index, 1)
				if (xArr.length > 0) {
					if (yArr.includes(y)) {
						let yPos = yArr.indexOf(y)
						let xPos = xArr[yPos]
						let dirPos = dir[yPos]
						drawLight(75, y + 25, xPos + 25, y + 25)
						if (dirPos) {
							drawLight(xPos + 25, y + 25, xPos + 25, 550)
							showReStart()
						} else {
							if (xPos === 100) {
								drawLight(xPos + 25, y + 25, xPos + 25, 0)
								showReStart()
							} else if (xPos === 150 || xPos === 200 || xPos === 250 || xPos === 300) {
								drawLight(xPos + 25, y + 25, xPos + 25, 350)
								showReStart()
							} else if (xPos === 350 || xPos === 450) {
								drawLight(xPos + 25, y + 25, xPos + 25, 0)
								showReStart()
							} else {
								drawLight(xPos + 25, y + 25, xPos + 25, 300)
								//成功
								// pictureAni(50, y, xPos, y)
								setTimeout(() => {
									successPage()
								}, 1000)
							}
						}
					} else {
						drawLight(75, y + 25, 500, y + 25)
						showReStart()
					}
				} else {
					drawLight(75, y + 25, 500, y + 25)
					showReStart()
				}
			} else {
				drawLight(75, y + 25, 0, y + 25)
				showReStart()
			}
		}
	} else {
		drawLight(75, 0, 75, 250)
		drawLight(75, 300, 75, 550)
		showReStart()
	}
}
