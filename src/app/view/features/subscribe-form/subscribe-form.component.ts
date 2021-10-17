import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubscribeService } from 'src/app/core/services/subscribe/subscribe.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent implements OnInit {
  errorMessages = {
    firstName : 'First Name Is Required ',
    last_name : 'Last Name Is Required ',
    emailAddress: 'email Is Required ',
    dob: 'Day Of Birth Is Required ',
    subscribed: 'Something Wrong, Account is not valid! ',
  }
  subscribeForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    emailAddress: new FormControl(null, [Validators.required, Validators.email]),
    subscribed: new FormControl(null, [Validators.required]),
    dob: new FormControl(null, [Validators.required]),
  })
  constructor(public __subscribeService: SubscribeService, private datePipe: DatePipe, private router: Router) {

  }
  ngOnInit(){
  }
  get firstName(): FormControl {
    return this.subscribeForm.get('firstName') as FormControl
  }
  get lastName(): FormControl {
    return this.subscribeForm.get('last_name') as FormControl
  }
  get emailAddress(): FormControl {
    return this.subscribeForm.get('emailAddress') as FormControl
  }
  get dob(): FormControl {
    return this.subscribeForm.get('dob') as FormControl
  }
  get subscribed(): FormControl {
    return this.subscribeForm.get('subscribed') as FormControl
  }
  // On Subscribe
  subscribeNow(){
    if (this.subscribeForm.valid){
      this.dayOfBirth(this.subscribeForm.value.dob)
      this.confirmation(this.subscribeForm.value)
      return true
    }
    this.__subscribeService.isSubscribed(false)
    return false
  }
  // re format dob
  dayOfBirth(dob:Date) {
    return this.subscribeForm.value.dob = this.datePipe.transform(dob, 'yyyy-MM-dd');
  }
  // call json File
  confirmation(FormValues:any){
    this.__subscribeService.getJSON().subscribe(res => {
      this.confirmed(this.__subscribeService.validateSubscripers(res, FormValues))
    })
  }
  // navigate if user is valid
  confirmed(confirmed:boolean){
    this.__subscribeService.isSubscribed(confirmed)
    confirmed && this.router.navigateByUrl('confirmation')
  }
}
