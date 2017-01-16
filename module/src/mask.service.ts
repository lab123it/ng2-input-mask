import { Injectable } from '@angular/core';

@Injectable()
export class MaskService {

  private brDate = '00/00/0000';
  private brTime = '00:00:00';
  private brDateTime = '00/00/0000 00:00:00';
  private cep = '00000-000';
  private brLandlinePhone = '(00) 0000-0000';
  private brCellPhone = '(00) 00000-0000';
  private usPhone = '(000) 000-0000';
  private mixed = 'AAA 000-S0S';
  private cpf = '000.000.000-00';
  private cnpj = '00.000.000/0000-00';
  private money = '000.000.000.000.000,00';
  private money2 = "#.##0,00";
  private ipAddress = '099.099.099.099';
  private percent = '##0,00%';

  constructor() { }

  getBrDate(): string {
    return this.brDate;
  }

  getBrTime(): string {
    return this.brTime;
  }

  getBrDateTime(): string {
    return this.brDateTime;
  }

  getCep(): string {
    return this.cep;
  }

  getBrLandlinePhone(): string {
    return this.brLandlinePhone;
  }

  getBrCellPhone(): string {
    return this.brCellPhone;
  }

  getUsPhone(): string {
    return this.usPhone;
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