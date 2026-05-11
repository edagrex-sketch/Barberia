import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  
  const cursorX = useSpring(0, { damping: 20, stiffness: 300 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 300 });
  const followerX = useSpring(0, { damping: 40, stiffness: 200 });
  const followerY = useSpring(0, { damping: 40, stiffness: 200 });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
      followerX.set(e.clientX - 20);
      followerY.set(e.clientY - 20);
    };

    if (isDesktop) {
      window.addEventListener('mousemove', moveCursor);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [isDesktop, cursorX, cursorY, followerX, followerY]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      <motion.div
        className="custom-cursor-follower"
        style={{
          x: followerX,
          y: followerY,
        }}
      />
    </>
  );
}
