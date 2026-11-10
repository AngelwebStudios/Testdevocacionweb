function calcularResultado() {
    const form = document.getElementById('testForm');
    
    // Comprobar que las 20 preguntas estén listas
    if (!form.checkValidity()) {
        alert("Por favor, responde a las 20 preguntas antes de solicitar tus resultados.");
        return;
    }

    const respuestas = new FormData(form);
    
    // Contadores para evaluar las combinaciones e intereses individuales
    let puntos = {
        ingenieria: 0,
        construccion: 0,
        salud: 0,
        dibujo: 0,
        arte: 0,
        deporte: 0,
        social: 0,
        negocios: 0
    };

    // Almacenar elecciones del formulario
    for (let valor of respuestas.values()) {
        if (puntos[valor] !== undefined) {
            puntos[valor]++;
        }
    }

    let diagnostico = "";

    // LÓGICA DE COMBINACIONES INTELIGENTES SOLICITADAS
    
    // Combinación: Dibujo + Salud
    if (puntos.dibujo > 0 && puntos.salud > 0) {
        diagnóstico = "¡Combinación Increíble! Al cruzarse tus intereses por la precisión visual y la salud, te destacarías enormemente en carreras como **Arquitectura de Interiores Médicos/Hospitalarios**, **Diseño Industrial de Prótesis**, o ramas aplicadas de la salud con alta precisión visual como **Enfermería**, **Odontología** o **Cirugía**.";
    }
    // Combinación: Solo Dibujo / Arte Visual alto (Sin salud/ingeniería dominante)
    else if (puntos.dibujo >= 2 && puntos.ingenieria === 0) {
        diagnóstico = "Tienes un alto sentido visual y creativo puro. Tus carreras ideales apuntan a **Diseño Gráfico**, **Ilustración Digital**, **Artes Plásticas**, o **Ingeniería en Diseño de Entretenimiento Digital**.";
    }
    // Combinación: Dibujo + Estructuras/Ingeniería
    else if (puntos.dibujo > 0 && (puntos.ingenieria > 0 || puntos.construccion > 0)) {
        diagnóstico = "Posees el equilibrio perfecto entre arte y estructura. Perfiles como el tuyo logran el éxito en **Arquitectura**, **Diseño de Interiores**, **Ingeniería Civil** o **Diseño Automotriz**.";
    }
    // Combinación: Deportes Dominante
    else if (puntos.deporte >= 2) {
        diagnóstico = "Tu energía y perfil se centran fuertemente en el movimiento humano y el bienestar físico. Tus opciones destacadas son **Profesor de Educación Física**, **Entrenador Deportivo Profesional**, **Fisioterapia** o **Gestión de Entidades Deportivas**.";
    }
    // Combinaciones estándar por mayoría de votos
    else {
        let maxArea = "ingenieria";
        let maxValor = 0;
        for (let area in puntos) {
            if (puntos[area] > maxValor) {
                maxValor = puntos[area];
                maxArea = area;
            }
        }

        switch(maxArea) {
            case 'ingenieria':
                diagnóstico = "Tu mente es tecnológica y analítica. Te destacarás en **Ingeniería de Sistemas**, **Informática**, **Telecomunicaciones** o **Robótica**.";
                break;
            case 'salud':
                diagnóstico = "Tienes una fuerte inclinación humanitaria y biológica. Tus carreras clave son **Medicina**, **Enfermería**, **Bioanálisis** o **Nutrición**.";
                break;
            case 'arte':
                diagnóstico = "Tu fuerte es la comunicación y la creatividad. Explora opciones como **Periodismo**, **Producción Audiovisual**, **Música** o **Publicidad**.";
                break;
            case 'social':
                diagnóstico = "Tu perfil está orientado a la sociedad y el marco legal. Tus opciones ideales incluyen **Derecho**, **Psicología**, **Trabajo Social** o **Docencia**.";
                break;
            case 'negocios':
                diagnóstico = "Cuentas con perfil de liderazgo y organización económica. Te sugerimos carreras como **Administración de Empresas**, **Contaduría Pública**, **Comercio Exterior** o **Marketing Digital**.";
                break;
            default:
                diagnóstico = "Tus respuestas reflejan un perfil multidisciplinario amplio. Te recomendamos revisar opciones combinadas que integren gestión y tecnología.";
        }
    }

    // Mostrar caja e imprimir resultado en pantalla
    const contenedor = document.getElementById('resultado');
    const parrafo = document.getElementById('resultado-texto');
    
    parrafo.innerHTML = diagnóstico;
    contenedor.style.display = 'block';
    
    // Auto-scroll suave para leer el resultado de inmediato
    contenedor.scrollIntoView({ behavior: 'smooth' });
}

// Lógica de interfaz para el botón desplegable de Universidades
function toggleUniversidades() {
    const lista = document.getElementById('lista-universidades');
    if (lista.style.display === 'block') {
        lista.style.display = 'none';
    } else {
        lista.style.display = 'block';
    }
}

// Lógica para desplegar las carreras de cada universidad
function toggleCarreras(idSublista) {
    const sublista = document.getElementById(idSublista);
    if (sublista.style.display === 'block') {
        sublista.style.display = 'none';
    } else {
        sublista.style.display = 'block';
    }
}
