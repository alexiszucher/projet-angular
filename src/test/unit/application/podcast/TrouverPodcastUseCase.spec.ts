import {it, describe, expect} from "vitest";
import PodcastRepository from "../../../../domain/podcast/PodcastRepository";
import PodcastRepositoryFake from "./PodcastRepositoryFake";
import TrouverPodcastUseCase from "../../../../application/podcast/TrouverPodcastUseCase";
import Podcast from "../../../../domain/podcast/Podcast";
describe("Test sur le use case trouver podcast", () => {
  const repository: PodcastRepository = new PodcastRepositoryFake();
  const useCase: TrouverPodcastUseCase = new TrouverPodcastUseCase(repository);

  const PODCAST_MORNING_ROUTINE: Podcast = new Podcast("Morning Routine");
  const PODCAST_FRANCE_CULTURE: Podcast = new Podcast("France Culture");
  it("Doit trouver un podcast à partir de son titre", () => {
    repository.ajouter(PODCAST_MORNING_ROUTINE);
    repository.ajouter(PODCAST_FRANCE_CULTURE);

    let podcast: Podcast | undefined = useCase.trouver("Morning Routine");

    expect(podcast).toBeDefined();
    expect(podcast!.titre).toBe(PODCAST_MORNING_ROUTINE.titre);
  });
  it("doit pas trouver de podcast à partir d'un titre de podcast qui n'existe pas", () => {
    repository.ajouter(PODCAST_MORNING_ROUTINE);
    repository.ajouter(PODCAST_FRANCE_CULTURE);

    let podcast: Podcast | undefined = useCase.trouver("Nom inconnu");

    expect(podcast).toBeUndefined();
  });
});
