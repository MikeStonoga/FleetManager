import { Injectable } from '@angular/core';
import { AppTranslation } from '../app.translation';
import { ITranslationStrategy } from '../translation.strategy';

export const brazilianPortugueseTranslation: AppTranslation = {
  login: {
    enter: 'Entrar',
    user: 'Usuário',
    password: 'Senha',
    logoutLabel: 'Sair',
  },
  commons: {
    filter: 'Filtrar',
    yes: 'Sim',
    no: 'Não',
    selectLanguage: 'Selecionar Idioma',
    areYouSure: 'Tem certeza?',
    removed: 'Removido com sucesso',
    remove: 'Remover',
    registered: 'Cadastrado com sucesso',
    register: 'Cadastrar',
    refresh: 'Atualizar',
    save: 'Salvar',
    properties: { name: 'Nome' },
    vehiclesCount: 'Quantidade de veículos',
    goToDetails: 'Ver detalhes',
    edit: 'Editar',
    edited: 'Editado com sucesso',
    goBackToList: 'Voltar à lista',
  },
  fleets: {
    title: 'Frotas',
    fleet: 'Frota',
  },
  vehicles: {
    title: 'Veículos',
    vehicle: 'Veículo',
    chassisSeries: 'Série do chassi',
    chassisNumber: 'Número do chassi',
    fleet: 'Frota',
    type: 'Tipo',
    numberOfPassengers: 'Passageiros',
    color: 'Cor',
  },
  vehicleTypes: {
    title: 'Tipos de veículos',
    vehicleType: 'Tipo de veículo',
  },
  mainToolbar: {
    menus: {
      goTo: 'Ir para',
      home: 'Início',
    },
    buttons: {
      goHome: { label: 'Página inicial' },
    },
  },
};

@Injectable()
export class BrazilianPortugueseStrategy implements ITranslationStrategy {
  readonly languageCode = 'pt-BR';
  readonly languageName = 'Português (Brasil)';

  getTranslation(): AppTranslation {
    return brazilianPortugueseTranslation;
  }
}
