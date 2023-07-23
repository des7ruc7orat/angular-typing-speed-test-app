import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendererComponent } from 'src/components/renderer/renderer.component';

const routes: Routes = [
  {
    path: '',
    component: RendererComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
