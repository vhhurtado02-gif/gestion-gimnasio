const { calcularTotalSuscripcion } = require('./calculadora');

describe('Suscripción de gimnasio - calcularTotalSuscripcion', () => {
  // ---------- CASOS NORMALES ----------
  test('Normal 1: 1 mes a $80.000 no aplica descuento y cobra $80.000', () => {
    // Arrange
    const meses = 1;
    const tarifa = 80000;
    // Act
    const resultado = calcularTotalSuscripcion(meses, tarifa);
    // Assert
    expect(resultado).toBe(80000);
  });

  test('Normal 2: 6 meses a $80.000 aplica 6% (tasaEquipo) y cobra $451.200', () => {
    // Arrange  Preparar
    const meses = 6;
    const tarifa = 80000; // subtotal 480.000 - 6% (28.800)
    // Act  Actuar
    const resultado = calcularTotalSuscripcion(meses, tarifa);
    // Assert  Verificar
    expect(resultado).toBe(451200);
  });

  test('Normal 3: 12 meses a $100.000 aplica 6% (tasaEquipo) y cobra $1.128.000', () => {
    // Arrange  
    const meses = 12;
    const tarifa = 100000; // subtotal 1.200.000 - 6% (72.000)
    // Act
    const resultado = calcularTotalSuscripcion(meses, tarifa);
    // Assert
    expect(resultado).toBe(1128000);
  });

  // ---------- CASOS BORDE ----------
  test('Borde 1: exactamente 3 meses (límite) ya aplica 6% y cobra $225.600', () => {
    // Arrange
    const meses = 3;
    const tarifa = 80000; // subtotal 240.000 - 6% (14.400)
    // Act
    const resultado = calcularTotalSuscripcion(meses, tarifa);
    // Assert
    expect(resultado).toBe(225600);
  });

  test('Borde 2: 0 meses lanza error de entradas inválidas', () => {
    // Arrange
    const meses = 0;
    const tarifa = 80000;
    // Act
    const accion = () => calcularTotalSuscripcion(meses, tarifa);
    // Assert
    expect(accion).toThrow('Entradas inválidas');
  });

  test('Borde 3: tipo de dato inválido (texto) lanza error', () => {
    // Arrange
    const meses = '5';
    const tarifa = 80000;
    // Act
    const accion = () => calcularTotalSuscripcion(meses, tarifa);
    // Assert
    expect(accion).toThrow('Entradas inválidas');
  });
});
