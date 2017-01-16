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

    brDate: '00/00/0000'
    brTime: '00:00:00'
    brDateTime: '00/00/0000 00:00:00'
    cep: '00000-000'
    brLandlinePhone: '(00) 0000-0000'
    brCellPhone: '(00) 00000-0000'
    phoneUs: '(000) 000-0000'
    mixed: 'AAA 000-S0S'
    cpf: '000.000.000-00'
    cnpj: '00.000.000/0000-00'
    money: '000.000.000.000.000,00'
    money2: "#.##0,00"
    ipAddress: '099.099.099.099'
    percent: '##0,00%'
    
By default, you can define your own rule by following a list below:

	'0': { pattern: /\d/ },
	'9': { pattern: /\d/, optional: true },
	'#': { pattern: /\d/, recursive: true },
	'A': { pattern: /[a-zA-Z0-9]/ },
	'S': { pattern: /[a-zA-Z]/ },
	'Y': { pattern: /[0-9]/ }
	
Example:

	<input [mask]="'(000) 900-0000'" type="text" formControlName="myControl">

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