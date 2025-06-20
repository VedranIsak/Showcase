import React, { JSX } from "react";
import FadeInSectionProps from "../props/FadeInSectionProps";

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }): JSX.Element => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    if(domRef.current) {
        observer.observe(domRef.current);
    }

  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
