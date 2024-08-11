import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import Podcast from "../../../domain/podcast/Podcast";
import TrouverPodcastUseCase from "../../../application/podcast/TrouverPodcastUseCase";
import ServiceRegistry from "../../../ServiceRegistry";
import ListerEpisodeComponent from "./lister-episode/ListerEpisode.component";
import AjouterPodcastComponent from "../menu-podcast/ajouter-podcast/AjouterPodcast.component";
import ListerPodcastComponent from "../menu-podcast/lister-podcast/ListerPodcast.component";
import AjouterEpisodeComponent from "./ajouter-episode/AjouterEpisode.component";

@Component({
  standalone: true,
  selector: "detail-podcast",
  imports: [
    ListerEpisodeComponent,
    AjouterPodcastComponent,
    ListerPodcastComponent,
    AjouterEpisodeComponent
  ],
  templateUrl: "detail-podcast.html"
})
export default class DetailPodcastComponent {
  titrePodcast: string = "TOTO";

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.titrePodcast = params.get('titre')!;
    });
  }

  allerALaListeDesPodcasts() {
    this.router.navigate(["/"]);
  }
}
