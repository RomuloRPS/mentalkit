import {
    ElementRef,
    EventEmitter,
    Input,
    NgZone,
    OnDestroy,
    OnInit,
    Output,
    Component,
} from "@angular/core";

@Component({
    selector: "ev-long-press",
    templateUrl: "ev-long-press.html",
})
export class EvLongPressComponent implements OnInit, OnDestroy {
  @Input() public interval: number;

  @Output() public onPressStart: EventEmitter<any> = new EventEmitter();
  @Output() public onPressing: EventEmitter<any> = new EventEmitter();
  @Output() public onPressEnd: EventEmitter<any> = new EventEmitter();

  public el: HTMLElement;

  public int: number;

  public constructor(public zone: NgZone, el: ElementRef) {
      this.el = el.nativeElement;
  }

  public ngOnInit() {
      if (!this.interval) {
          this.interval = 500;
      }

      if (this.interval < 40) {
          throw new Error(
              "A limit of 40ms is imposed so you don't destroy device performance. If you need less than a 40ms interval, please file an issue explaining your use case."
          );
      }

      this.el.addEventListener("mouseleave", (e: any) => {
          this.pressEnd();
      });

      this.el.addEventListener("mouseup", (e: any) => {
          this.pressEnd();
      });
  }

  public onPress(e) {
      this.onPressStart.emit(e);
      this.clearInt();
      this.int = setInterval(() => {
          this.onPressing.emit();
          this.clearInt();
      }, this.interval) as any;
  }

  public clearInt() {
      if (this.int !== undefined) {
          clearInterval(this.int);
          this.int = undefined;
      }
  }

  public pressEnd() {
      this.clearInt();
      this.onPressEnd.emit();
  }

  public ngOnDestroy() {
      this.pressEnd();
  }
}
