import { describe, expect, test } from "vitest";
import { getAPIKey } from "../src/api/auth";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("should return the API key when a valid 'ApiKey' header is provided", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey super-secret-token-123",
    };
    const result = getAPIKey(headers);
    expect(result).toBe("super-secret-token-123");
  });

  test("should return null if the authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("should return null if the header does not start with 'ApiKey'", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer some-other-token",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("should return null if the header is malformed (only 'ApiKey' without value)", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("should return null if the header is empty", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
