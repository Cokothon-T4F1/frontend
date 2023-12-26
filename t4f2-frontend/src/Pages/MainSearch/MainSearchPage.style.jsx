import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: fix-end;
  align-items: flex-start;
  position: relative;
`;

export const PlayImg = styled.img`
  width: 100px; // Set a width for the images (adjust as needed)
  height: auto; // Maintain aspect ratio
  margin: 0 10px; // Add horizontal space between images
`;

export const ImageRow = styled.div`
  display: flex;
  //justify-content: center; // Align images in the center horizontally
  align-items: center; // Align images in the center vertically
  //margin-top: 500px;
  //margin-left: 100px;
  position: absolute;
  bottom: 80px;
  left: 260px;
`;

export const Circle = styled.div`
  width: 480px; // Circle diameter
  height: 480px; // Circle diameter
  background-color: blue; // Circle color
  border-radius: 50%; // Makes the div round
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; // Text color
  position: absolute;
  margin-top: 480px;
  margin-left: 260px;
`;

export const IsText = styled.div`
  font-weight: 900;
  margin-top: 140px;
  font-size: xx-large;
  font-size: 50px;
  margin-left: 350px;
`;

export const IsText_2 = styled.div`
  font-weight: 900;
  margin-top: 750px;
  font-size: 50px;
  margin-left: 130px;
`;

export const IsText_3 = styled.div`
  font-weight: 600;
  margin-top: 30px;
  font-size: 40px;
  margin-left: 230px;
`;

export const MusicImg = styled.img`
  width: 480px; // Circle diameter
  height: 480px; // Circle diameter
  background-color: blue; // Circle color
  border-radius: 50%; // Makes the div round
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; // Text color
  position: absolute;
  margin-top: 480px;
  margin-left: 260px;
`;
