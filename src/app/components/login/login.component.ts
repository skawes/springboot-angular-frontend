import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  private baseUrl = 'http://localhost:8080/auth/login'

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  login(data: NgForm) {
    console.log(data.value);
   
    this.subscription.add(
      this.httpClient.post().subscribe(
       
  }

}
