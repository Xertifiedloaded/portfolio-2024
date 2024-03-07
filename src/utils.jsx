import styled from "styled-components";
import home from "./assets/home.svg";
import cv from "./assets/cv.svg";
import tweet from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";
import sms from "./assets/email.svg";
import github from "./assets/github.svg";
import abgAdmin from './assets/abg-admin.png'
import pdf from './assets/Updated CV 2024.pdf'
export const projectsData = [
  {
    id:1,
    github:"",
    url:"",
    project: "Department of Animal Breeding And Genetics",
    image: abgAdmin,
  },
  {
    id:2,
    github:"",
    url:"",
    project: "Department of Animal Breeding And Genetics",
    image: abgAdmin,
  },
  {
    id:3,
    github:"",
    url:"",
    project: "Department of Animal Breeding And Genetics",
    image: abgAdmin,
  },
  {
    id:4,
    github:"",
    url:"",
    project: "Department of Animal Breeding And Genetics",
    image: abgAdmin,
  },
  {
    id:5,
    github:"",
    url:"",
    project: "Department of Animal Breeding And Genetics",
    image: abgAdmin,
  },
  {
    id:6,
    github:"",
    url:"",
    project: "Department of Animal Breeding And Genetics",
    image: abgAdmin,
  },
  {
    id:7,
    github:"",
    url:"",
    project: "Department of Animal Breeding And Genetics",
    image: abgAdmin,
  },
  {
    id:8,
    github:"",
    url:"",
    project: "Department of Animal Breeding And Genetics",
    image: abgAdmin,
  },
  {
    id:9,
    github:"",
    url:"",
    project: "Department of Animal Breeding And Genetics",
    image: abgAdmin,
  },
];

export const data = [
  {
    id: 1,
    name: "Home",
    path: "/",
    image: home,
  },
  {
    id: 2,
    name: "Projects",
    path: "/projects",
    image: home,
  },
  {
    id: 3,
    name: "Github",
    path: "https://github.com/Xertifiedloaded",
    image: github,
  },
  {
    id: 4,
    name: "Linkedin",
    path: "https://www.linkedin.com/in/makinde-olaitan-43177a290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    image: linkedin,
  },
  {
    id: 5,
    name: "Twitter",
    path: "https://x.com/xertifiedloaded?s=21&t=4afhWqzJQffsZTnO1q85ig",
    image: tweet,
  },
  {
    id: 6,
    name: "Mail",
    path: "/mail",
    image: sms,
  },
  {
    id: 7,
    name: "CV",
    path: "/cv",
    image: cv,
  },
];

export const ChartBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  border-radius: 10px;
  margin-bottom: 25px;
`;
export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Default layout for desktop */
  gap: 20px;
  justify-content: space-between;
  border-radius: 10px;
  margin-bottom: 25px;

  @media (max-width: 767px) {
    grid-template-columns: auto; 
  }
`;
export const BoxInfo = styled.div`
  border-radius: 10px;
  display: flex;
  gap: 20px;
  height: 200px;
  justify-content:center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.div`

`;

export const Para = styled.div`
  font-size: 18px;
  color: rgba(18, 18, 18, 1);
  font-weight: 500;
`;

export const Amount = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
export const Button = styled.button`
 background:blue;
 width:150px;
 color:white;
 border:none;
 border-radius:10px;
 display: flex;
 padding:15px 0px;
 justify-content:center;
 align-items: center;
`;
export const Description = styled.div`
color:black;
font-size:12px;
margin-top:10px;
`;
export const BtnDiv = styled.div`
display: flex;
 justify-content:space-between;
 align-items: center;
 margin-top:20px;
 .-tools{

  color:black;
 }
`;

export const ImgContainer = styled.div`
  img {
    width: 52px;
    height: 52px;
  }
  
`;
