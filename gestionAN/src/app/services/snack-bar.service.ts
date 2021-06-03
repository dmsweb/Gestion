import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  
  private snackBar: MatSnackBar

  constructor() { }

  openSnackBar(message: string, action: string) {
    return this.snackBar.open(message, action);
   }
   }

