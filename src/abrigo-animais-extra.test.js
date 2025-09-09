import { AbrigoAnimais } from "./abrigo-animais";

describe('Abrigo de Animais - Casos Extras', () => {

  test('Deve rejeitar animal duplicado na ordem', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,BOLA','RATO,NOVELO','Rex,Rex');
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve rejeitar brinquedo inválido na pessoa 1', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,BANANA','RATO,NOVELO','Rex');
    expect(resultado.erro).toBe('Brinquedo inválido');
  });

  test('Deve rejeitar brinquedo duplicado na pessoa 2', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,BOLA','RATO,RATO','Rex');
    expect(resultado.erro).toBe('Brinquedo inválido');
  });

  test('Regra do Loco: deve ir para abrigo se sem companhia', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('SKATE','RATO','Loco');
    expect(resultado.lista[0]).toBe('Loco - abrigo');
  });

  test('Regra do Loco: Loco com companhia ainda vai para abrigo (simplificação)', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('SKATE,RATO','RATO,SKATE','Loco,Rex');
    expect(resultado.lista).toContain('Loco - abrigo');
  });

  test('Máximo 3 animais por pessoa', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA,LASER,CAIXA,NOVELO',
      'RATO,BOLA,LASER,CAIXA,NOVELO',
      'Rex,Bola,Bebe,Zero,Mimi,Fofo'
    );

    const pessoa1 = resultado.lista.filter(a => a.includes('pessoa 1'));
    const pessoa2 = resultado.lista.filter(a => a.includes('pessoa 2'));

    expect(pessoa1.length).toBeLessThanOrEqual(3);
    expect(pessoa2.length).toBeLessThanOrEqual(3);
  });

});
