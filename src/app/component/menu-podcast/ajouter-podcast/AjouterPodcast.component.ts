import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import ServiceRegistry from "../../../../ServiceRegistry";
import AjouterPodcastListener from "../../../listeners/AjouterPodcastListener";
import AddIconComponent from "../../icon/addIcon.component";
import AjouterPodcastApplicatif from "./AjouterPodcastApplicatif";

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
  applicatif: AjouterPodcastApplicatif = new AjouterPodcastApplicatif(new AjouterPodcastListener(), ServiceRegistry.ajouterPodcastUseCase());
}
