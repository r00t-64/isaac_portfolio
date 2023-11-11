import React, { useEffect } from 'react';
import Typed from 'typed.js';

const IntoSkillsComponent = () => {
  useEffect(() => {
    const options = {
      strings: ["Data Analytics", "Machine Learning", "Business Analytics", "ML Ops", "Backend Development","Data Analytics"],
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
