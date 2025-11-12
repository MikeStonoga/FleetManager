import { Injectable } from '@angular/core';
import { AppTranslation } from '../app.translation';
import { ITranslationStrategy } from '../translation.strategy';

export const frenchTranslation: AppTranslation = {
  login: {
    enter: 'Se connecter',
    user: 'Utilisateur',
    password: 'Mot de passe',
    logoutLabel: 'Se déconnecter',
  },
  commons: {
    filter: 'Filtrer',
    yes: 'Oui',
    no: 'Non',
    selectLanguage: 'Choisir la langue',
    areYouSure: 'Êtes-vous sûr ?',
    removed: 'Supprimé avec succès',
    remove: 'Supprimer',
    registered: 'Enregistré avec succès',
    register: 'Enregistrer',
    refresh: 'Actualiser',
    save: 'Sauvegarder',
    properties: { name: 'Nom' },
    vehiclesCount: 'Nombre de véhicules',
    goToDetails: 'Voir les détails',
    edit: 'Modifier',
    edited: 'Modifié avec succès',
    goBackToList: 'Retour à la liste',
  },
  fleets: {
    title: 'Flottes',
    fleet: 'Flotte',
  },
  vehicles: {
    title: 'Véhicules',
    vehicle: 'Véhicule',
    chassisSeries: 'Série du châssis',
    chassisNumber: 'Numéro de châssis',
    fleet: 'Flotte',
    type: 'Type',
    numberOfPassengers: 'Nombre de passagers',
    color: 'Couleur',
  },
  vehicleTypes: {
    title: 'Types de véhicules',
    vehicleType: 'Type de véhicule',
  },
  mainToolbar: {
    menus: {
      goTo: 'Aller à',
      home: 'Accueil',
    },
    buttons: {
      goHome: { label: 'Page d’accueil' },
    },
  },
};

@Injectable()
export class FrenchStrategy implements ITranslationStrategy {
  readonly languageCode = 'fr-FR';
  readonly languageName = 'Français';

  getTranslation(): AppTranslation {
    return frenchTranslation;
  }
}
