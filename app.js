// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function agregarAmigo() {
  const input = document.getElementById("nombreAmigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor ingresa un nombre válido.");
    return;
  }

  // Agregar a la lista
  nombresAmigos.push(nombre);

  // Mostrar en pantalla
  actualizarLista();

  // Limpiar campo de texto
  input.value = "";
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  nombresAmigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (nombresAmigos.length === 0) {
    alert("No hay nombres en la lista para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
  const seleccionado = nombresAmigos[indiceAleatorio];

  document.getElementById("resultado").textContent = seleccionado;
}
