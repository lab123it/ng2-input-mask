import { Injectable } from '@angular/core';

@Injectable()
export class MaskService {

  private date = '00/00/0000';
  private time = '00:00:00';
  private dateTime = '00/00/0000 00:00:00';
  private cep = '00000-000';
  private landlinePhone = '(00) 0000-0000';
  private cellPhone = '(00) 00000-0000';
  private phoneUs = '(000) 000-0000';
  private mixed = 'AAA 000-S0S';
  private cpf = '000.000.000-00';
  private cnpj = '00.000.000/0000-00';
  private money = '000.000.000.000.000,00';
  private money2 = "#.##0,00";
  private ipAddress = '099.099.099.099';
  private percent = '##0,00%';

  constructor() { }

  getDate(): string {
    return this.date;
  }

  getTime(): string {
    return this.time;
  }

  getDateTime(): string {
    return this.dateTime;
  }

  getCep(): string {
    return this.cep;
  }

  getLandlinePhone(): string {
    return this.landlinePhone;
  }

  getCellPhone(): string {
    return this.cellPhone;
  }

  getPhoneUs(): string {
    return this.phoneUs;
  }

  getMixed(): string {
    return this.mixed;
  }

  getCpf(): string {
    return this.cpf;
  }

  getCnpj(): string {
    return this.cnpj;
  }

  getMoney(): string {
    return this.money;
  }

  getMoney2(): string {
    return this.money2;
  }

  getIpAddress(): string {
    return this.ipAddress;
  }

  getPercent(): string {
    return this.percent;
  }

}