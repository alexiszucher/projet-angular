import {describe, expect, it} from "vitest";
import PodcastRepositoryFake from "../podcast/PodcastRepositoryFake";
import Podcast from "../../../../domain/podcast/Podcast";
import MettreAjourVuEpisodeUseCase from "../../../../application/episode/MettreAjourVuEpisodeUseCase";
import Episode from "../../../../domain/podcast/episode/Episode";

describe("Mettre A Jour Vu Episode Test", () => {
  const repository: PodcastRepositoryFake = new PodcastRepositoryFake();
  const useCase: MettreAjourVuEpisodeUseCase = new MettreAjourVuEpisodeUseCase(repository);
  const TITRE_PODCAST_ROUTINE_MATINALE: string = "Routine matinale";
  const TITRE_EPISODE: string = "Episode 1";
  let EPISODE_5_CONSEILS_CLES: Episode = new Episode(TITRE_EPISODE);
  let PODCAST_ROUTINE_MATINALE: Podcast = new Podcast(TITRE_PODCAST_ROUTINE_MATINALE);
  it("doit mettre à jour un episode à vu", () => {
    PODCAST_ROUTINE_MATINALE.ajouterEpisode(EPISODE_5_CONSEILS_CLES);
    repository.ajouter(PODCAST_ROUTINE_MATINALE);
    useCase.mettreAJourVu(PODCAST_ROUTINE_MATINALE.titre, EPISODE_5_CONSEILS_CLES.titre);

    let episode: Episode | undefined = repository.trouver(PODCAST_ROUTINE_MATINALE.titre)?.episodes.find((ep) => ep.titre === EPISODE_5_CONSEILS_CLES.titre);
    expect(episode).toBeDefined();
    expect(episode?.estVu).toBe(true);
  });
});
