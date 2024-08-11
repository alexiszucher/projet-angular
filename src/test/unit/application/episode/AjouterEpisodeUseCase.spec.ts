import PodcastRepositoryFake from "../podcast/PodcastRepositoryFake";
import Podcast from "../../../../domain/podcast/Podcast";
import {describe, expect, it} from "vitest";
import AjouterEpisodeUseCase from "../../../../application/episode/AjouterEpisodeUseCase";

describe("Test sur le cas d'utilisation d'ajout d'épisode", () => {
  const repository: PodcastRepositoryFake = new PodcastRepositoryFake();
  const useCase: AjouterEpisodeUseCase = new AjouterEpisodeUseCase(repository);
  const TITRE_PODCAST: string = "Routine matinale";
  const TITRE_EPISODE: string = "Episode 1";
  let PODCAST_ROUTINE_MATINALE: Podcast = new Podcast(TITRE_PODCAST);
  it('Ajouter un épisode', () => {
    repository.ajouter(PODCAST_ROUTINE_MATINALE);
    useCase.ajouter(TITRE_PODCAST, TITRE_EPISODE);
    let podcast: Podcast | undefined = repository.lister().find((p: Podcast) => p.titre === TITRE_PODCAST);
    expect(podcast).toBeDefined();
    expect(podcast!.episodes.length).toBe(1);
  });
});
