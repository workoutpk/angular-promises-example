import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'promises';

    constructor(private http: HttpClient) {

    }
    ngOnInit() {
        const promise  = new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve("NOw resolved promise");
            }, 1000);
        })

        promise.then((success) => { 
            console.log(success); 
        })
        .catch((error) => { 
            console.log(error); 
        }); 
        // Output: Promise Resolved
        console.log(promise);
     
        this.getData();
        // this.ObeservableExample()
    }
    getData(): Promise<any> {
        // Create and return a new promise
        return new Promise((resolve, reject) => {
            // Use HttpClient to make a GET request to an API endpoint
            const promise = this.http.get('https://jsonplaceholder.typicode.com/posts')            
            .subscribe({
                next: (v) => {
                    console.log(v)
                    resolve(promise);
                },
                error: (e) => {
                    console.error(e)
                    reject(e);  
                },
                complete: () => console.info('complete')
            })
           
      
            
        });        
    }

    ObeservableExample(){
        const observable = this.http.get('https://jsonplaceholder.typicode.com/posts');

        // Subscribe to the observable and log the response data to the console
        observable.subscribe(
            {
                next: (v) => console.log(v),
                error: (e) => console.error(e),
                complete: () => console.info('complete') 
            }
        );
    }
}
