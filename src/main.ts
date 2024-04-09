/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
// Angular
import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

// Routes
import routeConfig from './app/routes';

// Components
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)],
}).catch((err) => console.error(err));
