import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { PostListpageComponent } from './post/post-listpage/post-listpage.component';

const routes: Routes = [
  { path: 'login', loadChildren: () =>
    import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', component: PostListpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
