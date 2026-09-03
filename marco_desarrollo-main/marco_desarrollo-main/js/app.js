// ========================================
// VARIABLES Y CONSTANTES
// ========================================

const mensajeBusqueda =
    document.getElementById("mensajeBusqueda");

const mensajeSolicitud =
    document.getElementById("mensajeSolicitud");

const mensajeLogin =
    document.getElementById("mensajeLogin");


// ========================================
// POPOVERS
// ========================================

const popoverTriggerList =
    [].slice.call(
        document.querySelectorAll(
            '[data-bs-toggle="popover"]'
        )
    );

const popoverList =
    popoverTriggerList.map(function (popoverTriggerEl) {

        return new bootstrap.Popover(popoverTriggerEl);

    });


// ========================================
// FUNCIÓN SELECCIONAR SERVICIO
// ========================================

function seleccionarServicio(servicio) {

    console.log("Servicio seleccionado:", servicio);

    alert(
        "Has seleccionado el servicio de " + servicio
    );
}


// ========================================
// FUNCIÓN VER PERFIL
// ========================================

function verPerfil(nombre) {

    if (nombre !== "") {

        alert(
            "Mostrando perfil de " + nombre
        );

    } else {

        alert("No se encontró el trabajador.");

    }
}


// ========================================
// BASE DE DATOS DE TRABAJADORES (SIMULADA)
// ========================================

const trabajadores = [
    // GASFITERÍA
    { id: 1, nombre: "Carlos Mendoza", categoria: "gasfiteria", zona: "vitarte", especialidad: "Reparación de tuberías", rating: 4.9, trabajos: 36, foto: "", precio: 50 },
    { id: 2, nombre: "Juan Pérez", categoria: "gasfiteria", zona: "santa-anita", especialidad: "Instalación de grifos", rating: 4.7, trabajos: 28, foto: "", precio: 55 },
    { id: 3, nombre: "Roberto Silva", categoria: "gasfiteria", zona: "ate", especialidad: "Mantenimiento general", rating: 4.8, trabajos: 42, foto: "", precio: 50 },
    { id: 4, nombre: "Miguel Ángel", categoria: "gasfiteria", zona: "la-molina", especialidad: "Fugas de agua", rating: 4.6, trabajos: 25, foto: "", precio: 60 },
    
    // ELECTRICIDAD
    { id: 5, nombre: "José Ramírez", categoria: "electricidad", zona: "ate", especialidad: "Instalaciones eléctricas", rating: 4.7, trabajos: 42, foto: "", precio: 75 },
    { id: 6, nombre: "Luis García", categoria: "electricidad", zona: "vitarte", especialidad: "Reparación de circuitos", rating: 4.9, trabajos: 38, foto: "", precio: 70 },
    { id: 7, nombre: "Andrés López", categoria: "electricidad", zona: "la-molina", especialidad: "Instalación de paneles", rating: 4.8, trabajos: 31, foto: "", precio: 80 },
    { id: 8, nombre: "David Martínez", categoria: "electricidad", zona: "santa-anita", especialidad: "Mantenimiento preventivo", rating: 4.5, trabajos: 22, foto: "", precio: 65 },
    
    // CARPINTERÍA
    { id: 9, nombre: "Fernando Castro", categoria: "carpinteria", zona: "vitarte", especialidad: "Muebles a medida", rating: 4.9, trabajos: 50, foto: "", precio: 60 },
    { id: 10, nombre: "Oscar Ruiz", categoria: "carpinteria", zona: "ate", especialidad: "Reparación de muebles", rating: 4.7, trabajos: 35, foto: "", precio: 55 },
    { id: 11, nombre: "Manuel Flores", categoria: "carpinteria", zona: "santa-anita", especialidad: "Puertas y marcos", rating: 4.6, trabajos: 28, foto: "", precio: 60 },
    { id: 12, nombre: "Ernesto Vargas", categoria: "carpinteria", zona: "la-molina", especialidad: "Acabados finos", rating: 4.8, trabajos: 45, foto: "", precio: 65 },
    
    // PINTURA
    { id: 13, nombre: "María Torres", categoria: "pintura", zona: "santa-anita", especialidad: "Pintura interior", rating: 4.8, trabajos: 28, foto: "", precio: 40 },
    { id: 14, nombre: "Sandra Gómez", categoria: "pintura", zona: "vitarte", especialidad: "Pintura exterior", rating: 4.9, trabajos: 33, foto: "h", precio: 42 },
    { id: 15, nombre: "Patricia Hernández", categoria: "pintura", zona: "ate", especialidad: "Acabados artísticos", rating: 4.7, trabajos: 26, foto: "", precio: 45 },
    { id: 16, nombre: "Rosa Díaz", categoria: "pintura", zona: "la-molina", especialidad: "Decoración y diseño", rating: 4.6, trabajos: 20, foto: "", precio: 50 },
    
    // LIMPIEZA
    { id: 17, nombre: "Alejandra Morales", categoria: "limpieza", zona: "vitarte", especialidad: "Limpieza profunda", rating: 4.9, trabajos: 60, foto: "", precio: 35 },
    { id: 18, nombre: "Beatriz Campos", categoria: "limpieza", zona: "ate", especialidad: "Limpieza de oficinas", rating: 4.8, trabajos: 45, foto: "", precio: 40 },
    { id: 19, nombre: "Carla Rojas", categoria: "limpieza", zona: "santa-anita", especialidad: "Limpieza de viviendas", rating: 4.7, trabajos: 38, foto: "", precio: 35 },
    { id: 20, nombre: "Diana Soto", categoria: "limpieza", zona: "la-molina", especialidad: "Desinfección", rating: 4.9, trabajos: 52, foto: "", precio: 45 },
    
    // REPARACIONES
    { id: 21, nombre: "Héctor Navarro", categoria: "reparaciones", zona: "vitarte", especialidad: "Reparaciones generales", rating: 4.8, trabajos: 48, foto: "", precio: 55 },
    { id: 22, nombre: "Raúl Acosta", categoria: "reparaciones", zona: "ate", especialidad: "Estructuras", rating: 4.7, trabajos: 32, foto: "", precio: 60 },
    { id: 23, nombre: "Sergio Fernández", categoria: "reparaciones", zona: "santa-anita", especialidad: "Mantenimiento del hogar", rating: 4.9, trabajos: 55, foto: "", precio: 50 },
    { id: 24, nombre: "Tomás Mendez", categoria: "reparaciones", zona: "la-molina", especialidad: "Reparaciones diversas", rating: 4.6, trabajos: 24, foto: "", precio: 65 }
];


// ========================================
// FUNCIÓN PARA CREAR TARJETA DE TRABAJADOR
// ========================================

function crearTarjetaTrabajador(trabajador) {
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <article class="card h-100 shadow-sm">
                <img
                    src="${trabajador.foto}"
                    class="card-img-top"
                    alt="${trabajador.nombre}"
                >
                <div class="card-body d-flex flex-column">
                    <span class="badge text-bg-info align-self-start mb-3">Disponible</span>
                    <h3 class="h4 card-title">${trabajador.nombre}</h3>
                    <p class="card-text text-muted small">
                        ${trabajador.especialidad}
                    </p>
                    <div class="mb-3 mt-2 text-dark service-info">
                        <div class="d-flex justify-content-between border-bottom pb-2 mb-2">
                            <span class="info-label">Precio base:</span>
                            <strong class="info-value">S/ ${trabajador.precio}.00</strong>
                        </div>
                        <div class="d-flex justify-content-between pt-1">
                            <span class="info-label">Rating:</span>
                            <strong class="info-value">★ ${trabajador.rating}</strong>
                        </div>
                    </div>
                    <p class="text-muted small mb-3">
                        <i class="fas fa-briefcase"></i> ${trabajador.trabajos} trabajos realizados
                    </p>
                    <div class="mt-auto d-flex gap-2 flex-wrap">
                        <button
                            type="button"
                            class="btn btn-sm btn-outline-primary flex-grow-1"
                            data-bs-toggle="popover"
                            data-bs-title="${trabajador.nombre}"
                            data-bs-content="Especialista en ${trabajador.especialidad}. Calificación: ${trabajador.rating}/5. Contáctalo para más información."
                        >
                            Información
                        </button>
                        <button
                            class="btn btn-sm btn-primary flex-grow-1"
                            onclick="contratarTrabajador('${trabajador.nombre}', '${trabajador.categoria}')"
                        >
                            Contratar
                        </button>
                    </div>
                </div>
            </article>
        </div>
    `;
}


// ========================================
// FUNCIÓN PARA CONTRATAR TRABAJADOR
// ========================================

function contratarTrabajador(nombre, categoria) {
    alert(`¡Excelente! Has seleccionado a ${nombre} para ${categoria.replace('-', ' ')}.`);
}


// ========================================
// BUSCAR SERVICIOS
// ========================================

document
    .getElementById("busquedaForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const categoria =
            document.getElementById("categoria").value;

        const zona =
            document.getElementById("zona").value;


        if (categoria === "" || zona === "") {

            mensajeBusqueda.innerHTML =
                '<div class="alert alert-warning">' +
                '<i class="fas fa-info-circle"></i> Selecciona una categoría y una zona.' +
                '</div>';

        } else {

            // Filtrar trabajadores por categoría y zona
            const resultados = trabajadores.filter(t => 
                t.categoria === categoria && t.zona === zona
            );

            const modalContenido = document.getElementById("modalResultadosContenido");

            if (resultados.length > 0) {

                let html = '<div class="alert alert-success mb-4">' +
                    '<i class="fas fa-check-circle"></i> Se encontraron <strong>' + resultados.length + 
                    '</strong> trabajador(es) disponible(s).' +
                    '</div>';

                html += '<div class="row g-4">';

                resultados.forEach(trabajador => {
                    html += crearTarjetaTrabajador(trabajador);
                });

                html += '</div>';

                modalContenido.innerHTML = html;

                // Reinicializar popovers
                const popoverTriggerList = [].slice.call(
                    modalContenido.querySelectorAll('[data-bs-toggle="popover"]')
                );
                popoverTriggerList.map(function (popoverTriggerEl) {
                    return new bootstrap.Popover(popoverTriggerEl);
                });

                // Mostrar el modal
                const modal = new bootstrap.Modal(document.getElementById('resultadosBusquedaModal'));
                modal.show();

                // Mostrar mensaje de éxito en la caja de búsqueda también
                mensajeBusqueda.innerHTML =
                    '<div class="alert alert-success">' +
                    '<i class="fas fa-check-circle"></i> ¡Búsqueda completada! Revisa para ver los resultados.' +
                    '</div>';

                console.log("Búsqueda exitosa:", resultados.length, "trabajadores encontrados");

            } else {

                modalContenido.innerHTML = 
                    '<div class="alert alert-danger">' +
                    '<i class="fas fa-times-circle"></i> No hay trabajadores disponibles en <strong>' + 
                    zona.replace('-', ' ') + '</strong> para <strong>' + 
                    categoria.replace('-', ' ') + '</strong>. Intenta con otra búsqueda.' +
                    '</div>';

                // Mostrar el modal con el mensaje de error
                const modal = new bootstrap.Modal(document.getElementById('resultadosBusquedaModal'));
                modal.show();

                mensajeBusqueda.innerHTML =
                    '<div class="alert alert-danger">' +
                    '<i class="fas fa-times-circle"></i> Sin resultados disponibles.' +
                    '</div>';

                console.log("No se encontraron resultados para:", categoria, zona);
            }
        }

    });


// ========================================
// VALIDACIÓN DEL FORMULARIO
// ========================================

const solicitudForm =
    document.getElementById("solicitudForm");

let solicitudIntentada = false;

solicitudForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();
        solicitudIntentada = true;

        if (!solicitudForm.checkValidity()) {

            event.stopPropagation();
            solicitudForm.classList.add("was-validated");

            mensajeSolicitud.innerHTML =
                '<div class="alert alert-danger">' +
                '<i class="fas fa-exclamation-circle"></i> ' +
                'Revisa los campos obligatorios.' +
                '</div>';

        } else {

            try {

                const presupuesto =
                    document.getElementById("presupuesto").value;

                if (presupuesto <= 0) {

                    throw new Error(
                        "El presupuesto debe ser mayor que cero."
                    );

                }

                mensajeSolicitud.innerHTML =
                    '<div class="alert alert-success">' +
                    '<i class="fas fa-check-circle"></i> ' +
                    'Solicitud publicada correctamente.' +
                    '</div>';

                console.log(
                    "Solicitud publicada"
                );

            } catch (error) {

                solicitudForm.classList.add("was-validated");

                mensajeSolicitud.innerHTML =
                    '<div class="alert alert-danger">' +
                    '<i class="fas fa-exclamation-circle"></i> ' +
                    error.message +
                    '</div>';

                console.error(error);
            }
        }

    }
);

// Limpiar el formulario manualmente
const limpiarBtn = solicitudForm.querySelector('button[type="reset"]');
limpiarBtn.addEventListener('click', function() {
    solicitudForm.reset();
    solicitudForm.classList.remove("was-validated");
    mensajeSolicitud.innerHTML = "";
    solicitudIntentada = false;
});


// ========================================
// LOGIN
// ========================================

const loginForm = document.getElementById("loginForm");
const correoInput = document.getElementById("correo");
const passwordInput = document.getElementById("password");
const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal')) || new bootstrap.Modal(document.getElementById('loginModal'));
let loginIntentado = false;

// Expresión regular para validar correo
const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Función para validar campos en tiempo real
function validarCamposEnTiempoReal() {
    if (loginIntentado) {
        // Validar correo
        if (regexCorreo.test(correoInput.value)) {
            correoInput.classList.remove("is-invalid");
            correoInput.classList.add("is-valid");
        } else if (correoInput.value !== "") {
            correoInput.classList.add("is-invalid");
            correoInput.classList.remove("is-valid");
        }

        // Validar contraseña
        if (passwordInput.value.length >= 6) {
            passwordInput.classList.remove("is-invalid");
            passwordInput.classList.add("is-valid");
        } else if (passwordInput.value !== "") {
            passwordInput.classList.add("is-invalid");
            passwordInput.classList.remove("is-valid");
        }
    }
}

// Agregar listeners para validación en tiempo real
correoInput.addEventListener("input", validarCamposEnTiempoReal);
passwordInput.addEventListener("input", validarCamposEnTiempoReal);

// Evento principal del formulario
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const correo = correoInput.value;
    const password = passwordInput.value;

    let esValido = true;
    loginIntentado = true;

    // Validar correo
    if (!regexCorreo.test(correo)) {
        correoInput.classList.add("is-invalid");
        correoInput.classList.remove("is-valid");
        esValido = false;
    } else {
        correoInput.classList.remove("is-invalid");
        correoInput.classList.add("is-valid");
    }

    // Validar contraseña (mínimo 6 caracteres)
    if (password.length < 6) {
        passwordInput.classList.add("is-invalid");
        passwordInput.classList.remove("is-valid");
        esValido = false;
    } else {
        passwordInput.classList.remove("is-invalid");
        passwordInput.classList.add("is-valid");
    }

    if (esValido) {

        const tipoUsuario = document.querySelector(
            'input[name="tipoUsuario"]:checked'
        ).value;

        mensajeLogin.innerHTML =
            '<div class="alert alert-success">' +
            '<i class="fas fa-check-circle"></i> ' +
            'Inicio de sesión validado correctamente. ' +
            '<br><small>Usuario: ' + tipoUsuario + '</small>' +
            '</div>';

        console.log(
            "Login exitoso - Correo:",
            correo,
            "Tipo:",
            tipoUsuario
        );

        // Limpiar después de 2 segundos
        setTimeout(function() {
            loginForm.reset();
            correoInput.classList.remove("is-valid", "is-invalid");
            passwordInput.classList.remove("is-valid", "is-invalid");
            mensajeLogin.innerHTML = "";
            loginIntentado = false;
            // Cerrar el modal
            loginModal.hide();
        }, 2000);

    } else {

        mensajeLogin.innerHTML =
            '<div class="alert alert-danger">' +
            '<i class="fas fa-exclamation-circle"></i> ' +
            'Por favor revisa los campos. El correo debe ser válido y la contraseña mínimo 6 caracteres.' +
            '</div>';

        console.error("Validación fallida");

    }

});


// ========================================
// FOREACH
// ========================================

const servicios = [
    "Gasfitería",
    "Electricidad",
    "Carpintería",
    "Pintura",
    "Limpieza"
];

servicios.forEach(function(servicio) {

    console.log(
        "Servicio disponible:",
        servicio
    );

});