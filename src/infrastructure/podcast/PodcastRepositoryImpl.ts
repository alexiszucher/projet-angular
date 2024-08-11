import PodcastRepository from "../../domain/podcast/PodcastRepository";
import Podcast from "../../domain/podcast/Podcast";
import InMemoryPodcast from "../InMemoryPodcast";
import Database from "../Database";

export default class PodcastRepositoryImpl implements PodcastRepository {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  ajouter(podcast: Podcast): void {
    this.database.podcasts().push(podcast);
  }

  lister(): Podcast[] {
    return this.database.podcasts();
  }

  trouver(titrePodcast: string): Podcast | undefined {
    return this.database.podcasts().find((podcast: Podcast) => podcast.titre === titrePodcast);
  }

  mettreAJour(podcast: Podcast): void {
    let index: number = this.database.podcasts().findIndex((p: Podcast) => p.titre === podcast.titre);
    if (index !== -1) {
      this.database.podcasts()[index] = podcast;
    }
  }
}
