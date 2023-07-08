export interface CotizacionProps {
    resultado: {
        PRICE: string;
        HIGHDAY: string;
        LOWDAY: string;
        CHANGEPCT24HOUR: string;
        LASTUPDATE: string;
    };
}

export interface FormularioProps {
    moneda: string;
    criptomoneda: string;
    guardarMoneda: (moneda: string) => void;
    guardarCriptomoneda: (criptomoneda: string) => void;
    guardarConsultarAPI: (consultar: boolean) => void;
}

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

export interface CotizacionResponse {
    DISPLAY: {
        [criptomoneda: string]: {
            [moneda: string]: {
                PRICE: string;
                HIGHDAY: string;
                LOWDAY: string;
                CHANGEPCT24HOUR: string;
                LASTUPDATE: string;
            };
        };
    };
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