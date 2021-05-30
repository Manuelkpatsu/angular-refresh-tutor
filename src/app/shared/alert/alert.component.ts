import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  // It will be listened from outside
  @Input() message: string;

  // make event listenable from outside
  @Output() close = new EventEmitter<void>();

  // close alert modal
  onClose() {
    this.close.emit();
  }
}
