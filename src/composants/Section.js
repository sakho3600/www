import PropTypes from "prop-types";
import React from "react";

const Section = ({
  title = "Titre de section",
  subTitle = "Sous-titre de section",
  children,
  className,
  style
}) => (
  <section className={"section " + className} style={style}>
    <div className="container">
      <h2 className="section__title">{title}</h2>
      <p className="section__subtitle">{subTitle}</p>
      {children}
    </div>
  </section>
);

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
  subTitle: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

export default Section;
