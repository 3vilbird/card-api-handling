import { Component, OnInit, Input } from "@angular/core";
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faDatabase,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() user;

  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;

  constructor() {}
  refresh(): void {
    window.location.reload();
}

  ngOnInit(): void {}
}
