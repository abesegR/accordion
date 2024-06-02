import React, { useRef, useState } from "react";

function Accordion() {
  const data = [
    {
      id: 1,
      title: "What are accordion components?",
      text: "Contrary to popular belief, Lorem Ipsum is not simply rando text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, andgoing through the cites of the word in classical literature,discovered the undoubtable source.",
    },
    {
      id: 2,
      title: "What are accordion components?",
      text: "Contrary to popular belief, Lorem Ipsum is not simply rando text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, andgoing through the cites of the word in classical literature,discovered the undoubtable source.",
    },
    {
      id: 3,
      title: "What are accordion components?",
      text: "Contrary to popular belief, Lorem Ipsum is not simply rando text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, andgoing through the cites of the word in classical literature,discovered the undoubtable source.",
    },
    {
      id: 4,
      title: "What are accordion components?",
      text: "Contrary to popular belief, Lorem Ipsum is not simply rando text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, andgoing through the cites of the word in classical literature,discovered the undoubtable source.",
    },
  ];

  const [isVisible0, setVisibility0] = useState(false);
  const [isVisible1, setVisibility1] = useState(false);
  const [isVisible2, setVisibility2] = useState(false);
  const [isVisible3, setVisibility3] = useState(false);

  function handleVisibility(index) {
    if (index == 0) {
      setVisibility0(!isVisible0);
    } else if (index == 1) {
      setVisibility1(!isVisible1);
    } else if (index == 2) {
      setVisibility2(!isVisible1);
    } else if (index == 3) {
      setVisibility3(!isVisible3);
    } else if (index == 4) {
      setVisibility4(!isVisible4);
    }
  }

  return (
    <>
      <div className="accordion-container">
        <div className="heading">
          <h2>Enable Multi Selection</h2>
        </div>
        <div className="accordion-box">
          <div onClick={() => handleVisibility(0)} className="accordion-title">
            <div className="title">{data[0].title}</div>
            <div className="accordion-icon">+</div>
          </div>
          <div
            style={{ display: isVisible0 ? "block" : "none" }}
            className="accordion-text"
          >
            {data[0].text}
          </div>
        </div>

        <div className="accordion-box">
          <div onClick={() => handleVisibility(1)} className="accordion-title">
            <div className="title">{data[1].title}</div>
            <div className="accordion-icon">+</div>
          </div>
          <div
            style={{ display: isVisible1 ? "block" : "none" }}
            className="accordion-text"
          >
            {data[1].text}
          </div>
        </div>

        <div className="accordion-box">
          <div onClick={() => handleVisibility(2)} className="accordion-title">
            <div className="title">{data[2].title}</div>
            <div className="accordion-icon">+</div>
          </div>
          <div
            style={{ display: isVisible2 ? "block" : "none" }}
            className="accordion-text"
          >
            {data[2].text}
          </div>
        </div>

        <div className="accordion-box">
          <div onClick={() => handleVisibility(3)} className="accordion-title">
            <div className="title">{data[3].title}</div>
            <div className="accordion-icon">+</div>
          </div>
          <div
            style={{ display: isVisible3 ? "block" : "none" }}
            className="accordion-text"
          >
            {data[3].text}
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
