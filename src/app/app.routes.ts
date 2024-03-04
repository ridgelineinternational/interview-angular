import { Route } from '@angular/router';
import { SpendingOverviewComponent } from './spending-overview/spending-overview.component';

export const appRoutes: Route[] = [
    {
        path: '', pathMatch: 'full', redirectTo: 'spending-overview'
    },
    {
        path: 'spending-overview',
        component: SpendingOverviewComponent
    }
];
