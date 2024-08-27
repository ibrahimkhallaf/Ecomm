import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: '' , component: AuthLayoutComponent , children:[
        {path:'' , redirectTo:'signin',pathMatch: "full",title:"SignIn Page"},
        {path:'signin' , component:SignInComponent,title:"SignIn Page"},
        {path:'signup' , component:SignUpComponent,title:"SignUp Page"},
    ]},
    {path: '' , component: MainLayoutComponent , children:[
        {path:'home' , component:HomeComponent,title:"Home Page"},
        {path:'categories' , component:CategoriesComponent,title:"Categories Page"},
        {path:'brands' , component:BrandsComponent,title:"Brands Page"},
        {path:'cart' , component:CartComponent,title:"Cart Page"},
        {path:'orders' , component:OrdersComponent,title:"Orders Page"},
        {path:'product' , component:ProductComponent,title:"Product Page"},
        {path:'product-details' , component:ProductDetailsComponent,title:"Product-Details Page"},
    ]},
    {path:'**',component:NotFoundComponent,title:"Not-Found"}
];
