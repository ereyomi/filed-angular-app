import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DisplaypageComponent } from "./displaypage/displaypage.component";
import { WelcomeComponent } from "./welcome.component";

const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
    },
    {
        path: 'display',
        component: DisplaypageComponent,
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class WelcomeRoutingModule { }