import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConversorComponent } from './component/conversor.component';
import { MoedaService } from './services/moeda.service';
import { ConversorService } from './services/conversor.service';
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './directives/numero.directive';

@NgModule({
  declarations: [ConversorComponent, NumeroDirective],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [ConversorComponent],
  providers: [MoedaService, ConversorService],
})
export class ConversorModule {}
