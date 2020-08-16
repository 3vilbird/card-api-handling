import { Component, OnInit } from "@angular/core";
import { UserService } from "./services/user.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "simple-card-apihandle";
  user: any;

  constructor(private userService: UserService, private toastr: ToastrService) {
    //
  }

  ngOnInit() {
    this.userService.getUser().subscribe(
      (user: any) => {
        console.log("====================================");
        console.log(user);
        console.log("====================================");
        this.user = user.results[0];
      },
      (err) => {
        this.toastr.error(err.status, "Ooops!");
      }
    );
  }
}
