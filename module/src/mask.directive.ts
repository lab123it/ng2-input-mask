import { Directive, Input, Output, EventEmitter, ElementRef, NgZone } from '@angular/core';
import { NgControl } from "@angular/forms";

import { MaskService } from "./mask.service";

declare let $: any;

@Directive({
  selector: '[mask]'
})
export class MaskDirective {

  @Input() options: Object = {};
  @Input('mask') pattern: string;
  @Input('ngModel') ngModel: string;
  @Input('keepMask') keepMask:boolean;
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

  $el:any;

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

    this.$el = $(this.el.nativeElement);
    this.$el.on('change', this.onValueViewChange.bind(this));
  }


  ngOnChanges(changes) {
    const modelHasChanged = changes.ngModel !== undefined &&
      changes.ngModel.currentValue !== undefined &&
      changes.ngModel.currentValue !== changes.ngModel.previousValue
    ;

    if (modelHasChanged) {
      setTimeout(() => {
        this.$el.mask(this.getPattern(this.pattern), this.options);
        this.$el.val(this.$el.masked(changes.ngModel.currentValue));
      });
    }
  }

  ngOnInit() {
    this.$el.mask(this.getPattern(this.pattern));
  }

  ngOnDestroy() {
    $(this.el.nativeElement).unmask();
  }

  private onValueViewChange(ev) {
    this.ngModelChange.emit(this.keepMask ? this.$el.val() : this.$el.cleanVal());
  }


  private getPattern(pattern) :string {
    let rule = this.toCamelCase('get ' + this.pattern);
    if (rule in this.maskService) {
      pattern = this.maskService[rule]();
    }

    return pattern;
  }

  private toCamelCase(text): string {
    return text.replace(/^([A-Z])|\s(\w)/g, function (match, p1, p2, offset) {
      if (p2) return p2.toUpperCase();
      return p1.toLowerCase();
    });
  }

}