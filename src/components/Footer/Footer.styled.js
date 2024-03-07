import styled from 'styled-components';
import { RxInstagramLogo } from "react-icons/rx";
import { RiFacebookLine } from "react-icons/ri";
import { LiaTelegramPlane } from "react-icons/lia";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

export const ImgLogo = styled.img`
  width: 82px;
  height: 30px;
`;

export const Container = styled.div`
display: flex;

flex-direction: column;
align-items: center;

@media screen and (min-width: 768px) {
  justify-content: space-around;
}


background-color: #001D3D;
padding-top: 60px;
padding-bottom: 60px;
`;

export const FooterText = styled.h3`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 21px;
color: #FFFFFF;
margin:0;
margin-bottom: 10px;
`;

export const FooterLink = styled.h4`
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 12px;
color: #FFFFFF;
margin:0;
margin-top: 30px;
`;

export const InstIcon = styled(RxInstagramLogo)`
width: 30px;
height: 30px;
color: #fff;
margin-right:30px;

`;

export const FaceBIcon = styled(RiFacebookLine)`
width: 28px;
height: 28px;
color: #fff;
border-radius: 10%;
border: 1px solid #fff;

`;

export const TelegramIcon = styled(LiaTelegramPlane)`
width: 30px;
height: 30px;
color: #fff;
margin-right:30px;
`;

export const PhoneIcon = styled(LiaPhoneVolumeSolid)`
width: 28px;
height: 28px;
color: #fff;
border-radius: 10%;
border: 1px solid #fff;
`;

export const WrapIcons = styled.div`
display: flex;
width:90px;
flex-wrap: wrap;

`;

export const StyledLink = styled.a`
text-decoration: none;
color: #fff;;
display: flex;
align-items: center;
margin-top: 20px;
`;

export const PhonIcon = styled(FiPhone)`
width: 20px;
height: 20px;
margin-right: 10px;
`;

export const ContactWrap = styled.div`
display: flex;
flex-direction: column;
`;

export const MailIcon = styled(CiMail)`
width: 20px;
height: 20px;
margin-right: 10px;
`;