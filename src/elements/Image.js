import React from "react";
import styled from "styled-components"; // 1)

const Image = props => {                // 2)

  const { shape, src, size } = props;   // 4)

  const styles = {                      // 5)
    src: src,
    size: size,
  };

  if (shape === "circle") {             // 8) shape 에 따라서 스타일을 다르게 적용해서 return 시켜준다!!!!!
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "rectangle") {          // 8) shape 에 따라서 스타일을 다르게 적용해서 return 시켜준다!!!!!
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  // 3)
  shape: "circle",
  src: "https://i.pinimg.com/564x/25/e4/26/25e426c902678dcce496bb021fdee62c.jpg",
  size: 36,
};

const AspectOutter = styled.div`   // 6) "AspectOutter와 AspectInner은 반응형 이미지를 맞추기 위해 div를 두겹으로 배치하여 속성을 따로 주었다."
  width: 100%;                       /*  "Aspect은 콘텐츠의 큰 이미지가 들어 가는 영역을 미리 css 스타일을 잡아주는거다."  */
  min-width: 250px;
`;
const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${props => props.src}");
  background-size: cover;
`;
const ImageCircle = styled.div`   // 7) 이 ImageCircle은 user의 이미지가 들어가는 스타일을 미리 잡아주는거다.
  --size: ${props => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${props => props.src}");
  background-size: cover;
  margin: 4px;
`;

export default Image;
