import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitadoTriviaComponent } from './invitado-trivia.component';

describe('InvitadoTriviaComponent', () => {
  let component: InvitadoTriviaComponent;
  let fixture: ComponentFixture<InvitadoTriviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvitadoTriviaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvitadoTriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
