"use client";

import { useEffect, useState } from "react";

export function Zoom(props: { children: React.ReactNode }) {
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setZoom((zoom) => zoom + 0.01);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="relative"
      style={{
        zoom: zoom,
      }}
    >
      {props.children}
    </div>
  );
}
