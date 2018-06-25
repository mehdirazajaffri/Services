import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ApiManager {
  // private baseUrl: String ='http://localhost:3001/api/';
  // private baseUrl: String = 'http://ec2-52-14-250-16.us-east-2.compute.amazonaws.com:3000/';
  private baseUrl: String = 'http://e25ea084.ngrok.io/api/';
  constructor(
    private http: Http,
  ) {
  }

  postReq(url, data) {
    console.log('err api', url);
    return this.http.post(this.baseUrl + url, data, {})
      .map((res) => {
        return res.json();
      })
      .catch((error: any) => {
        console.log('err json', JSON.stringify(error));
        return Observable.throw(error || 'Server error');
      });
  }

  putReq(url, data) {
    return this.http.put(this.baseUrl + url, data, {})
      .map((res) => {
        return res.json();
      })
      .catch((error: any) => {
        if (error.status === 401) {
          localStorage.clear();
        }
        return Observable.throw(error || 'Server error');
      });
  }

  getReq(url) {
    return this.http.get(this.baseUrl + url)
      .map((res) => {
        return res.json();
      })
      .catch((error: any) => {
        if (error.status === 401) {
          localStorage.clear();
        }
        return Observable.throw(error || 'Server error');
      });
  }

  deleteReq(url) {
    return this.http.delete(this.baseUrl + url)
      .map((res) => {
        return res.json();
      })
      .catch((error: any) => {
        if (error.status === 401) {
          localStorage.clear();
        }
        return Observable.throw(error || 'Server error');
      });
  }

}