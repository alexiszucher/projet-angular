import Podcast from "../domain/podcast/Podcast";

export default interface Database {
  getPodcasts(): Podcast[];
}
