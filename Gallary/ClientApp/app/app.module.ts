import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AdventureTimeService } from './services/adventure-time.service';
import { TableRowIncorrectComponent } from './table-row-incorrect/table-row-incorrect.component';
import { FileuploadComponent } from './file-upload/file-upload.component';
import { SearchWordComponent } from './search-word/search-word.component';
import { HomeComponent } from './home/home.component';
import { AuthoriseComponent } from './authorise/authorise.component';
import { NguiInViewComponent } from './ngui-in-view/ngui-in-view.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';

@NgModule({
    declarations: [
        AppComponent,        
        TableComponent,
        TableRowComponent,
        TableRowIncorrectComponent,
        FileuploadComponent,
        SearchWordComponent,
        HomeComponent,
        AuthoriseComponent,
        NguiInViewComponent,
        VideoplayerComponent,
        

    ],
    imports: [
        BrowserModule,
      
        HttpClientModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forRoot([{
            path: 'mysite/:id',component: AppComponent
        },
            
        ]),    
    ],
	providers: [AdventureTimeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
