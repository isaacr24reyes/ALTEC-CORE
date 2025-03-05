import {Injectable} from '@angular/core';
import {ApplicationBaseService} from "../../utils/base/application-base-service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService extends ApplicationBaseService {

  constructor() {
    super();
    this.loadInitData();
  }

  private loadInitData(): void {
    this.service = 'profiles';
  }

  public getProfileById(id: number): Observable<any> {
    this.route = `profiles/card?subscriptionId=${id}`;
    return this.genericSend('get');
  }

  public createSubscription(createSubscriptionObject: any): Observable<any> {
    this.route = 'subscription';
    this.transferenceObject = createSubscriptionObject;
    return this.genericSend('post');
  }

  public updateSubscription(subscriptionId: string): Observable<any> {
    this.route = `subscription/card?subscriptionId=${subscriptionId}`;
    return this.genericSend('patch');
  }

  public updateSubscriptionByPlan(updateSubscriptionDto: object, subscriptionId: string, planId: number): Observable<any> {
    this.route = `subscription?/card?subscriptionId=${subscriptionId}&planId=${planId}`;
    this.transferenceObject = updateSubscriptionDto;
    return this.genericSend('put');
  }

  public cancelSubscriptions(profileGuid: string, subscriptionId: string): Observable<any> {
    this.route = `subscription/cancel?profileGuid=${profileGuid}&subscriptionId=${subscriptionId}`;
    return this.genericSend('delete');
  }
}
