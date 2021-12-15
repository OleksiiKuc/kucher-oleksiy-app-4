import { BucketItem } from 'src/shared/buscketItem';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bucket-dialog',
  templateUrl: './bucket-dialog.component.html',
  styleUrls: ['./bucket-dialog.component.scss'],
})
export class BucketDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BucketDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BucketItem[],
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  removeFromBusket(index: number) {
    this.data[index].count--;
    this.data = this.data.filter((e) => e.count > 0);
    this._snackBar.open('The number of dishes is reduced by 1!', 'It`s sad');
  }
}
