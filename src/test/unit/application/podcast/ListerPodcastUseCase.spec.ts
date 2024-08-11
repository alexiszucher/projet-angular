import {it, describe, expect} from "vitest";
import PodcastRepositoryFake from "./PodcastRepositoryFake";
import Podcast from "../../../../domain/podcast/Podcast";
import ListerPodcastUseCase from "../../../../application/podcast/ListerPodcastUseCase";

describe("Test sur le cas d'utilisation de liste de podcasts", () => {
  const repository: PodcastRepositoryFake = new PodcastRepositoryFake();
  const useCase: ListerPodcastUseCase = new ListerPodcastUseCase(repository);
  const PODCAST_ROUTINE_MATINALE: Podcast = new Podcast("Routine matinale");
  it('Ajouter un podcast', () => {
    repository.podcasts.push(PODCAST_ROUTINE_MATINALE);
    let podcasts: Podcast[] =  useCase.lister();
    expect(useCase.lister().length).toBe(1);
    let podcast: Podcast = podcasts[0];
    expect(podcast.titre).toBe(PODCAST_ROUTINE_MATINALE.titre);
  });
});
