import { css, Global } from '@emotion/react';

function GlobalStyles() {
  return <Global styles={styles} />;
}

const styles = css`
  html {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
      'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }

  button,
  input,
  textarea {
    font-family: inherit;
  }
`;

export default GlobalStyles;
