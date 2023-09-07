import express from "express";
const router = express.Router();

router.get("api/info", (req, res) => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date = new Date();
    let day = weekday[date.getDay()];
  const { track, slack } = req.query;
    return res.json({
      status_code: 200,
      slack_name: slack?slack:"not specified",
      current_day: day,
      utc_time: Date.now().toUTCString(),
      track: track?track :"not specified",
      github_file_url:
        "https://github.com/username/repo/blob/main/file_name.ext",
      github_repo_url: "",
    });
});

export default router;
