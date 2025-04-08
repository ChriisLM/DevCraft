import { useState } from "react";

export function useCopyToClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => setCopied(false), timeout);
    } catch (error) {
      console.error("Error al copiar al portapapeles:", error);
    }
  };

  return { copied, copy };
}
