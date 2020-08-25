export default () => {
  //elemento h2 es la pregunta!
  const question = document.createElement("h2");
  question.innerHTML = "CAN'T DECIDE WHAT TO WATCH?";
  question.setAttribute("class", "col-12 header");
  //boton obtener aleatoreo
  const btnRandom = document.createElement("a");
  btnRandom.setAttribute("href", "#/random");
  btnRandom.setAttribute("class", "btn btn-danger startbtn");
  btnRandom.innerHTML = "Pick a movie for me!";
  //btn a home
  const btnHome = document.createElement("a");
  btnHome.setAttribute("href", "#/home");
  btnHome.setAttribute("class", "btn btn-dark startbtn");
  btnHome.innerHTML = "Search for titles";
  const p = document.createElement("p");
  p.innerHTML = "or";
  //div padre  &times;
  const divElemt = document.createElement("div");
  divElemt.setAttribute("class", "col-12 start");
  //divElemt.classList.add("position");

  //const br = document.createElement('br')
  //divElemt.innerHTML = viewHome;
  //divElemt.appendChild(br)


  divElemt.appendChild(question);
  divElemt.appendChild(btnRandom);
  divElemt.appendChild(p);
  divElemt.appendChild(btnHome);

  return divElemt;
};
