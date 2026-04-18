import { describe, expect, it } from "vitest";
import {
    buildCandidatePorts,
    getPortHintFromScript,
    isValidPort,
    normalizePort,
    parsePortFromArgs,
    prioritizePorts
} from "../src/utils/port-detection.js";

describe("port detection helpers", () => {
    it("validates and normalizes ports", () => {
        expect(isValidPort(5174)).toBe(true);
        expect(isValidPort("65536")).toBe(false);
        expect(normalizePort(" 5174 ")).toBe(5174);
        expect(normalizePort("abc")).toBeNull();
    });

    it("parses CLI --port formats", () => {
        expect(parsePortFromArgs(["--port", "5174"])).toBe(5174);
        expect(parsePortFromArgs(["-p", "3001"])).toBe(3001);
        expect(parsePortFromArgs(["--port=8080"])).toBe(8080);
        expect(parsePortFromArgs(["--port", "bad"])).toBeNull();
    });

    it("extracts explicit and framework default hints", () => {
        expect(getPortHintFromScript("vite --port 5174", null)).toEqual({
            port: 5174,
            source: "script-explicit",
            framework: "vite"
        });

        expect(getPortHintFromScript("next dev", null)).toEqual({
            port: 3000,
            source: "framework-default",
            framework: "next"
        });
    });

    it("prioritizes auto-incremented vite ports when defaults are used", () => {
        const prioritized = prioritizePorts([5173, 5174, 3000], {
            framework: "vite",
            hintedPort: 5173,
            source: "framework-default"
        });

        expect(prioritized[0]).toBe(5174);
    });

    it("builds candidate ports with hinted port first in set", () => {
        const ports = buildCandidatePorts(7001);
        expect(ports.includes(7001)).toBe(true);
        expect(ports.includes(5173)).toBe(true);
        expect(ports.includes(3000)).toBe(true);
    });
});
