import styled from "@emotion/styled";
import { NextPage } from "next";
import { range } from "rxjs";
import { filter, take, map, toArray } from "rxjs/operators";

const Day1: NextPage = () => {
  const handleClick = () => {
    range(1, 100)
      .pipe(
        filter((n) => n % 2 === 0),
        take(5),
        map((n) => Math.pow(n, 2)),
        toArray(),
        map((arr) => arr.join(", "))
      )
      .subscribe(console.log);
  };

  return (
    <Container>
      <div>
        <strong>기본 pipe, operator 연습</strong>
      </div>
      <ActionBox>
        <button onClick={handleClick}>Run (console)</button>
      </ActionBox>
      <ReferenceUrlBox>
        <span>Reference: https://www.youtube.com/watch?v=KDiE5qQ3bZI</span>
      </ReferenceUrlBox>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px;
`;

const ActionBox = styled.div`
  margin-top: 16px;
`;

const ReferenceUrlBox = styled.div`
  margin-top: 16px;
`;

export default Day1;
