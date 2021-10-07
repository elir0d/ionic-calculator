/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numeroAtual = '0';
  primeiroNumero = null;
  operador = null;
  aguardarSegundoNumero = false;

  constructor() { }

  //Aguarda o usuário digitar o primeiro numero e confirma se um operador foi digitado
  public coletaONumeroDigitado(n: string) {
    console.log(n);
    if (this.aguardarSegundoNumero) {
      this.numeroAtual = n;
      this.aguardarSegundoNumero = false;
    } else {
      this.numeroAtual === '0'
        ? (this.numeroAtual = n)
        : (this.numeroAtual += n);
    }
  }

  adicionaPontoDecimal() {
    if (!this.numeroAtual.includes('.')) {
      this.numeroAtual += '.';
    }
  }

  //Adiciona o operador//
  private calculos(op, secondOp) {
    switch (op) {
      case '+':
        return (this.primeiroNumero += secondOp);
      case '-':
        return (this.primeiroNumero -= secondOp);
      case '*':
        return (this.primeiroNumero *= secondOp);
      case '/':
        return (this.primeiroNumero /= secondOp);
      case '=':
        return secondOp;
    }
  }

  public fazOperacao(op: string) {
    console.log(op);

    if (this.primeiroNumero === null) {
      this.primeiroNumero = Number(this.numeroAtual);
    } else if (this.operador) {
      const resultado = this.calculos(
        this.operador,
        Number(this.numeroAtual)
      );
      this.numeroAtual = String(resultado);
      this.primeiroNumero = resultado;
    }
    this.operador = op;
    this.aguardarSegundoNumero = true;

    console.log(this.primeiroNumero);
  }

  public limpar() {
    this.numeroAtual = '0';
    this.primeiroNumero = null;
    this.operador = null;
    this.aguardarSegundoNumero = false;
  }
}
