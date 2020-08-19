import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor() { }
  handleError(error: any): void {
     window.alert("Handling error globally and rethroughing")
   // throw new Error("CUSTOM ERrror thrown");
  }
}
