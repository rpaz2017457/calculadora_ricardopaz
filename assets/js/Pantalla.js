// Autor: Ricardo Paz <rpaz-2017457@kinal.edu.gt>

class Pantalla{
    constructor(pantallaValorAnterior, pantallaValorAhora){
        this.pantallaValorAhora = pantallaValorAhora;
        this.pantallaValorAnterior = pantallaValorAnterior;
        this.funcion = new Funciones();
        this.tipoDeOperacion = undefined;
        this.valorAhora = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: 'x',
            dividir: '/',
        }
    }

    borrar(){
        this.valorAhora = this.valorAhora.toString().slice(0,-1);
        this.mostrarValores();
    }

    borrarTodo(){
        this.valorAhora = '';
        this.valorAnterior = '';
        this.tipoDeOperacion = undefined;
        this.mostrarValores();
    }

    escribir(tipo){
        this.tipoDeOperacion !== 'igual' && this.calculos();
        this.tipoDeOperacion = tipo;
        this.valorAnterior = this.valorAhora || this.valorAnterior;
        this.valorAhora = '';
        this.mostrarValores();
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorAhora.includes('.')) return 
        this.valorAhora = this.valorAhora.toString() + numero.toString();
        this.mostrarValores();
    }

    mostrarValores(){
        this.pantallaValorAhora.textContent = this.valorAhora;
        this.pantallaValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoDeOperacion] || ''}`;
    }    

    calculos(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorAhora = parseFloat(this.valorAhora);
        

        if( isNaN(valorAhora) || isNaN(valorAnterior) ) return
        this.valorAhora = this.funcion[this.tipoDeOperacion](valorAnterior, valorAhora);
    }
}