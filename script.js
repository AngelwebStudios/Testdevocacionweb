function verResultado() {
    let puntos = { ing: 0, salud: 0, arte: 0, deporte: 0, social: 0, negocios: 0 };
    let respondidas = 0;

    for (let i = 1; i <= 10; i++) {
        let marcada = document.querySelector('input[name="p' + i + '"]:checked');
        if (marcada) {
            respondidas++;
            if (puntos[marcada.value] !== undefined) {
                puntos[marcada.value]++;
            }
        }
    }

    if (respondidas < 10) {
        alert("Por favor responde las 10 preguntas antes de darle al botón verde.");
        return;
    }

    let mensaje = "";

    // Combinaciones especiales
    if (puntos.arte > 0 && puntos.salud > 0) {
        mensaje = "1. Arquitectura<br>2. Enfermería";
    } else if (puntos.arte > 0 && puntos.ing > 0) {
        mensaje = "1. Arquitectura<br>2. Ingeniería Civil";
    } else {
        // Buscar el puntaje más alto
        let mayor = 0;
        let ganadora = "ing";

        for (let area in puntos) {
            if (puntos[area] > mayor) {
                mayor = puntos[area];
                ganadora = area;
            }
        }

        if (mayor === 0) {
            mensaje = "Marcaste 'No' en todo. ¡Marca 'Sí' en lo que te gusta!";
        } else if (ganadora === "ing") {
            mensaje = "1. Ingeniería de Sistemas<br>2. Ingeniería Mecatrónica";
        } else if (ganadora === "salud") {
            mensaje = "1. Medicina<br>2. Enfermería";
        } else if (ganadora === "arte") {
            mensaje = "1. Diseño Gráfico<br>2. Arquitectura";
        } else if (ganadora === "deporte") {
            mensaje = "1. Profesor de Educación Física<br>2. Entrenador Deportivo";
        } else if (ganadora === "social") {
            mensaje = "1. Derecho<br>2. Psicología";
        } else if (ganadora === "negocios") {
            mensaje = "1. Administración de Empresas<br>2. Contaduría Pública";
        }
    }

    let caja = document.getElementById("caja-resultado");
    document.getElementById("texto-resultado").innerHTML = mensaje;
    caja.style.display = "block";
    caja.scrollIntoView({ behavior: "smooth" });
}
