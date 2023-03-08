//boton bars, extender y cerrar opciones
const btnBars = document.getElementById('cv-bars_boton');
const lista = document.getElementById('cv-bars_lista');

let banderaBars = true;
btnBars.addEventListener('click', () => {
    if (banderaBars) {
        lista.style.display = 'flex';
        banderaBars = false;
    } 
    if (!banderaBars) {
        window.addEventListener('click', (e) => {
            if(lista.contains(e.target) && lista.style.display === 'flex') {
                lista.style.display = 'none';
                banderaBars = true;
            }
        })
    }
})

//opciones de navegador
const aInicio = document.getElementById('identificaddor-inicio');
const aPostulante = document.getElementById('identificaddor-postulante');
const aHabilidades = document.getElementById('identificaddor-habilidades');
const aExperiencia = document.getElementById('identificaddor-experiencia');

//botones para abrir y cerrar formulario
const btnAbrir = document.getElementById('mostrar_formulario');
const btnCerrar = document.getElementById('cerrar-boton');

//fichas del curriculum
const fichaTexto = document.getElementById('informar-texto');
const fichaDatos = document.getElementById('informar-datos');
const fichaForm = document.getElementById('formulario_contacto');
const fichaHabilidad = document.getElementById('informar-habilidades');
const fichaExperiencia = document.getElementById('informar-experiencia');

//funcion que cambia el display de las fichas del CV
const cambiarDisplay = (exibir, bloquear1, bloquear2, bloquear3, mostrar) => {
    exibir.style.display = mostrar;
    bloquear1.style.display = 'none';
    bloquear2.style.display = 'none';
    bloquear3.style.display = 'none';
}

//dandole funcionalidad a las opciones del menu, cambianod el ddisplay de las fichas
aInicio. addEventListener('click', () => cambiarDisplay(fichaTexto, fichaDatos, fichaHabilidad, fichaExperiencia, 'grid'));
aPostulante.addEventListener('click', () => cambiarDisplay(fichaDatos, fichaTexto, fichaHabilidad, fichaExperiencia, 'grid'));
aHabilidades.addEventListener('click', () => cambiarDisplay(fichaHabilidad, fichaTexto, fichaDatos, fichaExperiencia, 'grid'));
aExperiencia.addEventListener('click', () => cambiarDisplay(fichaExperiencia, fichaTexto, fichaDatos, fichaHabilidad, 'grid'));

//dandole funcionalidad a los botones para abrir y cerrar el formulario
btnAbrir.addEventListener('click', () => {
    fichaForm.style.display = 'grid';
})
btnCerrar.addEventListener('click', () => {
    fichaForm.style.display = 'none';
})


//----------> FUNCIONALIDADES A LOS BOTONES DE NAVEGACION Y CAMBIOS DE FICHA DE INFORMACION <----------
//opciones de BOTONES  de navegacion
const btnInicio = document.getElementById('boton-inicio');
const btnPostulante = document.getElementById('boton-postulante');
const btnHabilidades = document.getElementById('boton-habilidad');
const btnExperiencia = document.getElementById('boton-experiencia');
let btnId = '';

//dandole funcionalidad a los BOTONES, para cambiar el display de las fichas
btnInicio. addEventListener('click', () => cambiarDisplay(fichaTexto, fichaDatos, fichaHabilidad, fichaExperiencia, 'grid'));
btnPostulante.addEventListener('click', () => cambiarDisplay(fichaDatos, fichaTexto, fichaHabilidad, fichaExperiencia, 'grid'));
btnHabilidades.addEventListener('click', () => cambiarDisplay(fichaHabilidad, fichaTexto, fichaDatos, fichaExperiencia, 'grid'));
btnExperiencia.addEventListener('click', () => cambiarDisplay(fichaExperiencia, fichaTexto, fichaDatos, fichaHabilidad, 'grid'));


const mantenerColor = (id) => {
    if(btnId != id) {
        if(btnId != '') {
            document.getElementById(btnId).style.color = '#011627';
        }
        btnId = id;
        document.getElementById(btnId).style.color = '#FF3366';
    }
}

mantenerColor('boton-inicio');
btnInicio.addEventListener('click', (e) => mantenerColor(e.target.id));
btnPostulante.addEventListener('click', (e) => mantenerColor(e.target.id));
btnHabilidades.addEventListener('click', (e) => mantenerColor(e.target.id));
btnExperiencia.addEventListener('click', (e) => mantenerColor(e.target.id));


//----------> FUNCIONALIDADES A LOS BOTONES DE NAVEGACION Y CAMBIOS DE FICHAS ED EMPLEO POR AÑO <----------
//obteniendo boton por anio de experiencia
const btnAnioUno = document.getElementById('decada-uno');
const btnAnioDos = document.getElementById('decada-dos');
const btnAnioTres = document.getElementById('decada-tres');

//obteniendo fichas de informacion por anio de experiencia
const fichaAnioUno = document.getElementById('mostrar-experiencia_decadaUno');
const fichaAnioDos = document.getElementById('mostrar-experiencia_decadaDos');
const fichaAnioTres = document.getElementById('mostrar-experiencia_decadaTres');

//funcion que cambia el display de las fichas de las decadas en experiencia
const cambiarDisplayAnio = (exibir, bloquear1, bloquear2, mostrar) => {
    exibir.style.display = mostrar;
    bloquear1.style.display = 'none';
    bloquear2.style.display = 'none';
}

//llamando a la funcion que cambia el display a las fichas por anio de experiencia
fichaAnioUno.style.display = 'grid';
btnAnioUno.addEventListener('click', () => cambiarDisplayAnio(fichaAnioUno, fichaAnioDos, fichaAnioTres, 'grid'));
btnAnioDos.addEventListener('click', () => cambiarDisplayAnio(fichaAnioDos, fichaAnioUno, fichaAnioTres, 'grid'));
btnAnioTres.addEventListener('click', () => cambiarDisplayAnio(fichaAnioTres, fichaAnioUno, fichaAnioDos, 'grid'));
let btnId2 = '';

const colorFondo = (id) => {
    if(btnId2 != id) {
        if(btnId2 != '') {
            document.getElementById(btnId2).style.background = '#011627';
        }
        btnId2 = id;
        document.getElementById(btnId2).style.background = '#2EC4B6';
    }
}
colorFondo('decada-uno');
btnAnioUno.addEventListener('click', (e) => colorFondo(e.target.id));
btnAnioDos.addEventListener('click', (e) => colorFondo(e.target.id));
btnAnioTres.addEventListener('click', (e) => colorFondo(e.target.id));