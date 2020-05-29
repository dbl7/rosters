import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() anotherCoreModule: CoreModule) {
    if (anotherCoreModule) {
      throw new Error(`CoreModule has already been loaded.
        You should only import Core modules in the AppModule only.`);
    }
  }
}
