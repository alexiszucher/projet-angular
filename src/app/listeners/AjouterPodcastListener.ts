import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export default class AjouterPodcastListener {
  private notification = new Subject<void>();
  notifierAjoutPodcast$: Observable<void> = this.notification.asObservable();

  notifierAjoutPodcast(): void {
    this.notification.next();
  }
}
