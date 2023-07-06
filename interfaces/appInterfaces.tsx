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