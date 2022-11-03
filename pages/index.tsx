import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import Link from "next/link";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faEllipsis,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Index() {
  return (
    <Container>
      <ArticleArea>
        <ArticleRepresent href="/">
          <ArticleTitle>Artists</ArticleTitle>
          <ArticleGoArrow>{`>`}</ArticleGoArrow>
        </ArticleRepresent>
        <SwipContainer
          spaceBetween={50}
          slidesPerView={10}
          onSlideChange={() => console.log("slide!")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_miracle.jpeg" />
              <Nickname>기적을만난사람</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_tikitaka.jpeg" />
              <Nickname>티키타카</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_MIMISHOP.jpeg" />
              <Nickname>MIMISHOP</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_dopis.jpeg" />
              <Nickname>dopis</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/profile_undefined.png" />
              <Nickname>1449197945-</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_1480842.jpeg" />
              <Nickname>1480842938-</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_cocochanelc.jpeg" />
              <Nickname>_cocochanelc</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_에밀링TV.jpg" />
              <Nickname>에밀링TV</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_skj_dox.jpeg" />
              <Nickname>skj_dox</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_kristlkorea9.jpeg" />
              <Nickname>kristlkorea9</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_chenny9808.jpeg" />
              <Nickname>chenny9808</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_amourfor_u.jpeg" />
              <Nickname>amourfor_u</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_토랭이.jpg" />
              <Nickname>토랭이toreng</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/profile_undefined.png" />
              <Nickname>202107181213</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_lanegee.jpeg" />
              <Nickname>lanegee</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_no1hsa.jpeg" />
              <Nickname>no1hsa</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_l_o_v_e_l_y.jpeg" />
              <Nickname>l_o_v_e_r_y_</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_zun92zun.jpeg" />
              <Nickname>zun92zun</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_LoveHeo허다솜.jpg" />
              <Nickname>LoveHeo허다솜</Nickname>
            </LinkedProfile>
          </SwiperSlide>
          <SwiperSlide>
            <LinkedProfile href="/">
              <ProfileL src="/images/user-artists/artists_ssinna_O.jpeg" />
              <Nickname>ssinna_O</Nickname>
            </LinkedProfile>
          </SwiperSlide>
        </SwipContainer>
      </ArticleArea>
      <ArticleArea>
        <ProfileArea>
          <Card>
            <LinkedProfileM href="/">
              <ProfileM src="/images/user-artists/artists_miracle.jpeg"></ProfileM>
            </LinkedProfileM>
            <NicknameLink href="/">기적을만난사람</NicknameLink>
            <Follow href="/">팔로우</Follow>
            <PostTitle>간편식</PostTitle>
          </Card>
          <FontAwesomeIcon icon={faEllipsis} color="#cccccc" />
        </ProfileArea>
        <VidioArea>
          <Link href="/">
            <Video
              src="/videos/기적을만난사람_양념꼬막장.mp4"
              muted
              autoPlay
              playsInline
            />
          </Link>
          <Product href="/">
            <ProductImage src="/product/양념꼬막장.png" />
            <ProductInfo>
              <ProductTitle>'맛있는녀석들' 양념 꼬막장 200g</ProductTitle>
              <ProductPrice>7,400원</ProductPrice>
            </ProductInfo>
          </Product>
          <VeiwMore>
            맛있는녀석들-꼬막장-인플루언서 염보림 영상리뷰
            <VeiwMoreLink href="/">더보기</VeiwMoreLink>
          </VeiwMore>
        </VidioArea>
      </ArticleArea>
      <ArticleArea>
        <SwipContainer
          spaceBetween={100}
          slidesPerView={4}
          onSlideChange={() => console.log("slide!")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_양념꼬막장.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
              <SwipProduct href="/">
                <ProductImage src="/product/양념꼬막장.png" />
                <ProductInfo>
                  <ProductTitle>'맛있는녀석들' 양념 꼬막장 200g</ProductTitle>
                  <ProductPrice>7,400원</ProductPrice>
                </ProductInfo>
              </SwipProduct>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>맛있는녀석들-꼬막장-인플루언서</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />
                14
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/MIMISHOP_양념새우장.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
              <SwipProduct href="/">
                <ProductImage src="/product/양념꼬막장.png" />
                <ProductInfo>
                  <ProductTitle>'맛있는녀석들' 양념새우장 250g</ProductTitle>
                  <ProductPrice>5,400원</ProductPrice>
                </ProductInfo>
              </SwipProduct>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>맛있는녀석들-새우장-인플루언서</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_MIMISHOP.jpeg" />
              <ProfileName>MIMISHOP</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />6
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/MIMISHOP_양념새우장2.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
              <SwipProduct href="/">
                <ProductImage src="/product/양념꼬막장.png" />
                <ProductInfo>
                  <ProductTitle>'맛있는녀석들' 양념새우장 250g</ProductTitle>
                  <ProductPrice>5,400원</ProductPrice>
                </ProductInfo>
              </SwipProduct>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>맛있는녀석들-새우장-인플루언서</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_MIMISHOP.jpeg" />
              <ProfileName>MIMISHOP</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />4
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/MIMISHOP_양념새우장3.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
              <SwipProduct href="/">
                <ProductImage src="/product/양념꼬막장.png" />
                <ProductInfo>
                  <ProductTitle>'맛있는녀석들' 양념새우장 250g</ProductTitle>
                  <ProductPrice>5,400원</ProductPrice>
                </ProductInfo>
              </SwipProduct>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>맛있는녀석들-새우장-인플루언서</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_MIMISHOP.jpeg" />
              <ProfileName>MIMISHOP</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />2
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_낭만조개탕.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
              <SwipProduct href="/">
                <ProductImage src="/product/낭만조개탕.png" />
                <ProductInfo>
                  <ProductTitle>
                    '맛있는녀석들' 낭만어시장
                    <br />
                    조개탕 730g 2팩
                  </ProductTitle>
                  <ProductPrice>30,600원</ProductPrice>
                </ProductInfo>
              </SwipProduct>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>맛있는녀석들-낭만조개탕-인플루언서</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />0
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_낭만조개탕2.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
              <SwipProduct href="/">
                <ProductImage src="/product/낭만조개탕.png" />
                <ProductInfo>
                  <ProductTitle>
                    '맛있는녀석들' 낭만어시장
                    <br />
                    조개탕 730g 2팩
                  </ProductTitle>
                  <ProductPrice>30,600원</ProductPrice>
                </ProductInfo>
              </SwipProduct>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>맛있는녀석들-낭만조개탕-인플루언서</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />1
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_허다솜.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>
                허다솜-모델이 얘기하는 개인 blahblah
              </SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />2
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_허다솜2.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>허다솜-큐티☆섹시 ☆힙 ✨패셔니스타</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />1
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_허다솜3.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>허다솜-☆피팅모델 언니가 알려주는</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />0
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_허다솜4.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>허다솜-요즘 자주입는 힙한 패션소개</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />0
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_마사지건.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
              <SwipProduct href="/">
                <ProductImage src="/product/마사지건.png" />
                <ProductInfo>
                  <ProductTitle>
                    바나나빌딩-바디셀 무선 진동 마사지건
                  </ProductTitle>
                  <ProductPrice>64,000원</ProductPrice>
                </ProductInfo>
              </SwipProduct>
            </SwipVideoArea>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />0
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_허다솜5.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>허다솜-쉬운 봄&여름 코디! 알려드림</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />0
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_허다솜6.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>허다솜-[1인 쇼핑몰 노하우] 따라하기</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />0
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_현서.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
              <SwipProduct href="/">
                <ProductImage src="/product/현서.png" />
                <ProductInfo>
                  <ProductTitle>클리오더블커버</ProductTitle>
                  <ProductPrice>29,000원</ProductPrice>
                </ProductInfo>
              </SwipProduct>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>현서</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />0
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_허다솜7.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>허다솜-163cm 피팅모델의 패션소개</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />0
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_허다솜8.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>허다솜-☆나만 입고싶은 하의패션</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />0
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_허다솜9.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>허다솜-이별토크 자기 전에 보는 영상</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />0
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_허다솜10.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>허다솜-[ENG SUB] 감동적인 스토리</SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />0
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_허다솜11.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>
                허다솜-고양이도 잠자는 영상 ㅎㅎㅎㅎㅎ
              </SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />0
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVideoArea>
              <VideoLink href="/">
                <SwipVideo
                  src="/videos/기적을만난사람_허다솜12.mp4"
                  muted
                  autoPlay
                  playsInline
                />
              </VideoLink>
            </SwipVideoArea>
            <SwipFeedLink href="/">
              <SwipFeedTitle>
                허다솜-비비드한 컬러감의 유니크&힙한
              </SwipFeedTitle>
            </SwipFeedLink>
            <SwipProfileLink href="/">
              <ProfileS src="/images/user-artists/artists_miracle.jpeg" />
              <ProfileName>기적을만난사람</ProfileName>
              <Like>
                <FontAwesomeIcon icon={faHeart} />0
              </Like>
            </SwipProfileLink>
          </FeedSwiperSlide>
        </SwipContainer>
      </ArticleArea>
      <ArticleArea>
        <ArticleRepresent href="/">
          <ArticleContainer>
            <ArticleTitle>추운 겨울 더 아름답게</ArticleTitle>
            <ArticleDesc>매서운 추위도 막을 수 없는 아름다움</ArticleDesc>
          </ArticleContainer>
          <ArticleGoArrow>{`>`}</ArticleGoArrow>
        </ArticleRepresent>
        <SwipContainer
          spaceBetween={100}
          slidesPerView={4}
          onSlideChange={() => console.log("slide!")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <FeedSwiperSlide>
            <SwipVeiwMore href="/">
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                size="3x"
                color="rgb(236, 144, 175)"
              />
              <SwipVeiwMoreText>더 보기</SwipVeiwMoreText>
            </SwipVeiwMore>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVeiwMore href="/"></SwipVeiwMore>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVeiwMore href="/"></SwipVeiwMore>
          </FeedSwiperSlide>
          <FeedSwiperSlide>
            <SwipVeiwMore href="/"></SwipVeiwMore>
          </FeedSwiperSlide>
          {/* <FeedSwiperSlide>
            <SwipVeiwMore href="/">
            </SwipVeiwMore>
          </FeedSwiperSlide> */}
        </SwipContainer>
      </ArticleArea>
      <ArticleArea>
        <div style={{ height: "220px" }}>Ad-banner</div>
      </ArticleArea>
      <ArticleArea>
        <div style={{ height: "270px" }}>Dodel-product-swiper</div>
      </ArticleArea>
      <ArticleArea>
        <div style={{ height: "270px" }}>Daily-supplies-swiper</div>
      </ArticleArea>
    </Container>
  );
}

const Container = styled.div``;

const ArticleGoArrow = styled.div``;

const ArticleTitle = styled.h2`
  margin: 20px 0 0 0;
`;

const RelativeDiv = styled.div`
  position: relative;
`;

const ArticleArea = styled(RelativeDiv)`
  padding: 10px 20px 0 20px;
`;

const Card = styled(RelativeDiv)`
  display: grid;
  grid-template-columns: 40px 80px 45px;
  grid-template-rows: repeat(2, 23px);
  align-items: center;
  justify-content: center;
  width: 200px;
`;

const ProfileArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 10px 0;
`;

const VidioArea = styled.div`
  position: relative;
  width: 100%;
  height: 440px;
`;

const VeiwMore = styled.div`
  color: #222;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 6px;
  line-height: 1.4;
  font-family: sans-serif;
`;

const ProductInfo = styled.div``;

const ArticleContainer = styled.div``;

const ArticleDesc = styled.p`
  margin: 0px;
  font-size: 12px;
  color: #999999;
  font-family: sans-serif;
`;

const VeiwMoreLink = styled(Link)`
  font-family: sans-serif;
  color: #999;
`;

const ArticleRepresent = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkedProfile = styled(Link)`
  display: flex;
  justify-content: center;
  height: 90px;
  width: 75px;
  position: relative;
`;

const ProductTemplate = styled(Link)`
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  height: 68px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  padding: 12px;
  border-radius: 20px;
`;

const Product = styled(ProductTemplate)`
  bottom: 40px;
  width: 100%;
`;

const SwipProduct = styled(ProductTemplate)`
  bottom: 0px;
  width: 192px;
`;

const LinkComp = styled(Link)`
  padding-top: 10px;
  font-size: 12px;
`;

const NicknameLink = styled(LinkComp)`
  width: 100%;
  font-family: sans-serif;
  font-weight: bold;
  grid-columns-start: 2;
  grid-columns-end: 4;
`;

const Follow = styled(LinkComp)`
  color: #0095f6 !important;
  cursor: pointer;
`;

const LinkedProfileM = styled(Link)`
  grid-row-start: 1;
  grid-row-end: 3;
`;

const SwipContainer = styled(Swiper)`
  display: block;
  object-fit: cover;
  width: 100%;
  margin: 15px 0 15px 0;
`;

const ProfileL = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 65px;
`;

const ProfileM = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 35px;
`;

const ProfileS = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 20px;
`;

const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

const Nickname = styled.p`
  position: absolute;
  bottom: -10px;
  width: 100%;
  font-size: 10px;
  text-align: center;
  font-family: sans-serif;
`;

const PostTitle = styled.p`
  padding-bottom: 10px;
  font-size: 11px;
  grid-row-start: 2;
  grid-row-end: 3;
  color: #cccccc;
  font-family: sans-serif;
`;

const ProductTitle = styled.p`
  font-size: 10px;
  color: #fff;
  margin: 12px 0 0 8px;
  font-family: sans-serif;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 0 0 6px 8px;
`;

const SwipFeedTitle = styled.p`
  width: 181px;
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
`;

const SwipFeedLink = styled(Link)``;

const VideoTemplate = styled.video`
  border-radius: 20px;
`;

const Video = styled(VideoTemplate)`
  object-fit: cover;
  width: 100%;
  max-width: 730px;
  height: 400px;
`;

const SwipVideoArea = styled.div`
  position: relative;
  margin: 0;
  display: block;
  width: 192px;
  height: 260px;
`;

const SwipVideo = styled(VideoTemplate)`
  object-fit: none;
  width: 192px;
  height: 260px;
`;
const FeedSwiperSlide = styled(SwiperSlide)`
  width: 110px;
  min-width: 110px;
  padding-right: 10px;
`;

const ProfileName = styled.p`
  margin-left: 5px;
  width: 80px;
  font-size: 12px;
  line-height: 20px;
  color: #333;
`;

const Like = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35px;
  font-size: 10px;
  background: #f3f4f8;
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  border-radius: 10px;
  padding: 4px 6px;
  line-height: 0;
`;
const SwipProfileLink = styled(Link)`
  width: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 10px 0;
`;
const VideoLink = styled(Link)``;

const SwipVeiwMore = styled(Link)`
  width: 160px;
  height: 215px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SwipVeiwMoreText = styled.p`
  text-align: center;
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
`;
