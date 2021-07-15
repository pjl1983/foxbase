import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecisionTreeComponent } from './decision-tree/decision-tree.component';
import { DecisionTreeGuardService } from './guards/decision-tree-guard.service';

const routes: Routes = [
  {
    path: 'decision-tree',
    component: DecisionTreeComponent,
    children: [
      {
        path: ':id',
        canActivate: [DecisionTreeGuardService],
        component: DecisionTreeComponent
      },
    ]
  },
  {path: '', redirectTo: '/decision-tree/1', pathMatch: 'full'},
  {path: '**', redirectTo: '', component: DecisionTreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
