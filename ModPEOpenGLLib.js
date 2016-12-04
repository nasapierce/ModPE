/**** COPYRIGHT BY affjljoo3581@gmail.com          ****/
/**** IT IS OPENSOURCE - 2014                      ****/
/**** YOU CAN EDIT THIS SOURCE AND CAN DISSEMINATE ****/
/**** BUT PLEASE DON'T DELETE THIS COMMENT         ****/
/**** P.S. I TRY FOR LIGHTING AND I NOTICE THAT IT ****/
/****      IS SO SLOW. IF YOU TURN, MODELS TURN    ****/
/****      SLOWLY. AND IF YOU MOVE, MODELS MOVE    ****/
/****      SLOWLY. PLEASE UPGRADE THIS CODE. I FELL****/
/****      BORING FOR THIS CODE. GOOD DAY~         ****/
/**** P.P.S PLEASE MAKE TEXTURE RENDERING.         ****/
/**** PLEASE SEE SAMPLE CODE TO USE.               ****/

var context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var javascript = org.mozilla.javascript;

var ScriptableObject = javascript.ScriptableObject;
var Scriptable = javascript.Scriptable;
var Context = javascript.Context;
var Function = javascript.Function;

var Runnable = java.lang.Runnable;
var Thread = java.lang.Thread;


var io = java.io;

var File = io.File;


var util = java.util;

var Scanner = util.Scanner;


var nio = java.nio;

var ByteBuffer = nio.ByteBuffer;
var FloatBuffer = nio.FloatBuffer;
var ByteOrder = nio.ByteOrder;
var ShortBuffer = nio.ShortBuffer;


var opengl = android.opengl;

var GLSurfaceView = opengl.GLSurfaceView;
var Renderer = GLSurfaceView.Renderer;
var GLU = opengl.GLU;


var opengles = javax.microedition.khronos.opengles;

var GL10 = opengles.GL10;


var widget = android.widget;

var PopupWindow = widget.PopupWindow;
var RelativeLayout = widget.RelativeLayout;


var view = android.view;

var Gravity = view.Gravity;


var graphics = android.graphics;

var PixelFormat = graphics.PixelFormat;


var ScriptManager = net.zhuoweizhang.mcpelauncher.ScriptManager;


var ambientLight = [0.5, 0.5, 0.5, 1];
var diffuseLight = [0.5, 0.5, 0.5, 1];
var lightPosition = [128, 500, 128, 0];
var lightDirection = [0, -1, 0];

var ambientLightBuffer, diffuseLightBuffer, lightPositionBuffer, lightDirectionBuffer;

var virtualWorldRenderer = new Renderer({
	onSurfaceCreated : function(gl, config) {
		ambientLightBuffer = getFloatBuffer(ambientLight);
		diffuseLightBuffer = getFloatBuffer(diffuseLight);
		lightDirectionBuffer = getFloatBuffer(lightDirection);
		
		gl.glClearColor(0, 0, 0, 0);
		
		gl.glShadeModel(GL10.GL_SMOOTH);

		gl.glClearDepthf(1.0);

		gl.glEnable(GL10.GL_DEPTH_TEST);

		gl.glDepthFunc(GL10.GL_LEQUAL);

		gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST);
	},
	
	onSurfaceChanged : function(gl, w, h) {
		width = w;
		height = h;
		
		gl.glMatrixMode(GL10.GL_PROJECTION);

		gl.glLoadIdentity();
		
		GLU.gluPerspective(gl, 70.0, width / height, 0.1, 100);

		gl.glMatrixMode(GL10.GL_MODELVIEW);

		gl.glLoadIdentity();
	},
	
	onDrawFrame : function(gl) {
		lightPositionBuffer = getFloatBuffer(lightPosition);
		
		gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
		
		gl.glLoadIdentity();
		
		gl.glEnable(GL10.GL_COLOR_MATERIAL);
		
		gl.glEnable(GL10.GL_LIGHTING);
		gl.glEnable(GL10.GL_LIGHT0);
		
		gl.glLightfv(GL10.GL_LIGHT0, GL10.GL_AMBIENT, ambientLightBuffer);
		gl.glLightfv(GL10.GL_LIGHT0, GL10.GL_DIFFUSE, diffuseLightBuffer);
		gl.glLightfv(GL10.GL_LIGHT0, GL10.GL_POSITION, lightPositionBuffer);
	    gl.glLightfv(GL10.GL_LIGHT0, GL10.GL_SPOT_DIRECTION, lightDirectionBuffer);
		gl.glLightf(GL10.GL_LIGHT0, GL10.GL_SPOT_CUTOFF, 90.0);
		
		var yaw = ScriptManager.nativeGetYaw(ScriptManager.nativeGetPlayerEnt()) % 360;
		var pitch = ScriptManager.nativeGetPitch(ScriptManager.nativeGetPlayerEnt()) % 360;
		
		var eyeX = ScriptManager.nativeGetPlayerLoc(0);
	    var eyeY = ScriptManager.nativeGetPlayerLoc(1) + 1;
	    var eyeZ = ScriptManager.nativeGetPlayerLoc(2);
		
	    var dCenterX = Math.sin(yaw / 180 * Math.PI);
		var dCenterZ = Math.cos(yaw / 180 * Math.PI);
		var dCenterY = Math.sqrt(dCenterX * dCenterX + dCenterZ * dCenterZ) * Math.tan((pitch - 180) / 180 * Math.PI);
		
		var centerX = eyeX - dCenterX;
		var centerZ = eyeZ + dCenterZ;
		var centerY = eyeY - dCenterY;
		
		GLU.gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, 0, 1, 0);
		
		var i;
		
		for(i = 0; i < blocks.length; i ++) {
			blocks[i].draw(gl);
		}
		
		for(i = 0; i < models.length; i ++) {
			if(models[i].getLoaded()) models[i].draw(gl);
		}
	},
});

function Block() {
	var vertexBuffer, indexBuffer;
    var x, y, z;
	
    var vertex = [
	    0, 0, 1.0, 
        1.0, 0, 1.0,
        0, 1.0, 1.0,
        1.0, 1.0, 1.0,

        1.0, 0, 1.0,
        1.0, 0, 0,
        1.0, 1.0, 1.0,
        1.0, 1.0, 0,

        1.0, 0, 0,
        0, 0, 0,
        1.0, 1.0, 0,
        0, 1.0, 0,

        0, 0, 0,
        0, 0, 1.0,
        0, 1.0, 0,
        0, 1.0, 1.0,

        0, 0, 0,
        1.0, 0, 0,
        0, 0, 1.0,
        1.0, 0, 1.0,

        0, 1.0, 1.0,
        1.0, 1.0, 1.0,
        0, 1.0, 0,
        1.0, 1.0, 0,
    ];

    var index = [
        0,1,3, 0,3,2,
        4,5,7, 4,7,6,
        8,9,11, 8,11,10,
        12,13,15, 12,15,14,
        16,17,19, 16,19,18,
        20,21,23, 20,23,22,
    ];

    function initBuffers() {
	    vertexBuffer = getFloatBuffer(vertex);
		indexBuffer = getShortBuffer(index);
	}
	
	this.setX = function(_x) {
		x = _x;
	};
	this.setY = function(_y) {
		y = _y;
	};
	this.init = function() {
	    initBuffers();
	};
	this.setZ = function(_z) {
		z = _z;
	};
	this.draw = function(gl) {
		gl.glTranslatef(x, y, z);
			
		gl.glFrontFace(GL10.GL_CCW);
	   	gl.glEnable(GL10.GL_CULL_FACE);
	    gl.glCullFace(GL10.GL_BACK);
		
		gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
		
	   	gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
		
	    gl.glDrawElements(GL10.GL_TRIANGLES, index.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
		
		gl.glTranslatef(-x, -y, -z);
	};
}

function Model(_onModelLoadFinishedListener) {
	var vertexBuffer, indexBuffer, normalVertexBuffer, normalIndexBuffer;
    var x, y, z;
	var file;
	var onModelLoadFinishedListener = _onModelLoadFinishedListener;
	var loaded;
	var fileSize;
	var persent = 03;
	
    var vertex = [];
    var index = [];
	var normalVertex = [];
	var normalIndex = [];

    function initBuffers() {
	    vertexBuffer = getFloatBuffer(vertex);
		indexBuffer = getShortBuffer(index);
		normalVertexBuffer = getFloatBuffer(normalVertex);
		normalIndexBuffer = getFloatBuffer(normalIndex);
	}
	
	function loadObj() {
    	var fileObj = new File(file);
			
		fileSize = fileObj.length();
		
		var readed = 0;
		
		var scanner = new Scanner(fileObj);
		
	    while(scanner.hasNextLine()) {
		    var line = scanner.nextLine();
		
			readed += line.length();
			
			persent = parseInt(100 * readed / fileSize);
			
	    	var Data = line.split(" ");
			
			var flag = "" + Data[0];
		    
		    if(flag.trim() == "v") {
		    	vertex.push(parseFloat(Data[1]));
		    	vertex.push(parseFloat(Data[2]));
		    	vertex.push(parseFloat(Data[3]));
		    } else if(flag.trim() == "vn") {
				normalVertex.push(parseFloat(Data[1]));
				normalVertex.push(parseFloat(Data[2]));
				normalVertex.push(parseFloat(Data[3]));
			} else if(flag.trim() == "f") {
		    	var k, l, m;
				
				for(k = 1; k < Data.length; k ++) {
					for(l = k + 1; l < Data.length; l ++) {
						for(m = l + 1; m < Data.length; m ++) {
							index.push(Data[k].split("/")[0] - 1);
							index.push(Data[l].split("/")[0] - 1);
			            	index.push(Data[m].split("/")[0] - 1);
							
							normalIndex.push(Data[k].split("/")[2] - 1);
							normalIndex.push(Data[l].split("/")[2] - 1);
			            	normalIndex.push(Data[m].split("/")[2] - 1);
						}
					}
				}
		    }
	    }
		
		scanner.close();
    }
	
	this.setLoaded = function(_loaded) {
		loaded = _loaded;
	};
	this.getLoaded = function() {
		return loaded;
	};
	this.getLoadedPersent = function() {
		return persent;
	};
	this.setX = function(_x) {
		x = _x;
	};
	this.setY = function(_y) {
		y = _y;
	};
	this.setZ = function(_z) {
		z = _z;
	};
	this.getX = function() {
		return x;
	};
	this.getY = function() {
		return y;
	};
	this.getZ = function() {
		return z;
	};
	this.setFile = function(_file) {
		file = _file;
	};
	this.id = 0;
	this.init = function() {
		new Thread(new Runnable({
			run : function() {
				loadObj();
				
				initBuffers();
				
				loaded = true;
			},
		})).start();
	};
	this.draw = function(gl) {
		gl.glTranslatef(x, y, z);
			
		gl.glFrontFace(GL10.GL_CCW);
	   	gl.glEnable(GL10.GL_CULL_FACE);
	    gl.glCullFace(GL10.GL_BACK);
		
		gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
		gl.glEnableClientState(GL10.GL_NORMAL_ARRAY);
		
		gl.glNormalPointer(GL10.GL_FLOAT, 0, normalVertexBuffer);
		
	   	gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
		
	    gl.glDrawElements(GL10.GL_TRIANGLES, index.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
		
		gl.glTranslatef(-x, -y, -z);
	};
}

function getFloatBuffer(floatArray) {
	var byteBuffer = ByteBuffer.allocateDirect(floatArray.length * 4);
    byteBuffer.order(ByteOrder.nativeOrder());
   
	var floatBuffer = byteBuffer.asFloatBuffer();
    floatBuffer.put(floatArray);
    floatBuffer.position(0);
	
	return floatBuffer;
}

function getShortBuffer(shortArray) {
	var byteBuffer = ByteBuffer.allocateDirect(shortArray.length * 2);
    byteBuffer.order(ByteOrder.nativeOrder());
   
	var shortBuffer = byteBuffer.asShortBuffer();
    shortBuffer.put(shortArray);
    shortBuffer.position(0);
	
	return shortBuffer;
}

//You don't have to see there code : up

var virtualWorldView;

var parentView = context.getWindow().getDecorView();

var width, height;

var blocks = [];
var models = [];

function initViews() {
	virtualWorldView = new GLSurfaceView(context);
	virtualWorldView.setZOrderOnTop(true);
	virtualWorldView.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
	virtualWorldView.getHolder().setFormat(PixelFormat.TRANSLUCENT);
	virtualWorldView.setRenderer(virtualWorldRenderer);
	
    parentView.addView(virtualWorldView);
}

function deinitViews() {
	parentView.removeView(virtualWorldView);
}

function selectLevelHook() {
	ModPE.setFov(70);
	
	registerThis();
	
	context.runOnUiThread(new Runnable({
		run : initViews,
	}));
}

function leaveGame() {
	context.runOnUiThread(new Runnable({
		run : deinitViews,
	}));
}

var ModPEOpenGLLib = (function() {
	var ScriptManager = net.zhuoweizhang.mcpelauncher.ScriptManager;

	return {
		addModel : function(model) {
			model.id = models.length;
	        models.push(model);
		},
		removeModel : function(model) {
			models.slice(model, 1);
		},
		updateModel : function(model) {
			models[model.id] = model;
		},
		Model : Model,
	};
}());


function registerThis() {
	var scripts = ScriptManager.scripts;
	
    var i;
    for(var i = 0; i < scripts.size(); i ++) {
    	var script = scripts.get(i);
    	var scope = script.scope;
		
    	if(script.name == "ModPEOpenGLLib.js") continue;
 		
    	ScriptableObject.putProperty(scope, "ModPEOpenGLLib", ModPEOpenGLLib);
    }
}
