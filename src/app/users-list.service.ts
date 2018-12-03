import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {
public usersList:any = [
  {"id" : 1,"name":"Adam","number":4548843223,
   "address":"1941 Springs st, Santa Barbara"
  },
  {"id" : 2,"name":"Scott","number":12121212,
   "address":"123 Simmons Blvd, Fremont"
  },
  {"id" : 3,"name":"Moury Meed","number":234354545,
    "address":"890 Pamert Ave, Oakland"
  },
  {"id" : 4,"name":"Ben Thomson","number":6776767676,
    "address":"123 Binnerte, San Jose"
  },
  {"id" : 5,"name":"Emy Morries","number":4548843223,
   "address":"6909 WBeach St, Sunnyvale"
  },
  {"id" : 6,"name":"Scott","number":1212121200,
    "address":"190 Cristy St, Dublin"
  },
  {"id" : 7,"name":"Tim","number":234352245,
    "address":"083 Wells Beach St, Pleasanton"
  },
  {"id" : 8,"name":"Brigette","number":6776767676,
    "address":"123 WBeach St, Santa Barbara"
  },
  {
    "id": 9,"name":"Cristen","number":898989321,
    "address":"2 Domain st LA"
  },
  {
    "id": 10,"name":"Coby","number":3212989321,
    "address":"2 Deaer st LV "
  }

]
  constructor() { }
}
