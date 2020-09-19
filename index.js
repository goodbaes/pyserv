
const initCanvas = (id)=>{
  return new fabric.Canvas(
    id,{
    width:500,
    height:500,
    selection:false});
}
const setBackground = (url,canvas) =>{
   fabric.Image.fromURL(url,(img)=>{
   canvas.backgroundImage = img;
   canvas.renderAll();
  })
}

const canvas = initCanvas('canvas');
let mousePressed = false;
setBackground("https://cdn.pixabay.com/photo/2017/01/13/04/56/blank-1976334_960_720.png",canvas)



canvas.on("mouse:move",(event)=>{
  if (mousePressed){
    canvas.setCursor("grab");
    canvas.renderAll();
    const mEvent = event.e;
    const delta = new fabric.Point(mEvent.movementX,mEvent.movementY);
    canvas.relativePan(delta);
  }
})

canvas.on('mouse:down',(event)=>{
  mousePressed = true;
  canvas.setCursor("grab");
  canvas.renderAll()})

canvas.on('mouse:up',(event)=>{
  mousePressed = false;
})
