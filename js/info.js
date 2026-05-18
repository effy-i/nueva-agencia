
// ─── DECLARACIÓN DE VARIABLES ─────────────────────────────

let cliente;
let correo;
let opcion;
let servicio;
let detalle;
let valor;
let asesor;
let idAsesor;

let totalVentas;
let cantidadVentas;
let continuar;
let continuarServicio;

let resumen;

// ─── ASESORES ─────────────────────────────────────────────

let asesor1 = "Carlos Pérez";
let asesor2 = "Laura Gómez";
let asesor3 = "Andrés Martínez";
let asesor4 = "Valeria Torres";

let id1 = "1045678901";
let id2 = "1032456789";
let id3 = "1067893412";
let id4 = "1098234567";

// ─── ACUMULADORES ─────────────────────────────────────────

let recaudoAsesor1 = 0;
let recaudoAsesor2 = 0;
let recaudoAsesor3 = 0;
let recaudoAsesor4 = 0;

let ventasTiquetes  = 0;
let ventasHospedaje = 0;
let ventasVehiculos = 0;
let ventasPasadias  = 0;

// ─── VARIABLES INICIALES ──────────────────────────────────

totalVentas    = 0;
cantidadVentas = 0;  
resumen        = "";

// ─── REGISTRO DE CLIENTES ─────────────────────────────────

do {

  cliente = prompt("Ingrese el nombre del cliente:");

  while (cliente == "" || cliente == null || !isNaN(cliente)) {
    alert("ERROR. Nombre inválido.");
    cliente = prompt("Ingrese el nombre del cliente:");
  }

  cliente = cliente.toUpperCase();

  // ─── CORREO ────────────────────────────────────────────

  correo = prompt("Ingrese el correo del cliente:");

  while (correo == "" || correo == null || !correo.includes("@")) {
    alert("ERROR. Correo inválido.");
    correo = prompt("Ingrese el correo del cliente:");
  }

  correo = correo.toLowerCase();

  // ─── EL MISMO CLIENTE PUEDE PEDIR VARIOS SERVICIOS ─────

  do {

    opcion = prompt(
      "Seleccione un servicio:\n" +
      "1 → Tiquetes aéreos\n" +
      "2 → Hospedaje en hoteles\n" +
      "3 → Alquiler de vehículos\n" +
      "4 → Pasadías turísticos"
    );

    servicio = "";
    detalle  = "";
    valor    = 0;
    asesor   = "";
    idAsesor = "";

    // ─── SWITCH PRINCIPAL ────────────────────────────────

    switch (opcion) {

      // TIQUETES
      case "1":
        servicio = "Tiquetes aéreos";
        asesor   = asesor1;
        idAsesor = id1;

        opcion = prompt(
          "Seleccione destino:\n" +
          "1 → Bogotá     ($350.000)\n" +
          "2 → Medellín   ($280.000)\n" +
          "3 → Cartagena  ($420.000)"
        );

        switch (opcion) {
          case "1": detalle = "Bogotá";    valor = 350000; break;
          case "2": detalle = "Medellín";  valor = 280000; break;
          case "3": detalle = "Cartagena"; valor = 420000; break;
          default:  detalle = "Destino inválido";
        }
        break;

      // HOSPEDAJE
      case "2":
        servicio = "Hospedaje en hoteles";
        asesor   = asesor2;
        idAsesor = id2;

        opcion = prompt(
          "Seleccione hospedaje:\n" +
          "1 → Hotel Caribe     ($180.000)\n" +
          "2 → Hotel Andino     ($120.000)\n" +
          "3 → Hotel Campestre  ($150.000)"
        );

        switch (opcion) {
          case "1": detalle = "Hotel Caribe - Frente al mar";          valor = 180000; break;
          case "2": detalle = "Hotel Andino - Centro histórico";       valor = 120000; break;
          case "3": detalle = "Hotel Campestre - Naturaleza y piscina"; valor = 150000; break;
          default:  detalle = "Hospedaje inválido";
        }
        break;

      // VEHÍCULOS
      case "3":
        servicio = "Alquiler de vehículos";
        asesor   = asesor3;
        idAsesor = id3;

        opcion = prompt(
          "Seleccione vehículo:\n" +
          "1 → Económico      ($90.000)\n" +
          "2 → Familiar       ($140.000)\n" +
          "3 → Camioneta 4x4  ($200.000)"
        );

        switch (opcion) {
          case "1": detalle = "Económico";     valor = 90000;  break;
          case "2": detalle = "Familiar";      valor = 140000; break;
          case "3": detalle = "Camioneta 4x4"; valor = 200000; break;
          default:  detalle = "Vehículo inválido";
        }
        break;

      // PASADÍAS
      case "4":
        servicio = "Pasadías turísticos";
        asesor   = asesor4;
        idAsesor = id4;

        opcion = prompt(
          "Seleccione destino:\n" +
          "1 → Isla del Rosario    ($300.000)\n" +
          "2 → Ciudad Amurallada   ($180.000)\n" +
          "3 → Sierra Nevada       ($220.000)"
        );

        switch (opcion) {
          case "1": detalle = "Isla del Rosario - Snorkel y almuerzo"; valor = 300000; break;
          case "2": detalle = "Ciudad Amurallada - Guía y tour";       valor = 180000; break;
          case "3": detalle = "Sierra Nevada - Senderismo";            valor = 220000; break;
          default:  detalle = "Destino inválido";
        }
        break;

      default:
        servicio = "Servicio inválido";
    }

    // ─── IF ──────────────────────────────────────────────

    if (valor > 0) {

      totalVentas += valor;
      cantidadVentas++;

      // Contadores por servicio
      if (opcion !== null) {
        if (servicio === "Tiquetes aéreos")      { ventasTiquetes++;  recaudoAsesor1 += valor; }
        if (servicio === "Hospedaje en hoteles") { ventasHospedaje++; recaudoAsesor2 += valor; }
        if (servicio === "Alquiler de vehículos"){ ventasVehiculos++; recaudoAsesor3 += valor; }
        if (servicio === "Pasadías turísticos")  { ventasPasadias++;  recaudoAsesor4 += valor; }
      }

      resumen +=
        "<p><span class='label'>Venta " + cantidadVentas + ":</span><br>" +
        "Cliente: "   + cliente  + "<br>" +
        "Correo: "    + correo   + "<br>" +
        "Servicio: "  + servicio + "<br>" +
        "Detalle: "   + detalle  + "<br>" +
        "Asesor: "    + asesor   + "<br>" +
        "ID Asesor: " + idAsesor + "<br>" +
        "Valor: $"    + valor.toLocaleString("es-CO") +
        "</p>";

    } else {

      alert("No se registró la venta.");
    }

    continuarServicio = prompt("¿Desea agregar otro servicio para este cliente? (si/no)");

  } while (continuarServicio !== null && continuarServicio.toLowerCase() === "si");

  continuar = prompt("¿Desea registrar otro cliente? (si/no)");

} while (continuar !== null && continuar.toLowerCase() === "si");

// ─── MEJOR ASESOR ─────────────────────────────────────────

let mejorAsesor = asesor1;
let mayor = recaudoAsesor1;

if (recaudoAsesor2 > mayor) { mejorAsesor = asesor2; mayor = recaudoAsesor2; }
if (recaudoAsesor3 > mayor) { mejorAsesor = asesor3; mayor = recaudoAsesor3; }
if (recaudoAsesor4 > mayor) { mejorAsesor = asesor4; mayor = recaudoAsesor4; }

// ─── NIVELES ──────────────────────────────────────────────

let nivel1;
let nivel2;
let nivel3;
let nivel4;

if      (recaudoAsesor1 >= 2000000) { nivel1 = "🥇 Élite"; }
else if (recaudoAsesor1 >= 1000000) { nivel1 = "🥈 Destacado"; }
else                                 { nivel1 = "🥉 Regular"; }

if      (recaudoAsesor2 >= 2000000) { nivel2 = "🥇 Élite"; }
else if (recaudoAsesor2 >= 1000000) { nivel2 = "🥈 Destacado"; }
else                                 { nivel2 = "🥉 Regular"; }

if      (recaudoAsesor3 >= 2000000) { nivel3 = "🥇 Élite"; }
else if (recaudoAsesor3 >= 1000000) { nivel3 = "🥈 Destacado"; }
else                                 { nivel3 = "🥉 Regular"; }

if      (recaudoAsesor4 >= 2000000) { nivel4 = "🥇 Élite"; }
else if (recaudoAsesor4 >= 1000000) { nivel4 = "🥈 Destacado"; }
else                                 { nivel4 = "🥉 Regular"; }

// ─── RESULTADOS ───────────────────────────────────────────

document.write("<div class='card'>");
document.write(resumen);
document.write("<hr>");

document.write("<p><span class='label'>Total ventas:</span> $" + totalVentas.toLocaleString("es-CO") + "</p>");
document.write("<p><span class='label'>Cantidad de ventas:</span> " + cantidadVentas + "</p>");
document.write("<p><span class='label'>Mejor asesor:</span> " + mejorAsesor + "</p>");

document.write("<h2>Nivel de asesores</h2>");

document.write("<p>" + asesor1 + ": " + nivel1 + " | Ventas: $" + recaudoAsesor1.toLocaleString() + "</p>");
document.write("<p>" + asesor2 + ": " + nivel2 + " | Ventas: $" + recaudoAsesor2.toLocaleString() + "</p>");
document.write("<p>" + asesor3 + ": " + nivel3 + " | Ventas: $" + recaudoAsesor3.toLocaleString() + "</p>");
document.write("<p>" + asesor4 + ": " + nivel4 + " | Ventas: $" + recaudoAsesor4.toLocaleString() + "</p>");

document.write("<h2>Servicios vendidos</h2>");
document.write("<p>Tiquetes: "  + ventasTiquetes  + "</p>");
document.write("<p>Hospedajes: " + ventasHospedaje + "</p>");
document.write("<p>Vehículos: " + ventasVehiculos + "</p>");
document.write("<p>Pasadías: "  + ventasPasadias  + "</p>");

document.write("</div>");