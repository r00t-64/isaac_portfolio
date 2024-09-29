import React, { useEffect } from 'react';
import Typed from 'typed.js';

const IntoSkillsComponent = () => {
  useEffect(() => {
    const options = {
      strings: ["Data Science", "Quantitative Finance", "Risk Management"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    };

    const typed = new Typed('.typing-text', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="typing-text"></span>;
};

export default IntoSkillsComponent;
