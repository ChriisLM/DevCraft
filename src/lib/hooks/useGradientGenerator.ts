import { useState, useEffect } from "react";
import { DEFAULT_STOPS, MAX_STOPS } from "../constants/gradientConstants";
import { GradientStop } from "../types/gradient";
import { useCopyToClipboard } from "./useCopyToClipboard";

export type GradientType = "linear" | "radial" | "conic";

export function useGradient() {

  const [gradientType, setGradientType] = useState<GradientType>("linear");
  const [angle, setAngle] = useState(90);
  const [stops, setStops] = useState<GradientStop[]>(DEFAULT_STOPS);
  const [cssCode, setCssCode] = useState("");
  const [previewStyle, setPreviewStyle] = useState({});
  const { copy, copied } = useCopyToClipboard();

  useEffect(() => {
    updateGradient();
  }, [gradientType, angle, stops]);

  const updateGradient = () => {
    let gradientCSS = "";
    const sortedStops = [...stops].sort((a, b) => a.position - b.position);

    const stopsString = sortedStops
      .map((stop) => `${stop.color} ${stop.position}%`)
      .join(", ");

    if (gradientType === "linear") {
      gradientCSS = `background: linear-gradient(${angle}deg, ${stopsString});`;
      setPreviewStyle({
        background: `linear-gradient(${angle}deg, ${stopsString})`,
      });
    } else if (gradientType === "radial") {
      gradientCSS = `background: radial-gradient(circle, ${stopsString});`;
      setPreviewStyle({
        background: `radial-gradient(circle, ${stopsString})`,
      });
    } else if (gradientType === "conic") {
      gradientCSS = `background: conic-gradient(from ${angle}deg, ${stopsString});`;
      setPreviewStyle({
        background: `conic-gradient(from ${angle}deg, ${stopsString})`,
      });
    }

    setCssCode(gradientCSS);
  };

  const handleStopColorChange = (index: number, color: string) => {
    const newStops = [...stops];
    newStops[index].color = color;
    setStops(newStops);
  };

  const handleStopPositionChange = (index: number, position: number) => {
    const newStops = [...stops];
    newStops[index].position = position;
    setStops(newStops);
  };

  const addStop = () => {
    if (stops.length < MAX_STOPS) {
      const positions = stops
        .map((stop) => stop.position)
        .sort((a, b) => a - b);
      let newPosition = 50;

      if (positions.length >= 2) {
        let maxGap = 0;
        let gapPosition = 50;
        for (let i = 0; i < positions.length - 1; i++) {
          const gap = positions[i + 1] - positions[i];
          if (gap > maxGap) {
            maxGap = gap;
            gapPosition = positions[i] + gap / 2;
          }
        }
        newPosition = gapPosition;
      }

      setStops([...stops, { color: "#10b981", position: newPosition }]);
    }
  };

  const removeStop = (index: number) => {
    if (stops.length > 2) {
      const newStops = [...stops];
      newStops.splice(index, 1);
      setStops(newStops);
    }
  };

  const copyCSS = () => copy(cssCode);

  return {
    gradientType,
    setGradientType,
    angle,
    setAngle,
    stops,
    setStops,
    handleStopColorChange,
    handleStopPositionChange,
    addStop,
    removeStop,
    cssCode,
    previewStyle,
    copyCSS,
    copied,
  };
}
