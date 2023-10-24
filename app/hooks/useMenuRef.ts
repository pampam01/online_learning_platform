import { useEffect, useRef } from "react";

export default function useMenuRef(setOpen: (value: boolean) => void) {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleDocumentClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [setOpen]);

  return menuRef;
}
