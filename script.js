function calcularResultado() {
    const form = document.getElementById('testForm');
    
    if (!form.checkValidity()) {
        alert("Por favor, responde a todas las preguntas antes de continuar.");
        return;
    }

    const respuestas = new FormData(form);
    
    let puntajes = {
        ingenieria: 0,
        salud: 0,
        arte: 0,
        social: 0
    };

    for (let valor of respuestas.values()) {
        if (puntajes[valor] !== undefined) {
            puntajes[valor]++;
        }
    }

    let mayorPuntaje = 0;
    let areaGanadora = "indeciso";

    for (let area in puntajes) {
        if (puntajes[area] > mayorPuntaje) {
            mayorPuntaje = puntajes[area];
            areaGanadora = area;
        }
    }

    let mensajeFinal = "";
    switch(areaGanadora) {
        case 'ingenieria':
            mensajeFinal = "Tu perfil se inclina hacia la Ingeniería y Tecnología. ¡Te gustan los retos lógicos!";
            break;
        case 'salud':
            mensajeFinal = "Tu perfil ideal está en las Ciencias de la Salud. Tienes vocación por el bienestar físico.";
            break;
        case 'arte':
            mensajeFinal = "Tu fuerte es el Arte y Diseño. Posees una mente altamente creativa.";
            break;
        case 'social':
            mensajeFinal = "Tu perfil es de Ciencias Sociales. Te apasiona el contacto y la ayuda humana.";
            break;
        default:
            mensajeFinal = "¡Tienes intereses muy variados! Te recomendamos explorar opciones multidisciplinarias.";
    }

    const cajaResultado = document.getElementById('resultado');
    cajaResultado.innerText = mensajeFinal;
    cajaResultado.style.display = 'block';
    
    cajaResultado.scrollIntoView({ behavior: 'smooth' });
}
