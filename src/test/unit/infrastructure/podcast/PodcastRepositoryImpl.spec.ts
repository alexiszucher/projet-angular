import {it, describe, expect, beforeEach} from "vitest";
import Podcast from "../../../../domain/podcast/Podcast";
import PodcastRepository from "../../../../domain/podcast/PodcastRepository";
import PodcastRepositoryImpl from "../../../../infrastructure/podcast/PodcastRepositoryImpl";
import DatabaseFake from "./DatabaseFake";
import Episode from "../../../../domain/podcast/episode/Episode";

describe("Test sur l'implémentation du repository de podcast", () => {
  const PODCAST_ROUTINE_MATINALE: Podcast = new Podcast("Routine matinale");
  const PODCAST_CULTURE: Podcast = new Podcast("Culture");
  let repository: PodcastRepository;

  beforeEach(() => {
    repository = new PodcastRepositoryImpl(new DatabaseFake());
  })

  it("Le podcast doit être ajouté", () => {
    expect(repository.lister().length).toBe(0);
    repository.ajouter(PODCAST_ROUTINE_MATINALE);
    expect(repository.lister().length).toBe(1);
  });

  it("Les podcasts doivent être listés", () => {
    repository.ajouter(PODCAST_ROUTINE_MATINALE);
    repository.ajouter(PODCAST_CULTURE);
    expect(repository.lister().length).toBe(2);
  });

  it("Un nom de podcast doit être trouvé", () => {
    repository.ajouter(PODCAST_ROUTINE_MATINALE);
    repository.ajouter(PODCAST_CULTURE);
    expect(repository.trouver(PODCAST_ROUTINE_MATINALE.titre)).toBeDefined();
  });

  it("Un nom de podcast ne doit pas être trouvé", () => {
    repository.ajouter(PODCAST_ROUTINE_MATINALE);
    repository.ajouter(PODCAST_CULTURE);
    expect(repository.trouver("Nom inconnu")).toBeUndefined();
  });

  it("Un podcast doit être mis à jour", () => {
    repository.ajouter(PODCAST_ROUTINE_MATINALE);
    repository.ajouter(PODCAST_CULTURE);
    expect(repository.trouver(PODCAST_ROUTINE_MATINALE.titre)!.episodes.length).toBe(0);

    let podcast: Podcast = new Podcast(PODCAST_ROUTINE_MATINALE.titre);
    podcast.ajouterEpisode(new Episode("Episode 1"));
    repository.mettreAJour(podcast);

    expect(repository.trouver(PODCAST_ROUTINE_MATINALE.titre)!.episodes.length).toBe(1);
  });
})

