import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";
@Injectable()
export class FindService {
  constructor(private http: HttpClient) {}

  public get_user_stats(username) {
    return this.http.get(
      `http://192.168.43.183:5000/api/get_follower_stats/${username}`
    );
  }
}
