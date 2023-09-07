import express from "express";
const router = express.Router();

router.get("/api", (req, res) => {

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date();

  let day = weekday[date.getDay()];

  const { track, slack_name } = req.query;

  return res.json({
      slack_name: slack_name ? slack_name : "not specified",
      current_day: day,
      utc_time: ((new Date().toISOString()).slice(0,-5)+"Z"),
      track: track ? track : "not specified",
      github_file_url: "https://github.com/nitoC/zuriStage1/blob/master/index.js",
      github_repo_url: "https://github.com/nitoC/zuriStage1",
      status_code: 200,
  });
});

export default router;
