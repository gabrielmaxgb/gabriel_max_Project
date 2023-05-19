import { MovieDTO } from "../../../services/types";

export interface IMovieCardProps {
  movie: MovieDTO;
}

export type EffectCallback = () => void | (() => void | undefined);
