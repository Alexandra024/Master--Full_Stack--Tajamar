const boton = document.querySelector("#miBoton");

const boton2 = document.querySelector(".miBoton");

const todosLosBotones = document.querySelector("button");

boton.addEventListener("click", () => {
    alert('Clickeaste')
})

boton.addEventListener("mouseover", () => {
    boton.style.backgroundColor = "red"
})

// try..catch()

try {
    const usuario = JSON.parse('{"nombre" : "Ana"}');
        console.log(usuario.nombre);
    
    const datos = JSON.parse("{nombre: Ana}");
        console.log(datos);

} catch (error) {
    
    console.error("se produjo un error al analizar los datos", error.message);
}

    // console.log("el programa sigue funcionando");

const obtenerUsuarios = () =>
    new Promise((resolve) => setTimeout(() => {resolve(["ana", "Luis"])} ,1500));
   

function obtenerRecetas() {
    return new Promise((resolve) => {
        console.log("cargando recetas..");
        setTimeout(() => {
            resolve(["tortilla", "patatas", "algo rico"]) 
        } ,2000)
    })
}

obtenerRecetas()
    .then(recetas => console.log("recetas cargadas: ", recetas))
    .catch(() => console.log("Error al cargar las recetas "));

async function mostrarRecetas(params) {
    console.log("cargando recetas...");
    const recetas = await obtenerRecetas();
    console.log("Recetas cargadas.");

}












