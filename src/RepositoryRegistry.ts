import PodcastRepository from "./domain/podcast/PodcastRepository";
import PodcastRepositoryImpl from "./infrastructure/podcast/PodcastRepositoryImpl";
import InMemoryPodcast from "./infrastructure/InMemoryPodcast";

export default class RepositoryRegistry {
  static database() {
    return new InMemoryPodcast();
  }

  static podcastRepository(): PodcastRepository {
    return new PodcastRepositoryImpl(this.database());
  }
}
