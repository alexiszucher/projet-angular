import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import AjouterPodcastListener from "../../../listeners/AjouterPodcastListener";
import ListerPodcastUseCase from "../../../../application/podcast/ListerPodcastUseCase";
import ServiceRegistry from "../../../../ServiceRegistry";
import Podcast from "../../../../domain/podcast/Podcast";
import {Router} from "@angular/router";

@Component({
  selector: "lister-podcast",
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: "listerPodcast.html"
})
export default class ListerPodcastComponent {
  private listerPodcastUseCase: ListerPodcastUseCase;
  podcasts: Podcast[];

  constructor(private router: Router) {
    this.listerPodcastUseCase = ServiceRegistry.listerPodcastUseCase();
    this.podcasts = this.listerPodcastUseCase.lister();
  }

  allerSurLePodcast(titrePodcast: string) {
    this.router.navigate(["/detail-podcast", titrePodcast]);
  }
}
