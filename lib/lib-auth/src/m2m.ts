import axios from "axios";
import { decode } from "jsonwebtoken";
import _ from "lodash";

const cachedToken: { [id: string]: string } = {};

const isTokenExpired = (token: string): boolean => {
  let expiryTime = 0;
  if (token) {
    const decodedToken = decode(token, { json: true });
    if (decodedToken === null) {
      return true;
    }
    const expiryTimeInMilliSeconds =
      ((decodedToken.exp ?? 0) - 60) * 1000 - new Date().getTime();
    expiryTime = Math.floor(expiryTimeInMilliSeconds / 1000);
  }
  return expiryTime <= 0;
};

export type m2mOptions = {
  authUrl: string;
  audience?: string;
  authProxyServerUrl: string;
  authScope?: string;
  provider?: string;
  contentType?: "application/json" | "application/x-www-form-urlencoded";
};

const defaultOptions: Partial<m2mOptions> = {
  provider: "auth0",
  contentType: "application/json",
};

export const m2m = (options: m2mOptions) => {
  options = { ...defaultOptions, ...options };
  if (!options.authUrl) {
    throw new RangeError("authUrl is required");
  }
  if (
    !/^https:\/\/auth0proxy\.topcoder(-dev|-qa)?\.com\/token$/i.test(
      options.authProxyServerUrl
    )
  ) {
    throw new RangeError("Proxy server url is not correct");
  }

  const body: { [name: string]: string | undefined } = {
    grant_type: "client_credentials",
    auth0_url: options.authUrl,
    provider: options.provider,
    content_type: options.contentType,
  };
  if (options.audience) {
    body.audience = options.audience;
  } else if (options.authScope) {
    body.scope = options.authScope;
  } else {
    throw new RangeError("Audience or Scope is required");
  }

  const getM2M = async (clientId: string, clientSecret: string) => {
    if (
      _.isUndefined(cachedToken[clientId]) ||
      isTokenExpired(cachedToken[clientId])
    ) {
      let response;
      body.client_id = clientId;
      body.client_secret = clientSecret;
      try {
        response = await axios.post(options.authProxyServerUrl, body);
      } catch (err) {
        throw new Error(
          `Error when getting m2m token: ${_.toString(err.message)}`
        );
      }
      if (response.data && response.data.access_token) {
        cachedToken[clientId] = response.data.access_token;
      } else {
        throw new Error("Error when getting m2m token");
      }
    }
    return cachedToken[clientId];
  };
  return getM2M;
};
