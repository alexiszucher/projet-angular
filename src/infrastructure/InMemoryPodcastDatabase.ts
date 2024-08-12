import Podcast from "../domain/podcast/Podcast";
import Database from "./Database";

export default class InMemoryPodcastDatabase implements Database {
  static instance: InMemoryPodcastDatabase;
  podcasts: Podcast[] = [];

  getPodcasts(): Podcast[] {
    return this.podcasts;
  }

  private constructor() {
  }


  static getInstance() {
    if (InMemoryPodcastDatabase.instance) {
      return InMemoryPodcastDatabase.instance;
    }
    InMemoryPodcastDatabase.instance = new InMemoryPodcastDatabase();
    return InMemoryPodcastDatabase.instance;
  }
}
