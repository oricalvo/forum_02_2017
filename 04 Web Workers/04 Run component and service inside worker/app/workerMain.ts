import "reflect-metadata";
import "zone.js";
import {platformWorkerAppDynamic} from '@angular/platform-webworker-dynamic';
import { AppModule } from './app.module';

const platform = platformWorkerAppDynamic();
platform.bootstrapModule(AppModule);
