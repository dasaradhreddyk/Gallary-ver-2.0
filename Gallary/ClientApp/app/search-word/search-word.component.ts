import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-events',
  templateUrl: './search-word.component.html',
  styleUrls: ['./search-word.component.css']
})
export class SearchWordComponent implements OnInit {

  constructor() { }

    
    public Events1: Array<string> = ["live", "fastsearch", "fastsearch"];
    @Output() searchword = new EventEmitter < { searchword: string, type: string }>();
    typeId: string;
    //More app code
    //onSearch  
    sendNotification(placeId,type) {
        console.log("IN sendNotification ");
        this.searchword.emit({ searchword: placeId, type: this.typeId });
    }
    onClick(event: Event): void {
        this.searchword.emit({ searchword: 'rise', type: 'image' });
       
    }
    ngOnInit() {

        this.searchword.emit({ searchword: 'rise', type: 'image' });
        console.log(this.Events1);
  }

}
