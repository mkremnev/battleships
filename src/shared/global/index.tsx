import React from 'react';
import { css, Global } from '@emotion/react';

export default function StylesApp() {
  return (
    <Global
      styles={css`
        :root {
          --base-font-size: 16;
          --base-font-weight-regular: 400;
          --base-font-weight-bold: 700;

          //colors
          --blue: #61c6ff;
          --clear: #9d9d9d;
          --red: #ff0055;
          --gray: #353839;
          --gray-ship: #d1d2de;

          // breakpoints
          --break_lg: 1360px;
          --break_md: 1023px;
          --break_sm: 767px;
          --break_xs: 575px;
        }
        @font-face {
          font-family: 'FuturaStdBook';
          src: url('../assets/fonts/FuturaStdBook.woff2') format('woff2');
          font-style: normal;
          font-weight: var(--base-font-weight-regular);
          font-display: swap;
        }

        @font-face {
          font-family: 'FuturaBold';
          src: url('../assets/fonts/FuturaBold.woff2') format('woff2');
          font-style: normal;
          font-weight: var(--base-font-weight-bold);
          font-display: swap;
        }

        * {
          font-family: FuturaStdBook, sans-serif;
        }

        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        font,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td {
          margin: 0;
          padding: 0;
          border: 0;
          outline: 0;
          vertical-align: baseline;
          background: transparent;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote::before,
        blockquote::after,
        q::before,
        q::after {
          content: '';
          content: none;
        }
        :focus {
          outline: 0;
        }
        ins {
          text-decoration: none;
        }
        del {
          text-decoration: line-through;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        button {
          border: none;
          outline: none;
          box-shadow: none;
          padding: 0;
          background-color: transparent;
        }

        img {
          border-style: none;
        }
        input {
          &:disabled {
            opacity: 1;
          }
        }
      `}
    />
  );
}
