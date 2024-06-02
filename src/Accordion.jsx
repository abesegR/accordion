import React, { useRef } from "react";

function Accordion() {
  const ref = useRef("none");
  console.log(ref.current);

  return (
    <>
      <div className="accordion-container">
        <div className="heading">
          <h2>Enable Multi Selection</h2>
        </div>
        <div className="accordion-box">
          <div className="accordion-title">
            <div className="title">What are accordion components?</div>
            <div className="accordion-icon">+</div>
          </div>
          <div ref={ref} className="accordion-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </div>
        </div>

        <div className="accordion-box">
          <div className="accordion-title">
            <div className="title">What are accordion components?</div>
            <div className="accordion-icon">+</div>
          </div>
          <div className="accordion-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </div>
        </div>

        <div className="accordion-box">
          <div className="accordion-title">
            <div className="title">What are accordion components?</div>
            <div className="accordion-icon">+</div>
          </div>
          <div className="accordion-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </div>
        </div>

        <div className="accordion-box">
          <div className="accordion-title">
            <div className="title">What are accordion components?</div>
            <div className="accordion-icon">+</div>
          </div>
          <div className="accordion-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
