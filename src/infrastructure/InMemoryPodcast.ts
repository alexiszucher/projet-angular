import Podcast from "../domain/podcast/Podcast";
import Database from "./Database";

export default class InMemoryPodcast implements Database {
  static PODCASTS: Podcast[] = [];

  podcasts(): Podcast[] {
    return InMemoryPodcast.PODCASTS;
  }
}
