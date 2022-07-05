import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class FactService {
    monitorClimate = new Subject<boolean>();
}