import React, { useEffect } from "react";
import styled from "styled-components";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface PropsType {
  className?: string;
  children: React.ReactNode;
}

const Center = styled(motion.div)`
  margin: auto;
  max-width: ${({ theme }) => theme.sizes.widthDefault};
`;

function SectionCenter({ className, children }: PropsType) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Center
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        },
        hidden: { opacity: 0, y: 50 },
      }}
      className={className}
    >
      {children}
    </Center>
  );
}

export default SectionCenter;
