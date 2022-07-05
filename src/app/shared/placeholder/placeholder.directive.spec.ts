import { ViewContainerRef } from "@angular/core";
import { PlaceholderDirective } from "./placeholder.directive";


describe('PlaceholderDirective', () => {
  let viewContainerRef: ViewContainerRef;
  it('should create an instance', () => {
    const directive = new PlaceholderDirective(viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
