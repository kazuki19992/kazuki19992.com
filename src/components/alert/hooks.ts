import { InfoType } from "../../../types";

export const useAlert = () => {
  /**
   * アラートの色を取得する
   * @param type 情報の型
   * @returns 背景色と文字色
   */
  const getColor = (
    type: InfoType
  ): {
    background: string;
    text: string;
  } => {
    switch (type) {
      case InfoType.ERROR: {
        return {
          background: "bg-pink-300/50 dark:bg-pink-700/50",
          text: "text-pink-700 dark:text-pink-300",
        };
      }
      case InfoType.INFO: {
        return {
          background: "bg-cyan-300/50 dark:bg-cyan-700/50",
          text: "text-cyan-700 dark:text-cyan-300",
        };
      }
      case InfoType.SUCCESS: {
        return {
          background: "bg-lime-300/50 dark:bg-lime-700/50",
          text: "text-lime-700 dark:text-lime-300",
        };
      }
      case InfoType.WARN: {
        return {
          background: "bg-amber-300/50 dark:bg-amber-700/50",
          text: "text-amber-700 dark:text-amber-300",
        };
      }
    }
  };

  return {
    getColor,
  };
};
