import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { StaticDataSource } from './model/static.datasource';
import { Model } from './model/repository.model';
import { REST_URL, RestDataSource } from './model/rest.datasource';
import { provideHttpClient } from '@angular/common/http';
import { MessageService } from './messages/message.service';
import { MessageErrorHandler } from './messages/errorHandler';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(), // Esto asegura que HttpClient esté disponible

    Model,
    StaticDataSource,
    RestDataSource,
    { provide: REST_URL, useValue: `http://localhost:3500/products` },
    MessageService, // Proveer MessageService si no lo está

    { provide: ErrorHandler, useClass: MessageErrorHandler }, // Configuración del manejador de errores
  ],
};
