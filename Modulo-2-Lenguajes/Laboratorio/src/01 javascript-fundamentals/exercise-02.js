console.log("****** EXCERCISE 02 - Califications ******");
const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

const lengthOfObject = (object) => Object.keys(object).length;

function media (eso2o, lengthOfObject) {
  var media = 0;
  for(var key in eso2o){
    media += eso2o[key];
  }
  let totalMedia = media / lengthOfObject(eso2o);
  return totalMedia;
}
function mediaClasificacion (media) {
  var result = "";
  if(media == 10) result = "Matricula de Honor";
  else if(media < 10 && media >9) result = "Sobresaliente";
  else if(media < 9 && media >7) result =  "Notable";
  else if(media < 7 && media >6) result =  "Bien";
  else if(media < 6 && media >5) result = "Suficiente";
  else if(media < 5 && media >4) result = "Insuficiente";
  else if(media < 4) result = "Por debajo de 4";
  else if(media == null || media == undefined) result = "No se ha podido calcular la nota media";
  else result = "No se ha podido calcular la nota media, intentelo de nuevo.";
  return console.log(result)
};

console.log(media(eso2o, lengthOfObject));
mediaClasificacion(media(eso2o, lengthOfObject));