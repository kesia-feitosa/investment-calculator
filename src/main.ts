import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// import { AppComponent } from './app/app.component';

//this way start an application standalone
// bootstrapApplication(AppComponent).catch((err) => console.error(err));

//this way start an application with module instead standalone
platformBrowserDynamic().bootstrapModule(AppModule);