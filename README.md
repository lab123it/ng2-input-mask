Mask to Angular 2 Application using jquery-mask-plugin

# Installation

Clone the repository and do:

    npm install ng2-input-mask

Import jquery

    node_modules/jquery/dist/jquery.min.js

Import jquery.mask

    node_modules/jquery-mask-plugin/dist/jquery.mask.min.js

# Configuration

    //app.module.ts
    import { Ng2InputMaskModule } from 'ng2-input-mask';

    @NgModule({
        imports: [
            ...
            Ng2InputMaskModule,
            ...
        ],
    });

# Usage

    <input [mask]="'cep'" type="text" formControlName="zipCode">

# Mask Types

    date: '00/00/0000'
    time: '00:00:00'
    dateTime: '00/00/0000 00:00:00'
    cep: '00000-000'
    landlinePhone: '(00) 0000-0000'
    cellPhone: '(00) 00000-0000'
    phoneUs: '(000) 000-0000'
    mixed: 'AAA 000-S0S'
    cpf: '000.000.000-00'
    cnpj: '00.000.000/0000-00'
    money: '000.000.000.000.000,00'
    money2: "#.##0,00"
    ipAddress: '099.099.099.099'
    percent: '##0,00%'

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Security

If you discover any security related issues, please email jean.pierre@lab123.com.br instead of using the issue tracker.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

- [Jean Pierre](https://github.com/jeanpfs)
- [Felipe Santos](https://github.com/felipeds2)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.