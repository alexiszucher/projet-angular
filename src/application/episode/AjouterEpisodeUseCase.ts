import PodcastRepository from "../../domain/podcast/PodcastRepository";
import Podcast from "../../domain/podcast/Podcast";
import Episode from "../../domain/podcast/episode/Episode";

export default class AjouterEpisodeUseCase {
  private repository: PodcastRepository;

  constructor(repository: PodcastRepository) {
    this.repository = repository;
  }

  ajouter(titrePodcast: string, titreEpisode: string): void {
    let podcast: Podcast | undefined = this.repository.trouver(titrePodcast);
    let episode: Episode = new Episode(titreEpisode);
    if (podcast) {
      podcast.ajouterEpisode(episode);
      this.repository.mettreAJour(podcast);
    }
  }
}
