import styled from "styled-components";

const DivLocation = styled.div`
  background-color: #ffba08;
  font-family: "Abril Fatface", serif;
  padding-bottom: 40px;
  width: 100%;
  text-transform: uppercase;
`;

export default function Locations() {
  return (
    <DivLocation>
      <svg viewBox="0 0 46 12">
        <text x="0" y="12" fill="#6A040F">
          Paris
        </text>
      </svg>

      <svg viewBox="0 0 40 12">
        <text x="0" y="12" fill="#6A040F">
          Lyon
        </text>
      </svg>

      <svg viewBox="0 0 89 12">
        <text x="0" y="12" fill="#6A040F">
          Bordeaux
        </text>
      </svg>

      <svg viewBox="0 0 86 12">
        <text x="0" y="12" fill="#6A040F">
          Grenoble
        </text>
      </svg>
    </DivLocation>
  );
}
