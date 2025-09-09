class AbrigoAnimais {
  constructor() {
    this.animais = {
      Rex: { tipo: 'cão', brinquedos: ['RATO', 'BOLA'] },
      Mimi: { tipo: 'gato', brinquedos: ['BOLA', 'LASER'] },
      Fofo: { tipo: 'gato', brinquedos: ['BOLA', 'RATO', 'LASER'] },
      Zero: { tipo: 'gato', brinquedos: ['RATO', 'BOLA'] },
      Bola: { tipo: 'cão', brinquedos: ['CAIXA', 'NOVELO'] },
      Bebe: { tipo: 'cão', brinquedos: ['LASER', 'RATO', 'BOLA'] },
      Loco: { tipo: 'jabuti', brinquedos: ['SKATE', 'RATO'] },
    };

    this.brinquedosValidos = [
      'RATO', 'BOLA', 'LASER', 'CAIXA', 'NOVELO', 'SKATE'
    ];
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    try {
      const pessoa1 = this._processaBrinquedos(brinquedosPessoa1);
      const pessoa2 = this._processaBrinquedos(brinquedosPessoa2);
      const listaAnimais = ordemAnimais.split(',').map(a => a.trim());

      const duplicados = new Set();
      for (let a of listaAnimais) {
        if (!this.animais[a] || duplicados.has(a)) {
          return { erro: 'Animal inválido' };
        }
        duplicados.add(a);
      }

      const resultado = [];
      const contadorPessoa = { 'pessoa 1': 0, 'pessoa 2': 0 };

      for (let animalNome of listaAnimais) {
        const animal = this.animais[animalNome];
        const favs = animal.brinquedos;

        const pessoa1Ok = this._segueOrdem(favs, pessoa1);
        const pessoa2Ok = this._segueOrdem(favs, pessoa2);

        let dono = 'abrigo';

       
        if (animalNome === 'Loco') {
          dono = 'abrigo';
        } else if (pessoa1Ok && (!pessoa2Ok || contadorPessoa['pessoa 2'] >= 3)) {
          if (contadorPessoa['pessoa 1'] < 3) dono = 'pessoa 1';
        } else if (pessoa2Ok && (!pessoa1Ok || contadorPessoa['pessoa 1'] >= 3)) {
          if (contadorPessoa['pessoa 2'] < 3) dono = 'pessoa 2';
        } else if (pessoa1Ok && pessoa2Ok) {
          dono = 'abrigo';
        }

        if (dono === 'pessoa 1') contadorPessoa['pessoa 1']++;
        if (dono === 'pessoa 2') contadorPessoa['pessoa 2']++;

        resultado.push(`${animalNome} - ${dono}`);
      }

      resultado.sort((a, b) => a.localeCompare(b));
      return { lista: resultado };
    } catch (e) {
      if (e.message === 'Brinquedo inválido') {
        return { erro: 'Brinquedo inválido' };
      }
      return { erro: 'Erro inesperado' };
    }
  }

  _processaBrinquedos(brinquedosTexto) {
    const lista = brinquedosTexto.split(',').map(b => b.trim());
    const usados = new Set();

    for (let b of lista) {
      if (!this.brinquedosValidos.includes(b)) {
        throw new Error('Brinquedo inválido');
      }
      if (usados.has(b)) {
        throw new Error('Brinquedo inválido');
      }
      usados.add(b);
    }

    return lista;
  }

  _segueOrdem(favoritos, listaPessoa) {
    let i = 0;
    for (let brinquedo of listaPessoa) {
      if (brinquedo === favoritos[i]) i++;
      if (i === favoritos.length) return true;
    }
    return i === favoritos.length;
  }
}

export { AbrigoAnimais as AbrigoAnimais };
