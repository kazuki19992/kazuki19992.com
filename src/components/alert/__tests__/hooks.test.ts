import { describe, expect, test, beforeEach } from "vitest";
import { RenderHookResult, renderHook } from "@testing-library/react";
import { useAlert } from "../hooks";
import { InfoType } from "../../../../types";

type AlertHooksType = ReturnType<typeof useAlert>;

describe("useAlert", () => {
  const hook = () => renderHook(() => useAlert());
  describe("genColor", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let r: RenderHookResult<AlertHooksType, any>;

    beforeEach(() => {
      r = hook();
    });
    test("ERRORの場合のはpink系になる", () => {
      expect(r.result.current.getColor(InfoType.ERROR)).toEqual({
        background: "bg-pink-300/50 dark:bg-pink-700/50",
        text: "text-pink-700 dark:text-pink-300",
      });
    });
    test("INFOの場合のはcyan系になる", () => {
      expect(r.result.current.getColor(InfoType.INFO)).toEqual({
        background: "bg-cyan-300/50 dark:bg-cyan-700/50",
        text: "text-cyan-700 dark:text-cyan-300",
      });
    });
  });
});
