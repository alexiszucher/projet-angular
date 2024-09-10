import {Component, Input} from "@angular/core";
import Podcast from "../../../../domain/podcast/Podcast";
import TrouverPodcastUseCase from "../../../../application/podcast/TrouverPodcastUseCase";
import ServiceRegistry from "../../../../ServiceRegistry";
import EyeIconComponent from "../../icon/eyeIcon.component";
import NoteIconComponent from "../../icon/noteIcon.component";

@Component({
  standalone: true,
  selector: "lister-episode",
  imports: [
    EyeIconComponent,
    NoteIconComponent
  ],
  templateUrl: "lister-episode.html"
})
export default class ListerEpisodeComponent {
  podcast: Podcast | undefined;
  @Input() propTitrePodcast = '';
  private trouverPodcastUseCase: TrouverPodcastUseCase;

  constructor() {
    this.trouverPodcastUseCase = ServiceRegistry.trouverPodcastUseCase();
  }

  ngOnInit() {
    if (this.propTitrePodcast) {
      this.podcast = this.trouverPodcastUseCase.trouver(this.propTitrePodcast);
    }
  }
}
