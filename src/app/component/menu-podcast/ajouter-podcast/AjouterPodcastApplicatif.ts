import AjouterPodcastUseCase from "../../../../application/podcast/AjouterPodcastUseCase";
import AjouterPodcastListener from "../../../listeners/AjouterPodcastListener";
import Podcast from "../../../../domain/podcast/Podcast";

export default class AjouterPodcastApplicatif {
  titrePodcast: string = "";

  constructor(private ajoutPodcastListener: AjouterPodcastListener,
              private ajouterPodcastUseCase: AjouterPodcastUseCase) {
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
