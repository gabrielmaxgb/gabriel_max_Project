import { Typography, useTheme } from "@mui/material";
import { IMovieCardProps } from "./types";
import { CardContainer } from "./MovieCardStyled";
import { useNavigate } from "react-router-dom";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import { toHoursAndMinutes } from "../../../helpers/toHoursAndMinutes";
import firstLotr from "../../../assets/images/1.jpg";
import { useCallback, useEffect, useState } from "react";
import { BG_IMAGES } from "./consts";

function MovieCard({ movie }: IMovieCardProps) {
  const theme = useTheme();

  return (
    <CardContainer
      bgcolor={theme.extraColors.black}
      bgColorOnHover={theme.extraColors.white}
      bgimageonhover={BG_IMAGES[movie?.name]}
    >
      <Typography className="title" variant="h6">
        {movie?.name}
      </Typography>
      <section className="details">
        <div className="awards">
          <Typography variant="body1">
            <EmojiEventsIcon />
            {movie?.academyAwardWins}
          </Typography>
        </div>
        <div className="duration">
          <Typography variant="body1">
            <AccessTimeSharpIcon />
            {toHoursAndMinutes(movie?.runtimeInMinutes)}
          </Typography>
        </div>
      </section>
    </CardContainer>
  );
}

export default MovieCard;
