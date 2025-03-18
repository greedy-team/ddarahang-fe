import { FooterWrapper, FooterBox, TeamLink, FooterContent } from './Footer.style';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterBox>
        <FooterContent>
          <p>
            <span>Copyright </span>ddarahang. All rights reserved
          </p>
          <p>
            <span>Contact </span>ddarahang@gmail.com
          </p>
        </FooterContent>
        <FooterContent>
          <p>
            <span>따라행 팀 소개</span>
            <TeamLink href='https://experienced-gerbera-c0e.notion.site/1b1a5ac577e9805dbea0c838504d4697'>
              팀 소개 링크
            </TeamLink>
          </p>
          <p>
            <span>버그 문의 및 데이터 요청</span>
            <TeamLink href='https://forms.gle/NbLDgHpSZwxRvT179'>구글 폼 링크</TeamLink>
          </p>
        </FooterContent>
      </FooterBox>
    </FooterWrapper>
  );
};

export default Footer;
