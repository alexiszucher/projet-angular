import Database from "../../../../infrastructure/Database";
import Podcast from "../../../../domain/podcast/Podcast";

export default class DatabaseFake implements Database {
  podcastList: Podcast[] = [];

  getPodcasts(): Podcast[] {
    return this.podcastList;
  }
}
