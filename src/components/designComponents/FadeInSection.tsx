import React, { JSX } from "react";
import FadeInSectionProps from "../../props/FadeInSectionProps";
import './FadeInSection.css';

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }: FadeInSectionProps): JSX.Element => {

  const [isVisible, setVisible]: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
  const observer: IntersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setVisible(true); 
        if (domRef.current) {
          observer.unobserve(domRef.current); 
        }
      }
    });
  });

  if (domRef.current) {
    observer.observe(domRef.current);
  }

  return () => {
    if (domRef.current) {
      observer.unobserve(domRef.current);
    }
  };
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
