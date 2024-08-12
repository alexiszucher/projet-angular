import PodcastRepository from "./domain/podcast/PodcastRepository";
import PodcastRepositoryImpl from "./infrastructure/podcast/PodcastRepositoryImpl";
import InMemoryPodcastDatabase from "./infrastructure/InMemoryPodcastDatabase";
import Database from "./infrastructure/Database";

export default class RepositoryRegistry {
  static database(): Database {
    return InMemoryPodcastDatabase.getInstance();
  }

  static podcastRepository(): PodcastRepository {
    return new PodcastRepositoryImpl(this.database());
  }
}
