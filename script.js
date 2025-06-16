// Datos para cálculos místicos
const signosZodiacales = {
    aries: {
        emoji: "♈",
        fechas: [3, 21, 4, 19],
        descripcion: "Eres una persona valiente, enérgica y pionera. Tu espíritu de liderazgo te lleva a iniciar nuevos proyectos con pasión y determinación.",
    },
    tauro: {
        emoji: "♉",
        fechas: [4, 20, 5, 20],
        descripcion: "Posees una naturaleza estable, práctica y sensual. Tu perseverancia y amor por la belleza te guían hacia la abundancia y la armonía.",
    },
    geminis: {
        emoji: "♊",
        fechas: [5, 21, 6, 20],
        descripcion: "Tu mente curiosa y adaptable te convierte en un comunicador nato. La versatilidad y el ingenio son tus mayores fortalezas.",
    },
    cancer: {
        emoji: "♋",
        fechas: [6, 21, 7, 22],
        descripcion: "Eres intuitiva, protectora y emocionalmente profunda. Tu conexión con la luna te otorga poderes de sanación y comprensión emocional.",
    },
    leo: {
        emoji: "♌",
        fechas: [7, 23, 8, 22],
        descripcion: "Irradias carisma, creatividad y generosidad. Tu corazón de león te impulsa a brillar y inspirar a otros con tu luz interior.",
    },
    virgo: {
        emoji: "♍",
        fechas: [8, 23, 9, 22],
        descripcion: "Tu naturaleza analítica y perfeccionista te lleva a la excelencia. Posees un don especial para sanar y servir a otros.",
    },
    libra: {
        emoji: "♎",
        fechas: [9, 23, 10, 22],
        descripcion: "Buscas el equilibrio, la justicia y la belleza en todo. Tu diplomacia natural te convierte en una pacificadora nata.",
    },
    escorpio: {
        emoji: "♏",
        fechas: [10, 23, 11, 21],
        descripcion: "Posees una intensidad magnética y poderes de transformación. Tu intuición profunda te conecta con los misterios del universo.",
    },
    sagitario: {
        emoji: "♐",
        fechas: [11, 22, 12, 21],
        descripcion: "Eres aventurera, filosófica y optimista. Tu espíritu libre busca constantemente expandir horizontes y conocimiento.",
    },
    capricornio: {
        emoji: "♑",
        fechas: [12, 22, 1, 19],
        descripcion: "Tu ambición disciplinada y sabiduría práctica te llevan al éxito. Eres una constructora de legados duraderos.",
    },
    acuario: {
        emoji: "♒",
        fechas: [1, 20, 2, 18],
        descripcion: "Visionaria y humanitaria, tu mente innovadora busca revolucionar el mundo. Tu originalidad es tu mayor regalo.",
    },
    piscis: {
        emoji: "♓",
        fechas: [2, 19, 3, 20],
        descripcion: "Eres intuitiva, compasiva y espiritualmente conectada. Tu sensibilidad psíquica te permite percibir realidades sutiles.",
    },
}

const animalesChinos = {
    0: {
        animal: "Mono",
        emoji: "🐒",
        descripcion: "Inteligente, ingeniosa y adaptable. Posees una mente brillante y un espíritu juguetón que te ayuda a superar cualquier desafío.",
    },
    1: {
        animal: "Gallo",
        emoji: "🐓",
        descripcion: "Orgullosa, trabajadora y honesta. Tu naturaleza meticulosa y tu sentido de la justicia te convierten en una líder natural.",
    },
    2: {
        animal: "Perro",
        emoji: "🐕",
        descripcion: "Leal, protectora y justa. Tu corazón noble y tu instinto protector hacen que otros confíen plenamente en ti.",
    },
    3: {
        animal: "Cerdo",
        emoji: "🐷",
        descripcion: "Generosa, compasiva y próspera. Tu naturaleza bondadosa atrae abundancia y buena fortuna a tu vida.",
    },
    4: {
        animal: "Rata",
        emoji: "🐭",
        descripcion: "Astuta, ambiciosa y carismática. Tu inteligencia práctica y tu capacidad de adaptación te llevan al éxito.",
    },
    5: {
        animal: "Buey",
        emoji: "🐂",
        descripcion: "Fuerte, confiable y determinada. Tu perseverancia inquebrantable te permite alcanzar cualquier meta que te propongas.",
    },
    6: {
        animal: "Tigre",
        emoji: "🐅",
        descripcion: "Valiente, apasionada y magnética. Tu espíritu feroz y tu carisma natural te convierten en una fuerza imparable.",
    },
    7: {
        animal: "Conejo",
        emoji: "🐰",
        descripcion: "Elegante, intuitiva y diplomática. Tu gracia natural y tu sabiduría emocional te abren puertas hacia la armonía.",
    },
    8: {
        animal: "Dragón",
        emoji: "🐉",
        descripcion: "Poderosa, carismática y visionaria. Posees una energía mágica que inspira y transforma todo a tu alrededor.",
    },
    9: {
        animal: "Serpiente",
        emoji: "🐍",
        descripcion: "Sabia, misteriosa y transformadora. Tu intuición profunda y tu capacidad de renovación te conectan con lo sagrado.",
    },
    10: {
        animal: "Caballo",
        emoji: "🐎",
        descripcion: "Libre, enérgica y aventurera. Tu espíritu independiente y tu vitalidad te impulsan hacia nuevos horizontes.",
    },
    11: {
        animal: "Cabra",
        emoji: "🐐",
        descripcion: "Creativa, sensible y artística. Tu naturaleza gentil y tu talento innato te permiten crear belleza en el mundo.",
    },
}

const significadosNumericos = {
    1: "El Líder - Eres una pionera natural, independiente y con gran fuerza de voluntad. Tu misión es liderar e iniciar nuevos caminos.",
    2: "La Diplomática - Posees un don especial para la cooperación y la armonía. Tu sensibilidad te permite unir a las personas.",
    3: "La Creativa - Tu expresión artística y comunicativa ilumina el mundo. Tienes el don de inspirar y alegrar a otros.",
    4: "La Constructora - Eres práctica, organizada y confiable. Tu misión es crear bases sólidas y estructuras duraderas.",
    5: "La Aventurera - Tu espíritu libre busca experiencias y cambios. Eres la embajadora de la libertad y la diversidad.",
    6: "La Sanadora - Tu naturaleza compasiva y protectora te lleva a cuidar de otros. Eres un refugio de amor y comprensión.",
    7: "La Mística - Posees una conexión especial con lo espiritual y lo oculto. Tu sabiduría interior es tu mayor tesoro.",
    8: "La Materialista Espiritual - Tienes el don de manifestar abundancia y éxito material con propósito espiritual.",
    9: "La Humanitaria - Tu corazón universal busca servir a la humanidad. Eres una luz de compasión y sabiduría para el mundo.",
}

const significadosNombres = {
    // Nombres femeninos comunes en español
    maria: 'Nombre sagrado que significa "la elegida". Posees una conexión especial con lo divino femenino y la maternidad universal.',
    ana: 'Significa "gracia divina". Tu presencia trae bendiciones y tu corazón puro irradia luz sanadora.',
    carmen: 'Representa el "jardín de Dios". Eres una cultivadora de belleza y armonía en el mundo.',
    laura: 'Significa "laurel victorioso". Tu destino está marcado por triunfos y reconocimientos merecidos.',
    elena: 'Representa "la luz brillante". Iluminas el camino de otros con tu sabiduría y claridad.',
    sofia: 'Significa "sabiduría divina". Posees una comprensión profunda de los misterios de la vida.',
    isabel: 'Representa "promesa de Dios". Tu vida está bendecida con propósito divino y misión sagrada.',
    patricia: 'Significa "noble". Tu alma aristocrática busca la excelencia y la dignidad en todo.',
    rosa: 'Representa "la flor sagrada". Tu belleza interior florece y perfuma la vida de quienes te rodean.',
    andrea: 'Significa "valiente". Tu coraje interior te permite enfrentar cualquier desafío con gracia.',

    // Nombres masculinos comunes
    jose: 'Significa "Dios proveerá". Tu vida está marcada por la abundancia y la protección divina.',
    antonio: 'Representa "valioso". Tu presencia es un tesoro para quienes te conocen.',
    manuel: 'Significa "Dios está con nosotros". Posees una conexión especial con lo sagrado.',
    francisco: 'Representa "libre". Tu espíritu independiente busca la verdad y la autenticidad.',
    david: 'Significa "amado". Tu corazón magnético atrae amor y admiración naturalmente.',
    juan: 'Representa "gracia de Dios". Tu vida está bendecida con favor divino y propósito sagrado.',
    carlos: 'Significa "hombre libre". Tu destino es romper cadenas y liberar a otros.',
    miguel: 'Representa "quien como Dios". Posees una fuerza espiritual y protectora excepcional.',
    pedro: 'Significa "piedra firme". Eres una base sólida y confiable para otros.',
    luis: 'Representa "guerrero ilustre". Tu espíritu luchador está destinado a grandes victorias.',
}

// Funciones principales
function calcularNumeroPitagorico(nombre) {
    const valores = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 1,
        k: 2,
        l: 3,
        m: 4,
        n: 5,
        o: 6,
        p: 7,
        q: 8,
        r: 9,
        s: 1,
        t: 2,
        u: 3,
        v: 4,
        w: 5,
        x: 6,
        y: 7,
        z: 8,
    }

    let suma = 0
    for (const letra of nombre.toLowerCase().replace(/\s/g, "")) {
        if (valores[letra]) {
            suma += valores[letra]
        }
    }

    while (suma > 9 && suma !== 11 && suma !== 22 && suma !== 33) {
        suma = suma
            .toString()
            .split("")
            .reduce((a, b) => Number.parseInt(a) + Number.parseInt(b), 0)
    }

    return suma
}

function calcularSignoZodiacal(fecha) {
    const [año, mes, dia] = fecha.split("-").map(Number)

    for (const signo in signosZodiacales) {
        const [mesInicio, diaInicio, mesFin, diaFin] = signosZodiacales[signo].fechas

        if ((mes === mesInicio && dia >= diaInicio) || (mes === mesFin && dia <= diaFin)) {
            return { nombre: signo, ...signosZodiacales[signo] }
        }
    }

    return { nombre: "capricornio", ...signosZodiacales["capricornio"] }
}

function calcularAnimalChino(año) {
    const baseAño = 1900
    const indice = (año - baseAño) % 12
    return animalesChinos[indice]
}

function obtenerSignificadoNombre(nombre) {
    const nombreLimpio = nombre.toLowerCase().split(" ")[0]
    return (
        significadosNombres[nombreLimpio] ||
        `Tu nombre ${nombre} resuena con energías únicas y especiales. Cada letra vibra con frecuencias que atraen experiencias de crecimiento y transformación personal.`
    )
}

function generarEsenciaPersonal(numeroPitagorico, signo, animal) {
    const esencias = [
        `Tu esencia combina la ${significadosNumericos[numeroPitagorico]?.toLowerCase() || "energía única"} con la naturaleza ${signo.nombre} y el espíritu del ${animal.animal}. Esta combinación te otorga poderes especiales de manifestación.`,

        `La unión de tu número ${numeroPitagorico}, tu signo ${signo.emoji} y tu animal ${animal.emoji} crea una frecuencia vibratoria única que atrae sincronicidades mágicas a tu vida.`,

        `Tu alma eligió esta combinación específica para cumplir una misión especial en esta vida. Confía en tu intuición, pues ella conoce el camino hacia tu destino más elevado.`,
    ]

    return esencias[Math.floor(Math.random() * esencias.length)]
}

// Event Listeners
document.getElementById("mysticForm").addEventListener("submit", (e) => {
    e.preventDefault()

    const nombre = document.getElementById("nombre").value.trim()
    const fechaNacimiento = document.getElementById("fechaNacimiento").value
    const nacionalidad = document.getElementById("nacionalidad").value

    if (!nombre || !fechaNacimiento || !nacionalidad) {
        alert("✨ Por favor completa todos los campos para revelar tu destino ✨")
        return
    }

    // Calcular todos los valores místicos
    const numeroPitagorico = calcularNumeroPitagorico(nombre)
    const signoZodiacal = calcularSignoZodiacal(fechaNacimiento)
    const año = new Date(fechaNacimiento).getFullYear()
    const animalChino = calcularAnimalChino(año)
    const significadoNombre = obtenerSignificadoNombre(nombre)
    const numeroDestino = calcularNumeroPitagorico(nombre + fechaNacimiento.replace(/-/g, ""))
    const esenciaPersonal = generarEsenciaPersonal(numeroPitagorico, signoZodiacal, animalChino)

    // Mostrar resultados
    mostrarResultados({
        numeroPitagorico,
        signoZodiacal,
        animalChino,
        significadoNombre,
        numeroDestino,
        esenciaPersonal,
    })
})

function mostrarResultados(datos) {
    // Ocultar formulario y mostrar resultados
    document.getElementById("formContainer").style.display = "none"
    document.getElementById("resultsContainer").style.display = "block"

    // Llenar los resultados
    document.getElementById("numeroPitagorico").textContent = datos.numeroPitagorico
    document.getElementById("significadoNumerico").textContent =
        significadosNumericos[datos.numeroPitagorico] || "Número maestro con energías especiales y únicas."

    document.getElementById("signoZodiacal").textContent =
        `${datos.signoZodiacal.emoji} ${datos.signoZodiacal.nombre.charAt(0).toUpperCase() + datos.signoZodiacal.nombre.slice(1)}`
    document.getElementById("descripcionZodiacal").textContent = datos.signoZodiacal.descripcion

    document.getElementById("animalChino").textContent = `${datos.animalChino.emoji} ${datos.animalChino.animal}`
    document.getElementById("descripcionAnimal").textContent = datos.animalChino.descripcion

    document.getElementById("significadoNombre").textContent = datos.significadoNombre

    document.getElementById("numeroDestino").textContent = datos.numeroDestino
    document.getElementById("descripcionDestino").textContent =
        `Tu número del destino ${datos.numeroDestino} revela el propósito supremo de tu alma en esta encarnación. Es la frecuencia que guía tu evolución espiritual.`

    document.getElementById("esenciaPersonal").textContent = datos.esenciaPersonal

    // Scroll suave hacia los resultados
    document.getElementById("resultsContainer").scrollIntoView({
        behavior: "smooth",
    })
}

function nuevaLectura() {
    document.getElementById("formContainer").style.display = "block"
    document.getElementById("resultsContainer").style.display = "none"
    document.getElementById("mysticForm").reset()

    // Scroll hacia el formulario
    document.getElementById("formContainer").scrollIntoView({
        behavior: "smooth",
    })
}

// Efectos adicionales al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    // Crear más estrellas dinámicamente
    const starsContainer = document.querySelector(".stars")
    for (let i = 0; i < 50; i++) {
        const star = document.createElement("div")
        star.style.position = "absolute"
        star.style.width = Math.random() * 3 + "px"
        star.style.height = star.style.width
        star.style.backgroundColor = "#fff"
        star.style.borderRadius = "50%"
        star.style.left = Math.random() * 100 + "%"
        star.style.top = Math.random() * 100 + "%"
        star.style.animation = `sparkle ${Math.random() * 3 + 2}s linear infinite`
        star.style.opacity = Math.random()
        starsContainer.appendChild(star)
    }
})