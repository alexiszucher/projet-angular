import {it, describe, expect} from "vitest";
import PodcastRepositoryFake from "./PodcastRepositoryFake";
import AjouterPodcastUseCase from "../../../../application/podcast/AjouterPodcastUseCase";
import Podcast from "../../../../domain/podcast/Podcast";

describe("Test sur le cas d'utilisation d'ajout de podcast", () => {
  const repository: PodcastRepositoryFake = new PodcastRepositoryFake();
  const useCase: AjouterPodcastUseCase = new AjouterPodcastUseCase(repository);
  const PODCAST_ROUTINE_MATINALE: Podcast = new Podcast("Routine matinale");
  it('Ajouter un podcast', () => {
    expect(repository.lister().length).toBe(0);
    useCase.ajouter(PODCAST_ROUTINE_MATINALE);
    expect(repository.lister().length).toBe(1);
  });
});
