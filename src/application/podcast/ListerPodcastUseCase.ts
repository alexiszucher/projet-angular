import PodcastRepository from "../../domain/podcast/PodcastRepository";
import Podcast from "../../domain/podcast/Podcast";

export default class ListerPodcastUseCase {
  private repository: PodcastRepository;

  constructor(repository: PodcastRepository) {
    this.repository = repository;
  }

  lister(): Podcast[] {
    return this.repository.lister();
  }
}
