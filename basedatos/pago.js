// js/pago.js
document.addEventListener("DOMContentLoaded", () => {
  const formPago = document.getElementById("formPago");

  formPago.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const fecha = document.getElementById("fecha").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const direccion = document.getElementById("direccion").value.trim();

    if (!nombre || !numero || !fecha || !cvv || !direccion) {
      alert("⚠️ Todos los campos son obligatorios.");
      return;
    }

    // Validaciones simples
    if (!/^\d{16}$/.test(numero.replace(/\s+/g, ""))) {
      alert("⚠️ El número de tarjeta debe tener 16 dígitos.");
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(fecha)) {
      alert("⚠️ La fecha debe estar en formato MM/AA.");
      return;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      alert("⚠️ El CVV debe tener 3 o 4 dígitos.");
      return;
    }

    // Aquí puedes enviar los datos al servidor si quieres
    alert("✅ Pago procesado con éxito. ¡Gracias por tu compra!");
    formPago.reset();
  });
});
