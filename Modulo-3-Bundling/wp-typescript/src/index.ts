import "./styles.scss";
import logoImg from "./content/logo_2.png";

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);

const helloWorld = `Hello World`;
document.getElementById("text").innerHTML = helloWorld;
