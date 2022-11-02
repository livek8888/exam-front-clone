import { Swiper, SwiperSlide } from "swiper/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-solid-svg-icons";
// import miracle from "../public/images/user-atrists/artists_miracle.jpeg";
import styled from "styled-components";
import Link from "next/link";
import "swiper/css";

export default function Index() {
  return (
    <Container>
      <ArticleArea>
        <ArticleRepresent>
          <ArticleTitle>Artists</ArticleTitle>
          <ArticleLink>{`>`}</ArticleLink>
        </ArticleRepresent>
        <SwipContainer
          spaceBetween={50}
          slidesPerView={10}
          onSlideChange={() => console.log("slide!")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_miracle.jpeg" />
              <Nickname>기적을만난사람</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_tikitaka.jpeg" />
              <Nickname>티키타카</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_MIMISHOP.jpeg" />
              <Nickname>MIMISHOP</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_dopis.jpeg" />
              <Nickname>dopis</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/profile_undefined.png" />
              <Nickname>1449197945-</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_1480842.jpeg" />
              <Nickname>1480842938-</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_cocochanelc.jpeg" />
              <Nickname>_cocochanelc</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_에밀링TV.jpg" />
              <Nickname>에밀링TV</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_skj_dox.jpeg" />
              <Nickname>skj_dox</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_kristlkorea9.jpeg" />
              <Nickname>kristlkorea9</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_chenny9808.jpeg" />
              <Nickname>chenny9808</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_amourfor_u.jpeg" />
              <Nickname>amourfor_u</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_토랭이.jpg" />
              <Nickname>토랭이toreng</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/profile_undefined.png" />
              <Nickname>202107181213</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_lanegee.jpeg" />
              <Nickname>lanegee</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_no1hsa.jpeg" />
              <Nickname>no1hsa</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_l_o_v_e_l_y.jpeg" />
              <Nickname>l_o_v_e_r_y_</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_zun92zun.jpeg" />
              <Nickname>zun92zun</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_LoveHeo허다솜.jpg" />
              <Nickname>LoveHeo허다솜</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <Profile src="/images/user-artists/artists_ssinna_O.jpeg" />
              <Nickname>ssinna_O</Nickname>
            </LinkedProfile>
          </SwiperSlide>
        </SwipContainer>
      </ArticleArea>
      <div>Feed-best</div>
      <div>Feed-swiper</div>
      <div>Winter-beauty-swiper</div>
      <div>Ad-banner</div>
      <div>Dodel-product-swiper</div>
      <div>Daily-supplies-swiper</div>
    </Container>
  );
}

const Container = styled.div``;

const ArticleArea = styled.div`
  padding: 10px;
`;

const ArticleTitle = styled.h2`
  margin: 10px;
`;

const SwipContainer = styled(Swiper)`
  display: block;
  width: 770px;
  margin-top: 15px;
`;

const ArticleLink = styled.div``;

const Profile = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 60px;
`;

const LinkedProfile = styled(Link)`
  display: flex;
  justify-content: center;
  height: 90px;
  width: 75px;
  position: relative;
  text-decoration: none;
`;

const Nickname = styled.p`
  position: absolute;
  bottom: -10px;
  width: 100%;
  color: black;
  font-size: 10px;
  text-align: center;
  font-family: sans-serif;
`;

const ArticleRepresent = styled.div`
  display: flex;
  justify-content: space-between;
`;
