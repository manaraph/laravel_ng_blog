import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
