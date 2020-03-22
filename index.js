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

function drawCatAndMouse() {
	var cat = new Image();
	cat.src = './images/cat.jpg' // 设置图片路径      
	cat.onload = function() {
		var catImg = new Konva.Image({
			x: 50,
			y: 250,
			image: cat,
			width: 50,
			height: 50
		})
		layer.add(catImg) // 添加图片对象到画布             
		layer.draw(); // 渲染
	}
	var mouse = new Image();
	mouse.src = './images/mouse.jpg' // 设置图片路径      
	mouse.onload = function() {
		var mouseImg = new Konva.Image({
			x: 400,
			y: 250,
			image: mouse,
			width: 50,
			height: 50
		})
		layer.add(mouseImg) // 添加图片对象到画布             
		layer.draw(); // 渲染
	}
}

function gotoGame1() {
	stage.off("click");
	layer.children.splice(1);
	drawRect();
	drawObstacle(150, 200, 200, 150);
	drawCatAndMouse()
	layer.draw();
	drawMirror(2);
	drawEnd()
}

function drawLight(xs, yx, xe, ye) {
	var arrow = new Konva.Arrow({
		points: [xs, yx, xe, ye],
		pointerLength: 20,
		pointerWidth: 20,
		fill: '#95F204',
		stroke: '#95F204',
		strokeWidth: 4,
		name: "light"
	});
	layer.add(arrow)
	layer.draw()
}

function showReStart() {

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

function successPage() {
	layer.children.splice(1);
	var success = new Image();
	success.src = './images/good.jpg' // 设置图片路径      
	success.onload = function() {
		var successImg = new Konva.Image({
			x: 150,
			y: 20,
			image: success,
			width: 200,
			height: 200
		})
		layer.add(successImg) // 添加图片对象到画布           
		var word = new Konva.Text({
			x: 150,
			y: 270,
			text: 'Congratulations\n你太棒了！\n第二关稍加了点\n难度，加油哦！',
			fontSize: 34,
			fill: "#FFFF00",
			storke: "#FFFF00"
		});
		stage.on('click', gotoGame2)
		layer.add(word);
		layer.draw(); // 渲染
	}
}

function drawPoliceAndThief() {
	var police = new Image();
	police.src = './images/police.jpg' // 设置图片路径      
	police.onload = function() {
		var policeImg = new Konva.Image({
			x: 250,
			y: 200,
			image: police,
			width: 50,
			height: 50
		})
		layer.add(policeImg) // 添加图片对象到画布             
		layer.draw(); // 渲染
	}
	var thief = new Image();
	thief.src = './images/thief.jpg' // 设置图片路径      
	thief.onload = function() {
		var thiefImg = new Konva.Image({
			x: 250,
			y: 300,
			image: thief,
			width: 50,
			height: 50
		})
		layer.add(thiefImg) // 添加图片对象到画布             
		layer.draw(); // 渲染
	}
}

function gotoGame2() {
	stage.off("click");
	layer.children.splice(1);
	drawRect();
	drawObstacle(200, 50, 150, 50);
	drawObstacle(200, 200, 150, 150);
	drawObstacle(200, 450, 150, 50);
	drawPoliceAndThief()
	layer.draw();
	drawMirror(4);
	drawEnd2()
}


function drawEnd2() {
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
	star.on('click', clickEnd2)
	layer.add(star)
	layer.draw()
}

function clickEnd2() {
	const arr = mirrorArr.filter(item => item[0] === 250)
	const firstArr = arr.filter(item => item[1] > 300)
	if (firstArr.length > 0) {
		drawLight(275, 350, 275, firstArr[0][1] + 25)
		for (let i = 0; i < mirrorArr.length; i++) {
			if (mirrorArr[i][0] === 250 && mirrorArr[i][1] === firstArr[0][1]) {
				mirrorArr.splice(i, 1)
				i--
			}
		}
		if (firstArr[0][2]) {
			const secondArr = mirrorArr.filter(item => item[1] === firstArr[0][1])
			const secondX = secondArr.filter(item => item[0] > 250)
			if (secondX.length > 0) {
				drawLight(275, firstArr[0][1] + 25, secondX[0][0] + 25, firstArr[0][1] + 25)
				for (let i = 0; i < mirrorArr.length; i++) {
					if (mirrorArr[i][0] === secondX[0][0] && mirrorArr[i][1] === firstArr[0][1]) {
						mirrorArr.splice(i, 1)
						i--
					}
				}
				if (secondX[0][2]) {
					// drawLight()
				} else {
					const thirdArr = mirrorArr.filter(item => item[0] === secondX[0][0])
					const thirdY = thirdArr.filter(item => item[1] < 200 && item[1] > 50)
					if (thirdY.length > 0) {
						drawLight(secondX[0][0] + 25, firstArr[0][1] + 25, secondX[0][0] + 25, thirdY[0][1] + 25)
						for (let i = 0; i < mirrorArr.length; i++) {
							if (mirrorArr[i][0] === secondX[0][0] && mirrorArr[i][1] === thirdY[0][1]) {
								mirrorArr.splice(i, 1)
								i--
							}
						}
						if (thirdY[0][2]) {
							const forthArr = mirrorArr.filter(item => item[1] === thirdY[0][1])
							const forthX = forthArr.filter(item => item[0] === 250)
							if (forthX.length > 0) {
								drawLight(secondX[0][0] + 25, thirdY[0][1] + 25, 275, thirdY[0][1] + 25)
								if (forthX[0][2]) {
									drawLight(275, thirdY[0][1] + 25, 275, 100)
								} else {
									drawLight(275, thirdY[0][1] + 25, 275, 200)
								}
							}
						} else {
							drawLight(secondX[0][0] + 25, thirdY[0][1] + 25, secondX[0][0] + 25, 500)
						}
					} else {
						drawLight(secondX[0][0] + 25, firstArr[0][1] + 25, secondX[0][0] + 25, 0)
					}
				}
			} else {
				drawLight(275, firstArr[0][1] + 25, 500, firstArr[0][1] + 25)
			}
		} else {
			const secondArr = mirrorArr.filter(item => item[1] === firstArr[0][1])
			const secondX = secondArr.filter(item => item[0] < 250)
			if (secondX.length > 0) {
				drawLight(275, firstArr[0][1] + 25, secondX[0][0] + 25, firstArr[0][1] + 25)
				for (let i = 0; i < mirrorArr.length; i++) {
					if (mirrorArr[i][0] === secondX[0][0] && mirrorArr[i][1] === firstArr[0][1]) {
						mirrorArr.splice(i, 1)
						i--
					}
				}
				if (secondX[0][2]) {
					const thirdArr = mirrorArr.filter(item => item[0] === secondX[0][0])
					const thirdY = thirdArr.filter(item => item[1] < 200 && item[1] > 50)
					if (thirdY.length > 0) {
						drawLight(secondX[0][0] + 25, firstArr[0][1] + 25, secondX[0][0] + 25, thirdY[0][1] + 25)
						for (let i = 0; i < mirrorArr.length; i++) {
							if (mirrorArr[i][0] === secondX[0][0] && mirrorArr[i][1] === thirdY[0][1]) {
								mirrorArr.splice(i, 1)
								i--
							}
						}
						if (thirdY[0][2]) {
							drawLight(secondX[0][0] + 25, thirdY[0][1] + 25, secondX[0][0] + 25, 500)
						} else {
							const forthArr = mirrorArr.filter(item => item[1] === thirdY[0][1])
							const forthX = forthArr.filter(item => item[0] === 250)
							if (forthX.length > 0) {
								drawLight(secondX[0][0] + 25, thirdY[0][1] + 25, 275, thirdY[0][1] + 25)
								if (forthX[0][2]) {
									drawLight(275, thirdY[0][1] + 25, 275, 200)
								} else {
									drawLight(275, thirdY[0][1] + 25, 275, 100)
								}
							}
						}
					} else {
						drawLight(secondX[0][0] + 25, firstArr[0][1] + 25, secondX[0][0] + 25, 0)
					}
				} else {
					// drawLight()
				}
			} else {
				drawLight(275, firstArr[0][1] + 25, 0, firstArr[0][1] + 25)
			}
		}
	} else {
		drawLight(275, 350, 275, 450)
	}
}
