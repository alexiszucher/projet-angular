import PodcastRepository from "../../domain/podcast/PodcastRepository";
import Podcast from "../../domain/podcast/Podcast";

export default class TrouverPodcastUseCase {
  private repository: PodcastRepository;

  constructor(repository: PodcastRepository) {
    this.repository = repository;
  }

  trouver(titrePodcast: string): Podcast | undefined {
    return this.repository.trouver(titrePodcast);
  }
}
