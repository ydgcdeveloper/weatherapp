import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let activatedRouter: ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(),
        HttpClientModule],
      providers: [{
        provide: ActivatedRoute, useValue: {
          snapshot: {
            paramMap: {
              get(): number {
                return 2960;
              },
            },
          },
        },
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    activatedRouter = TestBed.get(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
