import {
  Component,
  OnInit,
  Input,
  DoCheck,
  KeyValueDiffer,
  KeyValueDiffers,
  IterableDiffer,
  IterableDiffers,
  IterableChanges
} from '@angular/core';
import { DifferTest } from '../differ-test.model';
import { JsonPipe } from '@angular/common';
const seedLimit = 100;

@Component({
  selector: 'app-differ-list',
  templateUrl: './differ-list.component.html'
})
export class DifferListComponent implements OnInit, DoCheck {
  @Input() list: any[];
  private _iterableDiffer: IterableDiffer<any>;
  private _keyValueDifferObj: any;

  constructor(
    private _iterableDiffers: IterableDiffers,
    private _keyValueDiffers: KeyValueDiffers
  ) {
    this._iterableDiffer = this._iterableDiffers.find([]).create();
    this._keyValueDifferObj = {};
  }

  ngOnInit() {
    this.list.forEach(elt => {
      this._keyValueDifferObj[elt] = this._keyValueDiffers
        .find(elt)
        .create();
    });
  }

  ngDoCheck() {
    var changes: IterableChanges<any> = this._iterableDiffer.diff(this.list);
    if (changes) {
      changes.forEachAddedItem(record => {
        console.log('added ', record.item);
      });
      changes.forEachRemovedItem(record => {
        console.log('removed ', record.item);
      });
    }

    this.list.forEach(elt => {
      var objDiffer = this._keyValueDifferObj[elt];
      if (objDiffer) {
        var objChanges = objDiffer.diff(elt);
        if (objChanges) {
          objChanges.forEachChangedItem(elt => {
            console.log('changed ', elt);
            if (elt.key === 'value') {
              this.doSomethingIfProp1Change();
            }
          });
        }
      }
    });
  }

  addList() {
    this.list.push(
      new DifferTest('label', Math.round(Math.random() * seedLimit))
    );
  }

  removeList() {
    const size = this.list.length - 1;
    const removeIndex = Math.round(Math.random() * size);
    this.list.splice(removeIndex, 1);
  }

  updateList() {
    const firstCopy = this.list[0];
    this.list = [
      firstCopy,
      new DifferTest('label', Math.round(Math.random() * seedLimit)),
      new DifferTest('label', Math.round(Math.random() * seedLimit))
    ];
  }

  cloneList() {
    this.list = JSON.parse(JSON.stringify(this.list));
  }

  doSomethingIfProp1Change() {
    console.log('DifferList - doSomethingIfProp1Change');
    //console.log(this.myObject.prop1);
  }
}
