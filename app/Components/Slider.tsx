'use client';
import React, { useState, useEffect } from 'react';

interface SquareData {
  text: string;
  width?: number; // relative width multiplier (1 = default, 1.5 = 50% wider)
}

interface SlidingSquaresProps {
  topRowSquares: SquareData[];
  bottomRowSquares: SquareData[];
  animationDuration?: number;
  defaultSquareWidth?: number;
  squareHeight?: number;
}

const SlidingSquares: React.FC<SlidingSquaresProps> = ({
  topRowSquares,
  bottomRowSquares,
  animationDuration = 20,
  defaultSquareWidth = 250,
  squareHeight = 200
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate responsive square width based on screen size
  const getResponsiveWidth = (squareWidthMultiplier: number = 1) => {
    let baseWidth = defaultSquareWidth;
    
    if (screenWidth <= 480) {
      // Mobile phones
      baseWidth = Math.min(screenWidth * 0.55, 200);
    } else if (screenWidth <= 768) {
      // Tablets
      baseWidth = Math.min(screenWidth * 0.4, 280);
    } else if (screenWidth <= 1024) {
      // Small laptops
      baseWidth = Math.min(screenWidth * 0.25, 300);
    } else {
      // Desktop
      baseWidth = defaultSquareWidth;
    }
    
    return baseWidth * squareWidthMultiplier;
  };

  // Calculate responsive height
  const getResponsiveHeight = () => {
    if (screenWidth <= 480) {
      return Math.max(squareHeight * 0.7, 100);
    } else if (screenWidth <= 768) {
      return Math.max(squareHeight * 0.85, 120);
    }
    return squareHeight;
  };

  // Calculate total width for each row with responsive widths
  const calculateTotalWidth = (squares: SquareData[]) => {
    return squares.reduce((total, square) => {
      const width = getResponsiveWidth(square.width || 1);
      const gap = screenWidth <= 480 ? 10 : screenWidth <= 768 ? 14 : 18;
      return total + width + gap;
    }, 0);
  };

  const topRowWidth = calculateTotalWidth(topRowSquares);
  const bottomRowWidth = calculateTotalWidth(bottomRowSquares);
  const responsiveHeight = getResponsiveHeight();
  const gap = screenWidth <= 480 ? 10 : screenWidth <= 768 ? 14 : 18;

  const containerStyle: React.CSSProperties = {
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: '0px'
  };

  const rowStyle: React.CSSProperties = {
    margin: '6px 0',
    overflow: 'visible',
    height: '100%'
  };

  const trackStyle: React.CSSProperties = {
    display: 'flex',
    width: 'fit-content',
    gap: `${gap}px`,
    willChange: 'transform'
  };

  const getAnimationStyle = (direction: 'left' | 'right', totalWidth: number): React.CSSProperties => {
    const keyframes = direction === 'left' 
      ? `
        @keyframes slideRightToLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth}px); }
        }
      `
      : `
        @keyframes slideLeftToRight {
          0% { transform: translateX(-${totalWidth}px); }
          100% { transform: translateX(0); }
        }
      `;
    
    return {
      animation: `${direction === 'left' ? 'slideRightToLeft' : 'slideLeftToRight'} ${animationDuration}s linear infinite`,
      animationPlayState: isHovered ? 'paused' : 'running'
    };
  };

  const squareStyle = (square: SquareData, index: number): React.CSSProperties => {
    const isHoveringThis = hoveredSquare === index;
    return {
      flexShrink: 0,
      background: isHoveringThis ? '#4C1D95' : '#8B5CF6', // Much darker purple when hovered
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: screenWidth <= 480 ? '15px' : '20px',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      width: `${getResponsiveWidth(square.width || 1)}px`,
      height: `${responsiveHeight}px`,
      cursor: 'pointer',
      transform: isHoveringThis ? 'scale(1.04)' : 'scale(1)', // Bigger scale on hover
      zIndex: isHoveringThis ? 10 : 1 // Bring to front when hovered
    };
  };

  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

  const textStyle: React.CSSProperties = {
    color: '#e5e7eb',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: screenWidth <= 480 ? '14px' : screenWidth <= 768 ? '16px' : '19px',
    lineHeight: 1.4,
    margin: 0,
    hyphens: 'auto',
    wordWrap: 'break-word'
  };

  return (
    <>
      <style>{`
        @keyframes slideRightToLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${topRowWidth}px); }
        }
        @keyframes slideLeftToRight {
          0% { transform: translateX(-${bottomRowWidth}px); }
          100% { transform: translateX(0); }
        }
      `}</style>
      
      <div style={containerStyle}>
        {/* Top row - slides right to left */}
        <div style={rowStyle}>
          <div 
            style={{
              ...trackStyle,
              ...getAnimationStyle('left', topRowWidth)
            }}
          >
            {[...topRowSquares, ...topRowSquares, ...topRowSquares].map((square, index) => (
              <div
                key={index}
                style={squareStyle(square, index)}
                onMouseEnter={() => {
                  setIsHovered(true);
                  setHoveredSquare(index);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setHoveredSquare(null);
                }}
              >
                <p style={textStyle}>{square.text}</p>
              </div>
            ))}   
          </div>
        </div>

        {/* Bottom row - slides left to right */}
        <div style={rowStyle}>
          <div 
            style={{
              ...trackStyle,
              ...getAnimationStyle('right', bottomRowWidth)
            }}
          >
            {[...bottomRowSquares, ...bottomRowSquares, ...bottomRowSquares].map((square, index) => (
              <div
                key={index + 1000} // Offset key to avoid conflicts
                style={squareStyle(square, index + 1000)}
                onMouseEnter={() => {
                  setIsHovered(true);
                  setHoveredSquare(index + 1000);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setHoveredSquare(null);
                }}
              >
                <p style={textStyle}>{square.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlidingSquares;