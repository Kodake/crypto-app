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