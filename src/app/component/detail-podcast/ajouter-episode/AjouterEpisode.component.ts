import {Component, Input} from "@angular/core";
import {FormsModule} from "@angular/forms";
import ServiceRegistry from "../../../../ServiceRegistry";
import AddIconComponent from "../../icon/addIcon.component";
import AjouterEpisodeListener from "../../../listeners/AjouterEpisodeListener";
import AjouterEpisodeUseCase from "../../../../application/episode/AjouterEpisodeUseCase";

@Component({
  selector: "ajouter-episode",
  standalone: true,
  imports: [
    FormsModule,
    AddIconComponent
  ],
  templateUrl: "ajouterEpisode.html"
})
export default class AjouterEpisodeComponent {
  private ajouterEpisodeUseCase: AjouterEpisodeUseCase;
  @Input() propTitrePodcast = '';
  titreEpisode: string = "";

  constructor(private ajouterEpisodeListener: AjouterEpisodeListener) {
    this.ajouterEpisodeUseCase = ServiceRegistry.ajouterEpisodeUseCase();
  }

  ajouterEpisode(): void {
    if (this.titreEpisode && this.propTitrePodcast) {
      this.ajouterEpisodeUseCase.ajouter(this.propTitrePodcast, this.titreEpisode);
      this.ajouterEpisodeListener.notifierAjoutEpisode();
      this.titreEpisode = "";
    }
  }
}
