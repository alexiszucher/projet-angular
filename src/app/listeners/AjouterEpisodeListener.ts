import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export default class AjouterEpisodeListener {
  private notification = new Subject<void>();
  notifierAjoutEpisode$: Observable<void> = this.notification.asObservable();

  notifierAjoutEpisode(): void {
    this.notification.next();
  }
}
