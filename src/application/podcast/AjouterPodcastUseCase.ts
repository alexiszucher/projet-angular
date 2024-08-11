import PodcastRepository from "../../domain/podcast/PodcastRepository";
import Podcast from "../../domain/podcast/Podcast";

export default class AjouterPodcastUseCase {
  private repository: PodcastRepository;

  constructor(repository: PodcastRepository) {
    this.repository = repository;
  }

  ajouter(podcast: Podcast): void {
    this.repository.ajouter(podcast);
  }
}
