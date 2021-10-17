import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  public subscribedUser!: boolean
  constructor(private http: HttpClient) { }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/data.json"); // it should be POST request
  }
  // is objects values is equal
  public isEqual(object1: any, object2: any) {
    const JSONdata = Object.keys(object1);
    const formData = Object.keys(object2);
    if (JSONdata.length !== formData.length) {
      return false;
    }
    for (let key of JSONdata) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true
  }
  // Check data
  public validateSubscripers(JSONdata: any, FormValues: any) {
    return this.isEqual(JSONdata, FormValues)
  }
  public isSubscribed(subscribed:boolean = false){
    this.subscribedUser = subscribed
    return subscribed
  }
}
