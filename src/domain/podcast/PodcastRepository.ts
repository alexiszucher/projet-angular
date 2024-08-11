import Podcast from "./Podcast";

export default interface PodcastRepository {
  ajouter(podcast: Podcast): void;
  lister(): Podcast[];
  trouver(titrePodcast: string): Podcast | undefined;
  mettreAJour(podcast :Podcast): void;
}
