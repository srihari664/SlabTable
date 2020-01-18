import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlabService {
  private baseURL = "http://localhost:8080/slab";

  constructor(private http: HttpClient) { }

  getAllSlab(): Observable<any>
  {
    
    return this.http.get(`${this.baseURL}/getAll`);
  }

  getAddress(addressId: number) : Observable<any>
  {
    console.log("in getAddress");
    return this.http.get(`${this.baseURL}/${addressId}`);
  }

  updateAddress(addressId: number , value: any) : Observable<any> 
  {
    console.log("in updateAddress");
    console.log("addressId :: " + addressId);
    console.log("value :: ");
    console.log(value);
    return this.http.put(`${this.baseURL}/${addressId}`,value);
  }

  addNewAddress(address: Object) : Observable<any>
  {
    console.log("in addNewAddress")
    console.log(address);
    return this.http.post(`${this.baseURL}/`,address);
  }

  deleteSlab(slabId: number):Observable<any>
  {
    console.log("in deleteSlab");
    console.log("slabId :: " + slabId);
    return this.http.delete(`${this.baseURL}/${slabId}`);
  }
}
