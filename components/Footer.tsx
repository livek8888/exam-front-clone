import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <Foot>
      <Container>
        <Fnb href="/">회사소개</Fnb>
        <Fnb href="/">고객센터</Fnb>
        <Fnb href="/">이용약관</Fnb>
        <Fnb href="/">개인정보처리방침</Fnb>
      </Container>
      <Copyright>
        <Company>티키타카 CO.,LTD.</Company>
        <CopyrightMessage>COPYRIGHT© 2020 ALL RIGHTS RESERVED</CopyrightMessage>
      </Copyright>
    </Foot>
  );
}

const Foot = styled.footer`
  width: 100%;
  height: 160px;
  background-color: #333;
  box-shadow: rgb(0 0 0 / 5%) 0 -3px 6px;
  padding-bottom: 75px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 30px 0 30px;
`;

const Fnb = styled(Link)`
  color: white;
  font-size: 12px;
  font-family: sans-serif;
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60px;
  margin-top: 5px;
  padding: 30px;
`;

const Company = styled.p`
  font-size: 14px;
  color: white;
  font-family: sans-serif;
`;
const CopyrightMessage = styled.p`
  font-size: 10px;
  color: #666;
  font-family: sans-serif;
`;
