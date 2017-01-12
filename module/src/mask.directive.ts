import { Directive, Input, ElementRef, NgZone } from '@angular/core';
import { NgControl } from "@angular/forms";

import { MaskService } from "./mask.service";

declare let $: any;

@Directive({
  selector: '[mask]',
  host: {
    "(blur)": "onBlur()"
  }
})
export class MaskDirective {

  @Input() options: Object = {};
  @Input('mask') pattern: string;

  constructor(private el: ElementRef, private zone: NgZone, private control: NgControl,
    private maskService: MaskService) {

    $.jMaskGlobals = {
      translation: {
        '0': { pattern: /\d/ },
        '9': { pattern: /\d/, optional: true },
        '#': { pattern: /\d/, recursive: true },
        'A': { pattern: /[a-zA-Z0-9]/ },
        'S': { pattern: /[a-zA-Z]/ },
        'Y': { pattern: /[0-9]/ }
      }
    };
  }

  ngOnInit() {}

  private getPattern(pattern) :string {
    let rule = this.toCamelCase('get ' + this.pattern);
    if (rule in this.maskService) {
      pattern = this.maskService[rule]();
    }
    return pattern;
  }

  ngAfterContentInit() {

    this.zone.run(() => {

      $(this.el.nativeElement).mask(this.getPattern(this.pattern), this.options);

      if (this.control.control) {
        this.control.control.setValue(this.el.nativeElement.value);
      }

    });
  }

  ngOnDestroy() {
    $(this.el.nativeElement).unmask();
  }

  ngOnChanges(changes) {
    if (typeof (changes.pattern.previousValue) === 'string') {
      $(this.el.nativeElement).mask(this.getPattern(changes.pattern.currentValue), this.options);
    }
  }

  onBlur() {
    this.zone.run(() => {

      if (this.control.control) {
        this.control.control.setValue(this.el.nativeElement.value);
      }

    });
  }

  private toCamelCase(text): string {
    return text.replace(/^([A-Z])|\s(\w)/g, function (match, p1, p2, offset) {
      if (p2) return p2.toUpperCase();
      return p1.toLowerCase();
    });
  }

}