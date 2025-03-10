import styled from 'styled-components';

// Define breakpoints for responsive design
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px'
};

export const Container = styled.div`
  display: flex;
  background-color: rgb(240, 237, 237);
  margin-top: 40px;
  padding: 40px 200px;
  font-family: Arial, sans-serif;
  
  @media (max-width: ${breakpoints.desktop}) {
    padding: 40px 100px;
  }
  
  @media (max-width: ${breakpoints.laptop}) {
    padding: 30px 60px;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 30px;
    align-items: center;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-right: 100px;
  
  @media (max-width: ${breakpoints.laptop}) {
    margin-right: 60px;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;
    margin-bottom: 40px;
    width: 100%;
    max-width: 300px;
  }
`;

export const InfoHeader = styled.h3`
  text-transform: uppercase;
  color: #9a9a9a;
  font-size: 12px;
  font-weight: normal;
  margin-bottom: 10px;
  
  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
  }
`;

export const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  
  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoItem = styled.li`
  margin-bottom: 0px;
  font-size: 14px;
  color: #333;
  
  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 10px 10px 0;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 8px;
  }
`;

export const LanguageSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  
  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 30px;
  }
`;

export const TechnologiesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 100px;
  
  @media (max-width: ${breakpoints.laptop}) {
    margin-left: 60px;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    width: 100%;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 30px solid #333;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: -8px;
    width: 16px;
    height: 20px;
    background-color: rgb(240, 237, 237);
    transform: rotate(60deg);
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid #333;
    
    &:before {
      top: 3px;
      left: -5px;
      width: 10px;
      height: 14px;
    }
  }
`;

export const LogoText = styled.div`
  font-size: 72px;
  font-weight: bold;
  line-height: 0.9;
  margin-top: 20px;
  
  @media (max-width: ${breakpoints.laptop}) {
    font-size: 60px;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 50px;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 40px;
    margin-top: 15px;
  }
`;

export const TechDescription = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  
  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 15px;
    flex-direction: column;
  }
`;

export const TechText = styled.span`
  color: #9a9a9a;
  font-size: 14px;
  margin-right: 10px;
  
  @media (max-width: ${breakpoints.mobile}) {
    margin-right: 0;
    margin-bottom: 5px;
    text-align: center;
  }
`;

export const TechDivider = styled.div`
  height: 20px;
  width: 1px;
  background-color: #ccc;
  margin: 0 10px;
  
  @media (max-width: ${breakpoints.mobile}) {
    height: 1px;
    width: 60px;
    margin: 10px 0;
  }
`;