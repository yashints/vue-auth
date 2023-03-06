const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    MovieId: { type: String, required: true },
    ItemName: String,
    Title: String,
    Rating: String,
    Classification: {
      ID: String,
      VistaID: String,
      Description: String,
      Text: String,
      TextColor: String,
      BackgroundColor: String,
      ClassificationRestriction: String,
      ClassificationTerms: String,
      ClassificationDisclaimer: String,
      ClassificationConfirmationEmailDisclaimer: String,
      ClassificationLivingTicketDisclaimer: String,
    },
    ScheduledFilmId: String,
    Synopsis: String,
    Runtime: String,
    ReleaseDate: String,
    GraphicUrl: String,
    TrailerUrl: String,
    PageUrl: String,
    CinemaId: String,
    CinemaName: String,
    Distributor: String,
    AllowTicketSales: String,
    ShortCode: String,
    RatingDescription: String,
    Genres: [
      {
        GenreId: String,
        Name: String,
        Description: String,
      },
    ],
    IsTopMovie: Boolean,
    SortPriority: Number,
    ExistInWatchlist: Boolean,
    IsScheduledAtCinema: Boolean,
  },
  {
    collection: "movies",
    read: "nearest",
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
