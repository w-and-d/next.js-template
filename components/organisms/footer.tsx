import styled from 'styled-components';

const CustomFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  img {
    height: 1em;
    margin-left: 0.5rem;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    text-decoration: none;
  }
`;

export const Footer = (): JSX.Element => {
  return (
    <CustomFooter>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer">
        Powered by <img src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </CustomFooter>
  );
};
