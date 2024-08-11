import { Routes } from '@angular/router';
import DetailPodcastComponent from "./component/detail-podcast/DetailPodcast.component";
import MenuPodcastComponent from "./component/menu-podcast/MenuPodcast.component";

export const routes: Routes = [
  {path: "detail-podcast/:titre", component: DetailPodcastComponent},
  {path: "", component: MenuPodcastComponent},
];
