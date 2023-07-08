export interface Criptomoneda {
    CoinInfo: {
        Id: string;
        FullName: string;
        Name: string;
    };
}

export interface Resultado {
    PRICE: number;
    HIGHDAY: number;
    LOWDAY: number;
    CHANGEPCT24HOUR: number;
    LASTUPDATE: string;
}

export interface SharedStateStore {
    moneda: string;
    criptomoneda: string;
    consultarAPI: boolean;
    resultado: any;
    cargando: boolean;
    criptomonedas: Criptomoneda[];
    setMoneda(moneda: string): void;
    setCriptomoneda(criptomoneda: string): void;
    setConsultarAPI(consultarAPI: boolean): void;
    setResultado(resultado: any): void;
    setCargando(cargando: boolean): void;
    fetchCriptomonedas(): Promise<void>;
    cotizarCriptomoneda(): Promise<void>;
}