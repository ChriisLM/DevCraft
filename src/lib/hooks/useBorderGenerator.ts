import { useState } from "react";
import {
  DEFAULT_BORDER_WIDTH,
  DEFAULT_BORDER_STYLE,
  DEFAULT_BORDER_COLOR,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_BACKGROUND_COLOR,
} from "../constants/borderConstants";
import { BorderRadius } from "../types/border";
import { useCopyToClipboard } from "./useCopyToClipboard";

export function useBorder() {
  const [borderWidth, setBorderWidth] = useState(DEFAULT_BORDER_WIDTH);
  const [borderStyle, setBorderStyle] = useState(DEFAULT_BORDER_STYLE);
  const [borderColor, setBorderColor] = useState(DEFAULT_BORDER_COLOR);
  const [borderRadius, setBorderRadius] = useState<BorderRadius>(
    DEFAULT_BORDER_RADIUS
  );
  const [linkCorners, setLinkCorners] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState(
    DEFAULT_BACKGROUND_COLOR
  );
  const [cssCode, setCssCode] = useState("");
  const { copy, copied } = useCopyToClipboard();

  const updateCssCode = () => {
    const { topLeft, topRight, bottomRight, bottomLeft } = borderRadius;
    const css = `border: ${borderWidth}px ${borderStyle} ${borderColor};\nborder-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px;\nbackground-color: ${backgroundColor};`;
    setCssCode(css);
  };

  const handleRadiusChange = (corner: keyof BorderRadius, value: number) => {
    if (linkCorners) {
      setBorderRadius({
        topLeft: value,
        topRight: value,
        bottomRight: value,
        bottomLeft: value,
      });
    } else {
      setBorderRadius({
        ...borderRadius,
        [corner]: value,
      });
    }
    updateCssCode();
  };

  const copyCSS = () => copy(cssCode);

  const getBorderStyle = () => {
    const { topLeft, topRight, bottomRight, bottomLeft } = borderRadius;
    return {
      border: `${borderWidth}px ${borderStyle} ${borderColor}`,
      borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
      backgroundColor,
    };
  };

  return {
    borderWidth,
    setBorderWidth,
    borderStyle,
    setBorderStyle,
    borderColor,
    setBorderColor,
    borderRadius,
    setBorderRadius,
    linkCorners,
    setLinkCorners,
    backgroundColor,
    setBackgroundColor,
    cssCode,
    updateCssCode,
    handleRadiusChange,
    copyCSS,
    copied,
    getBorderStyle,
  };
}
