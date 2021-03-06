var Schemas = {};

// Reports is a likeable collection
var Report = BaseModel.extendAndSetupCollection("reports");
LikeableModel.makeLikeable(Report, "report");
Reports = Report.collection;
Likes = Like.collection;

Spots = new Mongo.Collection("spots");
CurrentForecast = new Mongo.Collection("currentForecast");

Schemas.Report = new SimpleSchema({
    reporter: {
        type: String,
        label: "Reporter",
        max: 25
    },
    height: {
        type: Number,
        label: "Wave Height",
        max: 10000,
        min: 0
    },
    date: {
        type: Date,
        label: "Report Creation Date"
    },
    description: {
        type: String,
        label: "Description",
        optional: true,
        max: 250
    },
    spotName: {
        type: String,
        label: "Reported Spot"
    }
});

Reports.attachSchema(Schemas.Report);