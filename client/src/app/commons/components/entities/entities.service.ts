import { HttpClient } from '@angular/common/http';
import { EntityView, IdCodeAndLabelDTO } from '@commons/models/entity.models';
import { environment } from 'app/environment';
import { Observable, Subject } from 'rxjs';

export abstract class EntitiesService<
  TEntityView extends EntityView
> {
  public currentSelected?: TEntityView;
  public readonly listRefreshRequested = new Subject<void>();

  protected get baseAddress() {
    return `${environment.API_URL}/${this.controllerName}`;
  }

  constructor(
    protected readonly controllerName: string,
    protected readonly httpClient: HttpClient
  ) {}

  public getIdsCodesAndLabels(): Observable<IdCodeAndLabelDTO[]> {
    return this.httpClient.get<IdCodeAndLabelDTO[]>(`${this.baseAddress}/GetIdsCodesAndLabels`);
  }

  getAll(): Observable<TEntityView[]> {
    return this.httpClient.get<TEntityView[]>(`${this.baseAddress}/GetAll`);
  }

  register<TRegisterRequirement>(req: TRegisterRequirement) {
    return this.httpClient.post<TEntityView>(`${this.baseAddress}/Register`, req);
  }

  update<TUpdateRequirement>(req: TUpdateRequirement) {
    return this.httpClient.patch<TEntityView>(`${this.baseAddress}/Update`, req);
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.baseAddress}/Remove?id=${id}`);
  }
}
