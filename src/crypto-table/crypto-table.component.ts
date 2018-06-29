import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { CryptoCurrency } from '../models/crypto-currency.class';

@Component(
    {
        selector: 'crypto-table',
        templateUrl: 'crypto-table.component.html',
        styleUrls: ['crypto-table.component.css']
    }
)

export class CryptoTableComponent {
    public top100Cryptos: CryptoCurrency[] = new Array();
    public sortValues: any = { rank: true, price: false, volume: false, percentChange24: false, name: false };

    constructor(public cryptoService: CryptoService) {
        this.getTop100Cryptos();
    }

    public getTop100Cryptos(): void {

        this.cryptoService.getAllCryptos().subscribe((data: any) => {
            for (var prop in data.data) {
                this.top100Cryptos.push(data.data[prop]);
            }
        });
    }

    public sortNumerically(sortValue: boolean, key: string) {
        if (sortValue) {
            this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
                if (this.top100Cryptos[0].quotes.USD.hasOwnProperty(key)) {
                    return a.quotes.USD[key] - b.quotes.USD[key];
                }
                else {
                    return a[key] - b[key];
                }
            });
        }
        else {
            this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
                if (this.top100Cryptos[0].quotes.USD.hasOwnProperty(key)) {
                    return b.quotes.USD[key] - a.quotes.USD[key];
                }
                else {
                    return b[key] - a[key];
                }
            });
        }
    }

    public sortAlphabetacally(sortValue: boolean): void {
        if (sortValue) {
            this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                }
                else if (nameA > nameB) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else {
            this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();

                if (nameA > nameB) {
                    return -1;
                }
                else if (nameA < nameB) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
    }

}