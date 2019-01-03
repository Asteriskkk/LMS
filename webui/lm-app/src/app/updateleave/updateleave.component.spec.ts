import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateleaveComponent } from './updateleave.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule} from '@angular/http'; 
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { LeavedetailsService } from 'src/app/leavedetails.service';

describe('UpdateleaveComponent', () => {
  let component: UpdateleaveComponent;
  let fixture: ComponentFixture<UpdateleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [
        RouterTestingModule, FormsModule,HttpModule
      ],
      declarations: [ UpdateleaveComponent ], 
      providers: [LeavedetailsService,
        HttpModule,HttpClient,
        HttpClientTestingModule],
      schemas : [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
