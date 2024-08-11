import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import AjouterPodcastUseCase from "../../../../application/podcast/AjouterPodcastUseCase";
import ServiceRegistry from "../../../../ServiceRegistry";
import Podcast from "../../../../domain/podcast/Podcast";
import AjouterPodcastListener from "../../../listeners/AjouterPodcastListener";
import AddIconComponent from "../../icon/addIcon.component";

@Component({
  selector: "ajouter-podcast",
  standalone: true,
  imports: [
    FormsModule,
    AddIconComponent
  ],
  templateUrl: "ajouterPodcast.html"
})
export default class AjouterPodcastComponent {
  private ajouterPodcastUseCase: AjouterPodcastUseCase;
  titrePodcast: string = "";

  constructor(private ajoutPodcastListener: AjouterPodcastListener) {
    this.ajouterPodcastUseCase = ServiceRegistry.ajouterPodcastUseCase();
  }

  ajouterPodcast(): void {
    if (this.titrePodcast) {
      let podcast: Podcast = new Podcast(this.titrePodcast);
      this.ajouterPodcastUseCase.ajouter(podcast);
      this.ajoutPodcastListener.notifierAjoutPodcast();
      this.titrePodcast = "";
    }
  }
}
