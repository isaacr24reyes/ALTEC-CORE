import {HttpClient} from '@angular/common/http';
import {InjectorInstance} from "../../../shared/shared.module";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

export class ApplicationBaseService {

  private _transferenceObject: any;
  private _route: string;
  private _urlService: string;
  private _service: string;
  private _strategiesUrlService: any;
  private _http: HttpClient;

  constructor() {
    this._http = InjectorInstance.get<HttpClient>(HttpClient);
    this._route = '';
    this._service = '';
    this._urlService = '';
    this.loadInitDataBaseService();
  }

  private loadInitDataBaseService(): void {
    this._strategiesUrlService = {
      'profiles': () => this._urlService = environment.urlProfileMicroService,
      'users': () => this._urlService = environment.urlUsersMicroService,
      'geolocation': () => this._urlService = environment.urlGeolocationService
    };
  }

  protected set route(value: string) {
    this._route = value;
  }

  protected set transferenceObject(value: any) {
    this._transferenceObject = value;
  }

  protected set service(value: string) {
    this._service = value;
    this._strategiesUrlService[this._service]();
  }

  protected genericSend(method: string): Observable<any> {
    return this._http.request(method, `${this._urlService}${this._service}/${this._route}`, this._transferenceObject);
  }
}
