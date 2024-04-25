import React from 'react';

const BootstrapSkill = () => (
  <Skill
    name="Bootstrap"
    description="Bootstrap is a front-end framework that makes it easy to create responsive and mobile-friendly websites."
    progress={85}
  />
);

const ReactSkill = () => (
  <Skill
    name="React"
    description="React is a JavaScript library for building user interfaces. It is known for its speed, performance, and scalability."
    progress={75}
  />
);

const Skill = ({ name, description, progress }) => {
  return (
    <div className="col-12 col-sm-6 col-xl-5">
      <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
        <h3 className="fw-bold mb-2">{name}</h3>
        <p className="text-secondary fst-italic mb-4">{description}</p>
        <div className="progress">
          <div className={`progress-bar progress-bar-striped progress-bar-animated progress-bar-width-${name.toLowerCase()}`} role="progressbar" aria-label={name} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
        </div>
      </div>
    </div>
  );
};

export { BootstrapSkill, ReactSkill };
