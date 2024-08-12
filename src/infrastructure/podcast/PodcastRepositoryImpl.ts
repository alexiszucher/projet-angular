import PodcastRepository from "../../domain/podcast/PodcastRepository";
import Podcast from "../../domain/podcast/Podcast";
import Database from "../Database";

export default class PodcastRepositoryImpl implements PodcastRepository {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  ajouter(podcast: Podcast): void {
    this.database.getPodcasts().push(podcast);
  }

  lister(): Podcast[] {
    return this.database.getPodcasts();
  }

  trouver(titrePodcast: string): Podcast | undefined {
    return this.database.getPodcasts().find((podcast: Podcast) => podcast.titre === titrePodcast);
  }

  mettreAJour(podcast: Podcast): void {
    let index: number = this.database.getPodcasts().findIndex((p: Podcast) => p.titre === podcast.titre);
    if (index !== -1) {
      this.database.getPodcasts()[index] = podcast;
    }
  }
}
