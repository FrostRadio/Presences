const presence = new Presence({
    clientId: "630098355145539595"
  }),
  browsingTimestamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", () => {
  const presenceData: PresenceData = {
      largeImageKey: "lg"
    },
    [page, section] = window.location.href
      .replace("https://tugastrikes.com/", "")
      .split("/");

  let state;
  if (section === "skins") state = "Skins";
  else if (section === "myskins") state = "My Skins";
  else if (section === "buyskins") state = "Buy Skins";
  else if (section === "sellskins") state = "Sell Skins";
  else state = "Home Page";

  if (page === "market") presenceData.details = "Market";

  presenceData.state = state;

  presenceData.startTimestamp = browsingTimestamp;
  delete presenceData.smallImageKey;

  presence.setActivity(presenceData, true);
});
