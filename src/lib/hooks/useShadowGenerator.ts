import { useEffect, useState } from "react";
import { Shadow } from "../types/shadow";
import { defaultShadow } from "../constants/shadowConstants";
import { useCopyToClipboard } from "./useCopyToClipboard";

export function useShadowsGenerator() {
  const [shadows, setShadows] = useState<Shadow[]>([defaultShadow]);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [elementColor, setElementColor] = useState("#ffffff");
  const [borderRadius, setBorderRadius] = useState(8);
  const [cssCode, setCssCode] = useState("");
  const { copy, copied } = useCopyToClipboard();

  useEffect(() => {
    updateCssCode();
  }, []);

  const updateShadow = (index: number, property: keyof Shadow, value: any) => {
    const newShadows = [...shadows];
    newShadows[index] = { ...newShadows[index], [property]: value };
    setShadows(newShadows);
    updateCssCode(newShadows);
  };

  const addShadow = () => {
    const newShadows = [
      ...shadows,
      {
        offsetX: 0,
        offsetY: 10,
        blur: 15,
        spread: 0,
        color: "rgba(0, 0, 0, 0.1)",
        inset: false,
      },
    ];
    setShadows(newShadows);
    updateCssCode(newShadows);
  };

  const removeShadow = (index: number) => {
    if (shadows.length > 1) {
      const newShadows = [...shadows];
      newShadows.splice(index, 1);
      setShadows(newShadows);
      updateCssCode(newShadows);
    }
  };

  const updateCssCode = (shadowsList = shadows) => {
    const shadowsString = shadowsList
      .map(
        (shadow) =>
          `${shadow.inset ? "inset " : ""}${shadow.offsetX}px ${
            shadow.offsetY
          }px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
      )
      .join(", ");

    setCssCode(
      `box-shadow: ${shadowsString};\nborder-radius: ${borderRadius}px;\nbackground-color: ${elementColor};`
    );
  };

  const copyCSS = () => copy(cssCode);

  const getShadowStyle = () => {
    const shadowsString = shadows
      .map(
        (shadow) =>
          `${shadow.inset ? "inset " : ""}${shadow.offsetX}px ${
            shadow.offsetY
          }px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
      )
      .join(", ");
    return {
      boxShadow: shadowsString,
      borderRadius: `${borderRadius}px`,
      backgroundColor: elementColor,
    };
  };

  return {
    shadows,
    backgroundColor,
    elementColor,
    borderRadius,
    cssCode,
    setBackgroundColor,
    setElementColor,
    setBorderRadius,
    updateShadow,
    updateCssCode,
    addShadow,
    removeShadow,
    copyCSS,
    copied,
    getShadowStyle,
  };
}
