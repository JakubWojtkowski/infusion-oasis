import React from "react";
import styled from "styled-components";

function MovingText() {
  return (
    <Container>
      <svg width="200" height="120">
        <path id="curve" d="M 0 120 C 0 120, 130, 0, 200, 120"></path>
        <text className="text" textAnchor="middle">
          <textPath className="text_path" href="#curve" startOffset="50%">
            CurvedText
          </textPath>
        </text>
      </svg>
      ·
      <svg width="200" height="120">
        <path id="curve" d="M 0 120 C 0 120, 130, 0, 200, 120"></path>
        <text className="text" textAnchor="middle">
          <textPath className="text_path" href="#curve" startOffset="50%">
            CurvedText2
          </textPath>
        </text>
      </svg>
      ·
      <svg width="200" height="120">
        <path id="curve" d="M 0 120 C 0 120, 130, 0, 200, 120"></path>
        <text className="text" textAnchor="middle">
          <textPath className="text_path" href="#curve" startOffset="50%">
            CurvedText3
          </textPath>
        </text>
      </svg>
      ·
      <svg width="200" height="120">
        <path id="curve" d="M 0 120 C 0 120, 130, 0, 200, 120"></path>
        <text className="text" textAnchor="middle">
          <textPath className="text_path" href="#curve" startOffset="50%">
            CurvedText4
          </textPath>
        </text>
      </svg>
      ·
      <svg width="200" height="120">
        <path id="curve" d="M 0 120 C 0 120, 130, 0, 200, 120"></path>
        <text className="text" textAnchor="middle">
          <textPath className="text_path" href="#curve" startOffset="50%">
            CurvedText4
          </textPath>
        </text>
      </svg>
      {/* <p>NATURAL ANTIOXIDANT</p>·<p>HYDRATION</p>·<p>LOW CALORIES</p>·
      <p>FOCUS</p>·<p>HEART HEALTH</p> */}
    </Container>
  );
}

export default MovingText;

const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
  padding: 0 16px;
  font-size: 24px;

  p {
    letter-spacing: 1.5px;
    font-size: clamp(0.3rem, 1.5vw, 1.5rem);
    -webkit-transform: rotate(5deg);
  }

  p:nth-child(2n) {
    -webkit-transform: rotate(-5deg);
  }
`;
