const { discordOAuthHandler } = require("./controllers.js");
const { getDiscordUser, generateNewAccessToken } = require("./services.js");
const jwt = require("jsonwebtoken");

const accessTokenCookieOptions = {
  maxAge: 900000, // 15 mins
  httpOnly: true,
  domain: "localhost",
  path: "/",
  sameSite: "strict",
  secure: false,
};
const refreshTokenCookieOptions = {
  ...accessTokenCookieOptions,
  maxAge: 1.8e6,
};

function verifyJWT(token) {
  try {
    return { payload: jwt.verify(token, process.env.PRIV_KEY), expired: false };
  } catch (error) {
    return { payload: null, expired: true };
  }
}

async function verifyTokens(req, res, next) {
  if (!req.cookies || req.cookies === undefined) {
    console.log("how the f did u make a request bruh???");
    return res.send({
      status: 200,
      content: "you are not locked in you cannot do these requests",
    });
  }

  if (
    !verifyJWT(req.cookies.refreshToken).expired &&
    !verifyJWT(req.cookies.accessToken).expired
  ) {
    console.log("users tokens are both active and now fetching the user details");
    return next();
  }

  if (!req.cookies.accessToken && req.cookies.refreshToken) {
    console.log("users access token is expired, now fetch a new one.");
    const drt = verifyJWT(req.cookies.refreshToken);
    if (drt.expired) return console.log("expired token relogin");
    const { access_token, refresh_token } = await generateNewAccessToken(
      drt.payload.refresh_token
    );
    const accessToken = jwt.sign({ access_token }, process.env.PRIV_KEY, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign({ refresh_token }, process.env.PRIV_KEY, {
      expiresIn: "59m",
    });
    res.cookie("accessToken", accessToken, accessTokenCookieOptions);
    res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions);
    res.locals.at = accessToken;
    console.log("set new tokens and now fetching the users details");
    return next();
  }
  return res.send({
    status: 200,
    content: "User is not logged in, redirect to the homepage.",
  });
}

function routes(app) {
  app.get("/api/auth/discord/redirect", discordOAuthHandler);
  app.get("/getUserDetails", verifyTokens, async (req, res) => {
    res.status(200).json({
      data: await getDiscordUser(
        verifyJWT(req.cookies.accessToken || res.locals.at).payload.access_token
      ),
    });
  });

  app.get("/", async (req, res) => console.log("hi"));
}

module.exports = routes;
