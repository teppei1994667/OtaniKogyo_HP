"use client";

import { useEffect, useRef, useState } from "react";

type TitleProps = {
  title: string;
  parentClassName?: string;
  childClassName?: string;
};

export const Title = (props: TitleProps) => {
  const [showTitle, setShowTitle] = useState(false);
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // IntersectionObserverを使用して、要素がビューポートに入ったときにタイトルを表示
    const currentRef = titleRef.current;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setShowTitle(true);
        });
      },
      { threshold: 0.5 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={titleRef}
      className={`transition-all duration-1000 ${
        showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${props.parentClassName ? props.parentClassName : ""}`}
    >
      <h1
        className={`font-bold primary-color ${
          props.childClassName ? props.childClassName : ""
        }`}
      >
        {props.title}
      </h1>
    </div>
  );
};
