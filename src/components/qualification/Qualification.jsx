import React, { useState } from "react";
import "./qualification.css";
import { 
  UilGraduationCap, 
  UilBriefcaseAlt,
  UilCalendarAlt
} from "@iconscout/react-unicons";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <UilGraduationCap className="qualification__icon" />
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <UilBriefcaseAlt className="qualification__icon" />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B-Tech CSE</h3>
                <span className="qualification__subtitle">Mysore - VTU</span>
                <div className="qualification__calendar">
                  <UilCalendarAlt className="qualification__calendar-icon" /> 2018 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Pre-university course</h3>
                <span className="qualification__subtitle">Mysore - KSEAB</span>
                <div className="qualification__calendar">
                  <UilCalendarAlt className="qualification__calendar-icon" /> 2017 - 2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Secondary School</h3>
                <span className="qualification__subtitle">Mysore - CBSE</span>
                <div className="qualification__calendar">
                  <UilCalendarAlt className="qualification__calendar-icon" /> 2014 - 2016
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Java Backend</h3>
                <span className="qualification__subtitle">Skyvoyage - Bangalore</span>
                <div className="qualification__calendar">
                  <UilCalendarAlt className="qualification__calendar-icon" /> 2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Java Backend Developer</h3>
                <span className="qualification__subtitle">Stellapps - Bangalore</span>
                <div className="qualification__calendar">
                  <UilCalendarAlt className="qualification__calendar-icon" /> 2022 - 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Intern Junior Web Developer</h3>
                <span className="qualification__subtitle">SociaBull - Bangalore</span>
                <div className="qualification__calendar">
                  <UilCalendarAlt className="qualification__calendar-icon" /> 2020 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;