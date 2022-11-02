import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styled from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: block;
  background-color: white;
  max-width: 770px;
  min-width: 320px;
  margin: 0 auto;
  height: 100vh;
`;
