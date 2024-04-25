import React from 'react';
import { BootstrapSkill, ReactSkill } from '../links/links'; 

const App = () => {
  return (
    <section className="bsb-skill-1 bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center">Skills</h2>
            <p className="text-secondary mb-5 text-center lead fs-4">Developers with skills in Bootstrap, React, Vue, and WordPress are in high demand in the tech industry. These technologies are used to build a wide range of websites and applications, from simple blogs to complex e-commerce platforms.</p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row justify-content-xl-center gy-3 gy-sm-4">
          <BootstrapSkill />
          <ReactSkill />
        </div>
      </div>
    </section>
  );
};

export default App;
