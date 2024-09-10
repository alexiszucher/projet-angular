import Episode from "./episode/Episode";

export default class Podcast {
  private _titre: string;
  private _episodes: Episode[];

  constructor(titre: string) {
    this._titre = titre;
    this._episodes = [];
  }

  public get titre(): string {
    return this._titre;
  }

  public get episodes(): Episode[] {
    return this._episodes;
  }

  ajouterEpisode(episode: Episode): void {
    this._episodes.push(episode);
  }

  mettreAJourEpisode(episode: Episode): void {
    let index: number = this.episodes.findIndex((ep: Episode) => ep.titre === episode.titre);
    if (index !== -1) {
      this._episodes[index] = episode;
    }
  }
}
