// Lógica de negocio: suscripción de gimnasio.
// N = 11 -> tasaEquipo = (11 % 5) + 5 = 6 (%)
const TASA_EQUIPO = 6;
const MESES_MINIMOS_DESCUENTO = 3;

/**
 * Valida las entradas del cálculo.
 * @param {number} meses - Cantidad de meses de la suscripción (entero >= 1).
 * @param {number} tarifaMensual - Valor de un mes (número > 0).
 * @returns {boolean} true si las entradas son válidas, false en caso contrario.
 */
function validarEntradas(meses, tarifaMensual) {
  if (typeof meses !== 'number' || typeof tarifaMensual !== 'number') {
    return false;
  }
  if (!Number.isFinite(meses) || !Number.isFinite(tarifaMensual)) {
    return false;
  }
  if (!Number.isInteger(meses) || meses < 1) {
    return false;
  }
  if (tarifaMensual <= 0) {
    return false;
  }
  return true;
}

/**
 * Calcula el total a pagar por una suscripción de gimnasio.
 * Si meses >= 3 se aplica un descuento del 6 % (tasaEquipo).
 * @param {number} meses
 * @param {number} tarifaMensual
 * @returns {number} Total a pagar.
 * @throws {Error} Si las entradas no son válidas.
 */
function calcularTotalSuscripcion(meses, tarifaMensual) {
  if (!validarEntradas(meses, tarifaMensual)) {
    throw new Error('Entradas inválidas: meses debe ser entero >= 1 y tarifaMensual > 0');
  }

  const subtotal = meses * tarifaMensual;

  if (meses >= MESES_MINIMOS_DESCUENTO) {
    const descuento = subtotal * (TASA_EQUIPO / 100);
    return Math.round((subtotal - descuento) * 100) / 100;
  }

  return subtotal;
}

module.exports = { calcularTotalSuscripcion, validarEntradas };
