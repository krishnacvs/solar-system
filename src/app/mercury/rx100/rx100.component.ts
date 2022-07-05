import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, interval, map, Subscription } from 'rxjs'; // Subscription and Observables methods are provided by RXJS module 
import { Hundred } from './hundred.service';
import { DynaAlertComponent } from 'src/app/shared/dyna-alert/dyna-alert.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder/placeholder.directive';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rx100',
  templateUrl: './rx100.component.html',
  styleUrls: ['./rx100.component.scss']
})


export class Rx100Component implements OnInit, OnDestroy {
  subscription1$: Subscription | undefined;
  subscription2$: Subscription | undefined;
  subscription3$: Subscription | undefined;
  activated: boolean = false;
  activationForm:FormGroup;
  @ViewChild(PlaceholderDirective) dynaAlertHost: PlaceholderDirective;

  constructor(private route: ActivatedRoute, 
    private hundred: Hundred,
    private viewContainerRef: ViewContainerRef) { }
 

  ngOnInit(): void {
    this.createSubscription();
    this.activationForm = new FormGroup({
      activationCode: new FormControl(''),
    });
  }

  onActivate() {
    this.hundred.activatedEmitter.emit(true);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy unsubsribe");
    this.subscription1$?.unsubscribe();
    this.subscription2$?.unsubscribe();
    this.subscription3$?.unsubscribe();
  }

  createSubscription() {
    this.subscription1$ = this.route.params.subscribe((params:Params) => {
      console.log(params);
    })
    this.subscription2$ = interval(1000)
                          .pipe(map((data:number) => { return data%3;}))
                          .pipe(filter((data:number) => { return data < 5; }))
                          .subscribe((data) => {
                            console.log(data);
                          });
    this.subscription3$ = this.hundred.activatedEmitter.subscribe((data:boolean) => {
      this.activated = data;
    });

  }
   
  onSubmit(formData:any){
    console.log("onSubmit",formData);
    this.showErrorAlert("Enter mandatory fields");
  }

  showErrorAlert(message: string){   
    this.viewContainerRef.clear();
    const dynaCmpRef = this.viewContainerRef
    .createComponent(DynaAlertComponent);
    dynaCmpRef.instance.message = message;
  }
}
