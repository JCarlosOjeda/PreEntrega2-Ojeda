class Adicional {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = Number(precio);
    }
}

const adicionales = []

adicionales.push(new Adicional("Maquina de Helados", "12000"))
adicionales.push(new Adicional("Cabina de Fotos", "9500"))
adicionales.push(new Adicional("Show de Magia", "6500"))
adicionales.push(new Adicional("Show de Burbujas", "3500"))
adicionales.push(new Adicional("Tatuajes", "4500"))
adicionales.push(new Adicional("Proyector y Pantalla", "3500"))


const carrito = [];



alert("Bienvenido al presupuestador OnLine de Verde Manzana");

alert("Lunes a Viernes por la tarde 10% de descuento y los Mediodias un 20%");

let precioSdescuento = 45000;

let presupuestoTotal = 0;

let seleccioneDia = prompt("Seleccione 1 para Sabados o Domingos \nSeleccione 2 para los días de semana");
while (seleccioneDia != 1 && seleccioneDia != 2) {
    alert("El valor ingresado no es correcto : Seleccione 1 para Sabados o Domingos \nSeleccione 2 para días de semana")
    seleccioneDia = prompt("Seleccione 1 para Sabados o Domingos \nSeleccione 2 para días de semana");
}

if (seleccioneDia == "1") {
    presupuestoTotal = precioSdescuento
    alert(`El precio del Salon es de $${presupuestoTotal}`);
    pregunta();
}
else {
    descuento();
    pregunta();
}



function descuento() {
    let horario = prompt("Seleccione 1 para el mediodia \nSeleccione 2 para la tarde o  noche");

    while (horario != 1 && horario != 2) {
        alert("Seleccione 1 para el mediodia \nSeleccione 2 para la tarde o  noche");

        horario = prompt("Seleccione 1 para el mediodia \nSeleccione 2 para la tarde o  noche");
    }

    if (horario == 1) {
        presupuestoTotal = precioSdescuento - precioSdescuento * 0.20;

    } else {
        presupuestoTotal = precioSdescuento - precioSdescuento * 0.10;
    }

    alert(`El precio del Salon es de $ ${presupuestoTotal}`)
}



function pregunta() {
    let pregunta = prompt("¿Desea agregar adicionales? S/N").toLocaleUpperCase();

    while (pregunta != "S" && pregunta != "N") {
        pregunta = prompt("La opcion no es valida, ¿Desea agregar adicionales? S/N").toLocaleUpperCase();
    }

    if (pregunta == "S") {
        alert("Estos son nuestros Adicionales");
        let nuestrosAdicionales = adicionales.map(
            (adicional) => adicional.nombre + " $" + adicional.precio 
        );
        alert(nuestrosAdicionales.join("\n"));

    } else
        if (pregunta == "N") {
            alert(`El precio del Salon es de $${presupuestoTotal}`);
        }



    while (pregunta === "S") {
        let adicional = prompt("Escribí el Adicional que te gusta").toLocaleUpperCase();
        let precio = 0

        if (adicional == "MAQUINA DE HELADOS" || adicional == "CABINA DE FOTOS" || adicional == "SHOW DE MAGIA"
            || adicional == "SHOW DE BURBUJAS" || adicional == "TATUAJES" || adicional == "PROYECTOR Y PANTALLA") {

            switch (adicional) {
                case "MAQUINA DE HELADOS":
                    precio = 12000
                    break;
                case "CABINA DE FOTOS":
                    precio = 9500
                    break;
                case "SHOW DE MAGIA":
                    precio = 6500
                    break;
                case "SHOW DE BURBUJAS":
                    precio = 3500
                    break;
                case "TATUAJES":
                    precio = 4500
                    break;
                case "PROYECTOR Y PANTALLA":
                    precio = 3500
                    break;
                default:
                    break;
            }

            carrito.push({ adicional, precio })


        } else {
            alert("Elija un Adicional valido")
        }

        pregunta = prompt("¿Desea agregar mas Adicionales? S/N").toLocaleUpperCase()

        while (pregunta == "N") {
            alert("Gracias por confiar en nosotros")
            carrito.forEach((carritoFinal) => {
                alert(` ${carritoFinal.adicional} el precio del Adicional es $${carritoFinal.precio}`)
            })
            break;
        }
    }
}

const carritoTotal = carrito.reduce((acc, item) => acc + item.precio, 0)
alert(`El total a pagar es $${carritoTotal + presupuestoTotal}`)


