import styled from '@emotion/styled';

const breakpoints = [576, 768, 1024, 1920];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  ${mq[0]} {
    padding-left: 20px;
    padding-right: 20px;
  }
  ${mq[1]} {
    padding-left: 20px;
    padding-right: 20px;
  }
  ${mq[2]} {
    padding-left: 16px;
    padding-right: 16px;
  }
  ${mq[3]} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
