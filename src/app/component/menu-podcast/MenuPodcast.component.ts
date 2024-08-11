import {Component} from "@angular/core";
import AjouterPodcastComponent from "./ajouter-podcast/AjouterPodcast.component";
import ListerPodcastComponent from "./lister-podcast/ListerPodcast.component";

@Component({
  standalone: true,
  selector: "menu-podcast",
  imports: [
    AjouterPodcastComponent,
    ListerPodcastComponent
  ],
  templateUrl: "menu-podcast.html"
})
export default class MenuPodcastComponent {

}
