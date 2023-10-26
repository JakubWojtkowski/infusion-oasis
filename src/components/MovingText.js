import React from "react";
import styled from "styled-components";

function MovingText() {
  return (
    <Container>
      <svg width="200" height="120">
        <path id="curve" d="M 0 120 C 0 120, 130, 0, 200, 120"></path>
        <text className="text" textAnchor="middle">
          <textPath className="text_path" href="#curve" startOffset="50%">
            ANTIOXIDANT
          </textPath>
        </text>
      </svg>
      ·
      <svg width="200" height="120">
        <path id="curve" d="M 0 120 C 0 120, 130, 0, 200, 120"></path>
        <text className="text" textAnchor="middle">
          <textPath className="text_path" href="#curve" startOffset="50%">
            HYDRATION
          </textPath>
        </text>
      </svg>
      ·
      <svg width="200" height="120">
        <path id="curve" d="M 0 120 C 0 120, 130, 0, 200, 120"></path>
        <text className="text" textAnchor="middle">
          <textPath className="text_path" href="#curve" startOffset="50%">
            LOW CALORIES
          </textPath>
        </text>
      </svg>
      ·
      <svg width="200" height="120">
        <path id="curve" d="M 0 120 C 0 120, 130, 0, 200, 120"></path>
        <text className="text" textAnchor="middle">
          <textPath className="text_path" href="#curve" startOffset="50%">
            FOCUS
          </textPath>
        </text>
      </svg>
      ·
      <svg width="200" height="120">
        <path id="curve" d="M 0 120 C 0 120, 130, 0, 200, 120"></path>
        <text className="text" textAnchor="middle">
          <textPath className="text_path" href="#curve" startOffset="50%">
            HEART HEALTH
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
`;
