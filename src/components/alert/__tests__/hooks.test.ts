import { describe, expect, test, beforeEach } from "vitest";
import { RenderHookResult, renderHook } from "@testing-library/react";
import { useAlert } from "../hooks";
import { InfoType } from "../../../types";
import { BiCommentError, BiListCheck, BiSolidError } from "react-icons/bi";
import { BsInfoCircleFill } from "react-icons/bs";

type AlertHooksType = ReturnType<typeof useAlert>;

describe("useAlert", () => {
  const hook = () => renderHook(() => useAlert());
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let r: RenderHookResult<AlertHooksType, any>;
  beforeEach(() => {
    r = hook();
  });

  describe("genColor", () => {
    test(InfoType.ERROR + "の場合のはpink系になる", () => {
      expect(r.result.current.getColor(InfoType.ERROR)).toEqual({
        background: "bg-pink-300/50 dark:bg-pink-700/50",
        text: "text-pink-700 dark:text-pink-300",
      });
    });
    test(InfoType.INFO +"の場合のはcyan系になる", () => {
      expect(r.result.current.getColor(InfoType.INFO)).toEqual({
        background: "bg-cyan-300/50 dark:bg-cyan-700/50",
        text: "text-cyan-700 dark:text-cyan-300",
      });
    });
    test(InfoType.SUCCESS + "の場合のはlime系になる", () => {
      expect(r.result.current.getColor(InfoType.SUCCESS)).toEqual({
        background: "bg-lime-300/50 dark:bg-lime-700/50",
          text: "text-lime-700 dark:text-lime-300",
      });
    });
    test(InfoType.WARN + "の場合のはamber系になる", () => {
      expect(r.result.current.getColor(InfoType.WARN)).toEqual({
        background: "bg-amber-300/50 dark:bg-amber-700/50",
          text: "text-amber-700 dark:text-amber-300",
      });
    });
  });

  describe('getIcon', () => {
    test(`${InfoType.ERROR}のときは BiCommentError のアイコンを出す`, () => {
      expect(r.result.current.getIcon(InfoType.ERROR)).toEqual(BiCommentError);
    })

    test(`${InfoType.INFO}のときは BsInfoCircleFill のアイコンを出す`, () => {
      expect(r.result.current.getIcon(InfoType.INFO)).toEqual(BsInfoCircleFill);
    })

    test(`${InfoType.SUCCESS}のときは BiListCheck のアイコンを出す`, () => {
      expect(r.result.current.getIcon(InfoType.SUCCESS)).toEqual(BiListCheck);
    })

    test(`${InfoType.WARN}のときは BiSolidError のアイコンを出す`, () => {
      expect(r.result.current.getIcon(InfoType.WARN)).toEqual(BiSolidError);
    })
  })
});
