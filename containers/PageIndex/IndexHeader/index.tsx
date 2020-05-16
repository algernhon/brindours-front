import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Header from "components/Header";

interface ImageType {
  path: string;
  alt: string;
}

export interface PropsType {
  firstImage?: ImageType;
  secondImage?: ImageType;
}

const Wrapper = styled.section`
  user-select: none;
  position: relative;
  width: 406px;
  height: 394px;
  margin: auto;
  margin-bottom: 55px;
`;

const ImageNature = styled(motion.img)`
  position: absolute;
`;

const ImageOurs = styled.img`
  position: absolute;
`;

function IndexHeader({
  firstImage = { path: "/img/logo-ours.png", alt: "Logo Brin D'ours" },
  secondImage = { path: "/img/logo-nature.png", alt: "Logo Brin D'ours" },
}: PropsType) {
  return (
    <>
      <Wrapper>
        <ImageNature src={firstImage.path} alt={firstImage.alt} />
        <ImageNature
          animate={{ rotate: 12 }}
          transition={{
            yoyo: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          style={{ originX: 0.5, originY: 0.4 }}
          src={secondImage.path}
          alt={secondImage.alt}
        />
      </Wrapper>
      <Header title="La micro-crèche aux valeurs naturellement responsables.">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget metus
        finibus, venenatis enim vitae, mollis metus. In finibus semper aliquam.
      </Header>
    </>
  );
}

export default IndexHeader;
