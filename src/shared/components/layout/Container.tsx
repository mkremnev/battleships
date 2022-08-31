import styled from '@emotion/styled';

const breakpoints = [360, 576, 768, 1024, 1920];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;
  ${mq[0]} {
    padding-left: 8px;
    padding-right: 8px;
  }
  ${mq[1]} {
    padding-left: 16px;
    padding-right: 16px;
  }
  ${mq[2]} {
    padding-left: 16px;
    padding-right: 16px;
  }
  ${mq[3]} {
    padding-left: 20px;
    padding-right: 20px;
  }
  ${mq[4]} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
