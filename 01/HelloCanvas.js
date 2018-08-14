function main() {
    var canvas=document.getElementById('webgl');
    if(!canvas){
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    var gl=getWebGLContext(canvas);
    if(!gl){
        console.log('Failed to get the rendering context for WebGL');
        return;
    }
    gl.clearColor(0.0,0.0,0.0,0.5);

    gl.clear(gl.COLOR_BUFFER_BIT);
}