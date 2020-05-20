import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export interface PropsType {
  className?: string;
  children: React.ReactNode;
  image: string;
  position?: "center" | "left" | "right";
}

type FlexboxType = Required<Pick<PropsType, "position">>;

const Wrapper = styled.div`
  /* display: inline-block; */
  margin-bottom: 60px;
`;

const Flexbox = styled.div<FlexboxType>`
  ${({ position }) => positions[position]};
  display: flex;
  flex-direction: column;
`;

const Title = styled(motion.h2)`
  display: inline-block;
`;

const IconCircle = styled(motion.div)`
  height: 60px;
  width: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 55px;
    user-select: none;
  }
`;

const positions = {
  center: css`
    align-items: center;
  `,
  left: css`
    align-items: flex-start;
  `,
  right: css`
    align-items: flex-end;
  `,
};

function SectionTitle({
  className,
  children,
  image,
  position = "center",
}: PropsType) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Wrapper className={className}>
      <Flexbox position={position}>
        <IconCircle
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            hidden: { opacity: 0, y: 30 },
          }}
        >
          <img src={image} />
        </IconCircle>
        <Title
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            hidden: { opacity: 0, y: 50 },
          }}
        >
          {children}
        </Title>
      </Flexbox>
    </Wrapper>
  );
}

export default SectionTitle;
