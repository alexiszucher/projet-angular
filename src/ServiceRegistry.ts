import PodcastRepository from "./domain/podcast/PodcastRepository";
import PodcastRepositoryImpl from "./infrastructure/podcast/PodcastRepositoryImpl";
import AjouterPodcastUseCase from "./application/podcast/AjouterPodcastUseCase";
import RepositoryRegistry from "./RepositoryRegistry";
import ListerPodcastUseCase from "./application/podcast/ListerPodcastUseCase";
import TrouverPodcastUseCase from "./application/podcast/TrouverPodcastUseCase";
import AjouterEpisodeUseCase from "./application/episode/AjouterEpisodeUseCase";

export default class ServiceRegistry {
  static ajouterPodcastUseCase(): AjouterPodcastUseCase {
    return new AjouterPodcastUseCase(RepositoryRegistry.podcastRepository());
  }

  static listerPodcastUseCase(): ListerPodcastUseCase {
    return new ListerPodcastUseCase(RepositoryRegistry.podcastRepository());
  }

  static trouverPodcastUseCase(): TrouverPodcastUseCase {
    return new TrouverPodcastUseCase(RepositoryRegistry.podcastRepository());
  }

  static ajouterEpisodeUseCase(): AjouterEpisodeUseCase {
    return new AjouterEpisodeUseCase(RepositoryRegistry.podcastRepository());
  }
}
