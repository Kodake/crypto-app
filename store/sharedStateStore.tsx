import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';
import { Criptomoneda } from '../interfaces/appInterfaces';

interface Resultado {
  PRICE: number;
  HIGHDAY: number;
  LOWDAY: number;
  CHANGEPCT24HOUR: number;
  LASTUPDATE: string;
}

class SharedStateStore {
  moneda: string = '';
  criptomoneda: string = '';
  consultarAPI: boolean = false;
  resultado: Resultado | null = null;
  cargando: boolean = false;
  criptomonedas: Criptomoneda[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setMoneda(moneda: string): void {
    this.moneda = moneda;
  }

  setCriptomoneda(criptomoneda: string): void {
    this.criptomoneda = criptomoneda;
  }

  setConsultarAPI(consultarAPI: boolean): void {
    this.consultarAPI = consultarAPI;
  }

  setResultado(resultado: Resultado | null): void {
    this.resultado = resultado;
  }

  setCargando(cargando: boolean): void {
    this.cargando = cargando;
  }

  async fetchCriptomonedas(): Promise<void> {
    const url =
      'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    const response = await axios.get(url);
    const { Data } = response.data;

    runInAction(() => {
      this.criptomonedas = Data;
    });
  }

  async cotizarCriptomoneda(): Promise<void> {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.criptomoneda}&tsyms=${this.moneda}`;
    const response = await axios.get(url);
    const data = response.data.DISPLAY[this.criptomoneda][this.moneda];
    runInAction(() => {
      this.setCargando(true);
      setTimeout(() => {
        this.setResultado(data);
        this.setConsultarAPI(false);
        this.setCargando(false);
      }, 3000);
    });
  }
}

const sharedStateStore = new SharedStateStore();
export default sharedStateStore;