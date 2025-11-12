import { Injectable } from '@angular/core';
import { AppTranslation } from '../app.translation';
import { ITranslationStrategy } from '../translation.strategy';

export const spanishTranslation: AppTranslation = {
  login: {
    enter: 'Iniciar sesión',
    user: 'Usuario',
    password: 'Contraseña',
    logoutLabel: 'Cerrar sesión',
  },
  commons: {
    filter: 'Filtrar',
    yes: 'Sí',
    no: 'No',
    selectLanguage: 'Seleccionar idioma',
    areYouSure: '¿Estás seguro?',
    removed: 'Eliminado correctamente',
    remove: 'Eliminar',
    registered: 'Registrado correctamente',
    register: 'Registrar',
    refresh: 'Actualizar',
    save: 'Guardar',
    properties: { name: 'Nombre' },
    vehiclesCount: 'Cantidad de vehículos',
    goToDetails: 'Ver detalles',
    edit: 'Editar',
    edited: 'Editado correctamente',
    goBackToList: 'Volver a la lista',
  },
  fleets: {
    title: 'Flotas',
    fleet: 'Flota',
  },
  vehicles: {
    title: 'Vehículos',
    vehicle: 'Vehículo',
    chassisSeries: 'Serie del chasis',
    chassisNumber: 'Número de chasis',
    fleet: 'Flota',
    type: 'Tipo',
    numberOfPassengers: 'Número de pasajeros',
    color: 'Color',
  },
  vehicleTypes: {
    title: 'Tipos de vehículos',
    vehicleType: 'Tipo de vehículo',
  },
  mainToolbar: {
    menus: {
      goTo: 'Ir a',
      home: 'Inicio',
    },
    buttons: {
      goHome: { label: 'Página principal' },
    },
  },
};

@Injectable()
export class SpanishStrategy implements ITranslationStrategy {
  readonly languageCode = 'es-ES';
  readonly languageName = 'Español';

  getTranslation(): AppTranslation {
    return spanishTranslation;
  }
}
