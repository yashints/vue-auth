const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
  {
    CinemaId: String,
    DisplayName: String,
    Description: String,
    Address1: String,
    City: String,
    PhoneNumber: String,
    Latitude: String,
    Longitude: String,
    ParkingInfo: String,
    PublicTransport: String,
    Concepts: [
      {
        ID: String,
        ShortName: String,
        VistaAttributeCode: String,
        Description: String,
        Message: String,
        WarningMessage: String,
        SalesChannels: String,
        IsUsedForConcepts: Boolean,
        IsUsedForSessionAdvertising: Boolean,
        DisplayPriority: String,
        SessionAttributeCinemaIDs: String,
        ConceptDescripton: String,
        BadgeContent: String,
        BadgeHoverContent: String,
        BadgeTextColour: String,
        BadgeTextColourDark: String,
        BadgeBackgroundColour: String,
        BadgeBackgroundColourDark: String,
        BadgeDisplayOnWebsite: Boolean,
        AttributeTheme: String,
        GradientStartColor: String,
        GradientEndColor: String,
        SortOrder: Number,
        TimeForSessionUpgrade: Number,
        PrimaryDescriptionForUpgrade: String,
        SecondaryDescriptionForUpgrade: String,
        Expand: Boolean,
        IsLanguage: Boolean,
      },
    ],
    ImageSrc: String,
    ImageAlt: String,
    DeactivateTicketPurchases: Boolean,
    DisableLoyalty: Boolean,
    DisableChangeBooking: Boolean,
    ChangeBookingGracePeriod: Number,
    ChangeBookingExperienceFilter: [
      {
        ID: String,
        ShortName: String,
        VistaAttributeCode: String,
        Description: String,
        Message: String,
        WarningMessage: String,
        SalesChannels: String,
        IsUsedForConcepts: Boolean,
        IsUsedForSessionAdvertising: Boolean,
        DisplayPriority: String,
        SessionAttributeCinemaIDs: String,
        ConceptDescripton: String,
        BadgeContent: String,
        BadgeHoverContent: String,
        BadgeTextColour: String,
        BadgeTextColourDark: String,
        BadgeBackgroundColour: String,
        BadgeBackgroundColourDark: String,
        BadgeDisplayOnWebsite: Boolean,
        AttributeTheme: String,
        GradientStartColor: String,
        GradientEndColor: String,
        SortOrder: Number,
        TimeForSessionUpgrade: Number,
        PrimaryDescriptionForUpgrade: String,
        SecondaryDescriptionForUpgrade: String,
        Expand: Boolean,
        IsLanguage: Boolean,
      },
    ],
    DisableInviteFriends: Boolean,
    DisableFutureBookings: Boolean,
    DisableEditBooking: Boolean,
    DisablePaypal: Boolean,
    DisableVouchersExperienceFilter: [],
    EnabledExperienceUpgrades: [
      {
        ID: String,
        ShortName: String,
        VistaAttributeCode: String,
        Description: String,
        Message: String,
        WarningMessage: String,
        SalesChannels: String,
        IsUsedForConcepts: Boolean,
        IsUsedForSessionAdvertising: Boolean,
        DisplayPriority: String,
        SessionAttributeCinemaIDs: String,
        ConceptDescripton: String,
        BadgeContent: String,
        BadgeHoverContent: String,
        BadgeTextColour: String,
        BadgeTextColourDark: String,
        BadgeBackgroundColour: String,
        BadgeBackgroundColourDark: String,
        BadgeDisplayOnWebsite: Boolean,
        AttributeTheme: String,
        GradientStartColor: String,
        GradientEndColor: String,
        SortOrder: Number,
        TimeForSessionUpgrade: Number,
        PrimaryDescriptionForUpgrade: String,
        SecondaryDescriptionForUpgrade: String,
        Expand: Boolean,
        IsLanguage: Boolean,
      },
    ],
    State: String,
    Postcode: String,
    Suburb: String,
    DisabledPaymentOptions: [
      {
        ID: String,
        Name: String,
        Phrase: String,
      },
    ],
    PageUrl: String,
  },
  {
    collection: "cinemas",
    read: "nearest",
  }
);

const Cinema = mongoose.model("Cinema", cinemaSchema);

module.exports = Cinema;
