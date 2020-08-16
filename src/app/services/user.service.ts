import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private url = "https://randomuser.me/api";
  constructor(private http: HttpClient) {}

  getUser = () => {
    // here the http is automatically makes it an observable no need to do manually :)
    return this.http.get(this.url);
  };
}
