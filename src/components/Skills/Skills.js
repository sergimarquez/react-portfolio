import { skills } from '../../portfolio';
import './Skills.css';

const Skills = () => (
  <section className="section skills" id="skills">
    <h2 className="section__title">Skills</h2>
    <div className="skills__cloud">
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={`category-${category}`} className="skills__group">
          <h3>{category.replace(/^\w/, (c) => c.toUpperCase())}</h3>
          <div className="skills__tags">
            {skillList.map((skill) => (
              <span key={`skill-${category}-${skill}`} className="skills__tag">
                {skill.replace("'", '&apos;')}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
