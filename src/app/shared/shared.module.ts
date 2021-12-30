import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [MenuComponent, FooterComponent],
  exports: [MenuComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
