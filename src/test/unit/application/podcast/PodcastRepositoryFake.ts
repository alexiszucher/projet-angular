import PodcastRepository from "../../../../domain/podcast/PodcastRepository";
import Podcast from "../../../../domain/podcast/Podcast";

export default class PodcastRepositoryFake implements PodcastRepository {
  podcasts: Podcast[] = [];

  ajouter(podcast: Podcast): void {
    this.podcasts.push(podcast);
  }

  lister(): Podcast[] {
    return this.podcasts;
  }

  trouver(titrePodcast: string): Podcast | undefined {
    return this.podcasts.find((podcast) => podcast.titre === titrePodcast);
  }

  mettreAJour(podcast: Podcast): void {
    let index: number = this.podcasts.findIndex((p: Podcast) => p.titre === podcast.titre);
    if (index !== -1) {
      this.podcasts[index] = podcast;
    }
  }
}
