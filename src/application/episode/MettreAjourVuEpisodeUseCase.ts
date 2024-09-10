import PodcastRepository from "../../domain/podcast/PodcastRepository";
import Podcast from "../../domain/podcast/Podcast";
import Episode from "../../domain/podcast/episode/Episode";

export default class MettreAjourVuEpisodeUseCase {
  private repository: PodcastRepository;

  constructor(repository: PodcastRepository) {
    this.repository = repository;
  }

  mettreAJourVu(titrePodcast: string, titreEpisode: string): void {
    let podcast: Podcast | undefined = this.repository.trouver(titrePodcast);
    if (podcast) {
      let episode: Episode | undefined = podcast.episodes.find((ep: Episode) => ep.titre === titreEpisode);
      if (episode) {
        episode.estVu = true;
        podcast.mettreAJourEpisode(episode);
        this.repository.mettreAJour(podcast);
      }
    }
  }
}
