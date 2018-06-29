import { Currency } from './currency.class';

export class CryptoCurrency {
    public id: string;
    public name: string;
    public symbol: string;
    public rank: number;
    public circulating_supply: number;
    public total_supply: number;
    public max_supply: number;
    public quotes: any;
    
    public last_updated: number;

    constructor(data?: any) {
        const defaults: any = {
            quotes: {
                USD: Currency
            },
            ...data
        };

        this.id = defaults.id;
        this.name = defaults.name;
        this.symbol = defaults.symbol;
        this.rank = defaults.rank;
        this.circulating_supply = defaults.circulating_supply;
        this.total_supply = defaults.total_supply;
        this.max_supply = defaults.max_supply;
        this.quotes = {
            USD: {
                price: defaults.quotes.USD.price,
                volume_24h: defaults.quotes.USD.volume_24h,
                market_cap: defaults.quotes.USD.market_cap,
                percent_change_1h: defaults.quotes.USD.percent_change_1h,
                percent_change_24h: defaults.quotes.USD.percent_change_24h,
                percent_change_7d: defaults.quotes.USD.percent_change_7d
            }
        };
        this.last_updated = defaults.last_updated;
    }
}

