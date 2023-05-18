import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {UserPageComponent} from "./components/user-page/user-page.component";
import {TransactionListComponent} from "./components/transaction-list/transaction-list.component";
import {BudgetsComponent} from "./components/budgets/budgets.component";
import {AccountListComponent} from "./components/account-list/account-list.component";
import {AuthGuard} from "./auth/auth.guard";
import {AccountDetailComponent} from "./components/account-detail/account-detail.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserPageComponent, canActivate: [ AuthGuard ],
      children: [
        { path: '', redirectTo: 'accounts', pathMatch: 'full' },
        { path: 'budgets', component: BudgetsComponent },
        { path: 'transactions', component: TransactionListComponent },
        { path: 'accounts', component: AccountListComponent },
        { path: 'accounts/:accountId', component: AccountDetailComponent }
      ]},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
