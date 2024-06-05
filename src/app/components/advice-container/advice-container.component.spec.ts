import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceContainerComponent } from './AdviceContainerComponent';

describe('AdviceContainerComponent', () => {
  let component: AdviceContainerComponent;
  let fixture: ComponentFixture<AdviceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdviceContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
