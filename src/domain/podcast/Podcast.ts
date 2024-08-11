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
}
