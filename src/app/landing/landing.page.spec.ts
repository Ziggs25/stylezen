import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPage } from './landing.page';
import { IonicModule } from '@ionic/angular';

describe('LandingPage', () => {
  let component: LandingPage;
  let fixture: ComponentFixture<LandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), LandingPage]
    }).compileComponents();
    
    fixture = TestBed.createComponent(LandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});