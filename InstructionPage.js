import React, { useEffect, useRef } from 'react';
import './InstructionPage.css'; // Make sure to create and import the CSS file
import SharkBG from '../assets/Shark_BG.png'
import GekkoBG from '../assets/Gekko_BG.png' 
import TigerBG from '../assets/Tiger_BG.png'
import CraneBG from '../assets/Crane_BG.png'
import DrakeBG from '../assets/Drake_BG.png'
import KitsuBG from '../assets/Kitsu_BG.png'
import PandaBG from '../assets/Panda_BG.png'
import PlumeBG from '../assets/Plume_BG.png'
import RavenBG from '../assets/Raven_BG.png'
import SookyBG from '../assets/Sooky_BG.png'

const InstructionPage = () => {
  // Using useRef to reference DOM elements
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    // Ensure the DOM elements are present
    const next = nextRef.current;
    const prev = prevRef.current;

    // Early exit if refs are not attached
    if (!next || !prev) return;

    // Event listener for the 'next' button
    const handleNextClick = () => {
      let items = document.querySelectorAll('.item');
      document.querySelector('.slide').appendChild(items[0]);
    };

    // Event listener for the 'prev' button
    const handlePrevClick = () => {
      let items = document.querySelectorAll('.item');
      document.querySelector('.slide').prepend(items[items.length - 1]);
    };

    // Attaching the event listeners
    next.addEventListener('click', handleNextClick);
    prev.addEventListener('click', handlePrevClick);

    // Cleanup function to remove event listeners
    return () => {
      next.removeEventListener('click', handleNextClick);
      prev.removeEventListener('click', handlePrevClick);
    };
  }, []); // Empty dependency array means this effect runs once on mount


  return (
<div className='outercontainer'>
<h1>OUR PREBUILT AI </h1>
<div className="container">
  <div className="slide">
  <div className="item" style={{ backgroundImage: `url(${GekkoBG})` }}>
      <div className="content">
        <div className="name">Gekko</div>
        <div className="des">Inspired by the adaptability and efficiency symbolized by a gekko, this trading method leverages the SuperTrend indicator, which is particularly effective in trending markets. The SuperTrend indicator combines price momentum and volatility to create a dynamic line that tracks the current trend. Trades are initiated based on the position of the price relative to this line.</div>
        <button>See More</button>
      </div>
    </div>
    <div className="item" style={{ backgroundImage: `url(${TigerBG})` }}>
      <div className="content">
        <div className="name">Tiger</div>
        <div className="des">This strategy focuses on identifying sudden movements or breakouts in stock prices, akin to a tiger pouncing on its prey. It involves waiting for a stock to break out of its established range with increased volume as a confirmation signal.</div>
        <button>See More</button>
      </div>
    </div>
    <div className="item" style={{ backgroundImage: `url(${SharkBG})` }}>
      <div className="content">
        <div className="name">Shark</div>
        <div className="des">Just like a shark waits for the right moment to strike, this method involves going against market trends. It identifies overbought or oversold stocks that are likely to reverse direction, offering potential high-reward trades from market corrections.</div>
        <button>See More</button>
      </div>
    </div>
    <div className="item" style={{ backgroundImage: `url(${CraneBG})` }}>
      <div className="content">
        <div className="name">Crane</div>
        <p className="des">Reflecting the crane's elegance and patience, this complex strategy uses the Ichimoku Cloud to provide a comprehensive view of the future price momentum, support, and resistance levels, guiding long-term trading decisions.</p>
        <button>See More</button>
      </div>
    </div>
    <div className="item" style={{ backgroundImage: `url(${DrakeBG})` }}>
      <div className="content">
        <div className="name">Drake</div>
        <div className="des">This technique uses VWAP as a trading benchmark to identify optimal buy and sell points throughout the day, offering insights into both trend direction and the strength of price movements, reflective of a drake's keen observation and strength.</div>
        <button>See More</button>
      </div>
    </div>
    <div className="item" style={{ backgroundImage: `url(${KitsuBG})` }}>
      <div className="content">
        <div className="name">Kitsu</div>
        <div className="des">Inspired by the agility of a kitsune (fox), this strategy employs the RSI to identify overbought or oversold conditions in the market, aiming for quick entries and exits in swing trading.</div>
        <button>See More</button>
      </div>
    </div>
    <div className="item" style={{ backgroundImage: `url(${PandaBG})` }}>
      <div className="content">
        <div className="name">Panda</div>
        <div className="des">Named after the calm and collected panda, this method uses Bollinger Bands to identify overextended price movements where the stock is likely to revert back to its mean, suitable for a more conservative trading approach.</div>
        <button>See More</button>
      </div>
    </div>
    <div className="item" style={{ backgroundImage: `url(${PlumeBG})` }}>
      <div className="content">
        <div className="name">Plume</div>
        <div className="des">This strategy uses the MACD indicator to identify potential buy or sell signals through the convergence and divergence of moving averages, akin to the delicate and precise movements of a plume in the air.</div>
        <button>See More</button>
      </div>
    </div>
    <div className="item" style={{ backgroundImage: `url(${RavenBG})` }}>
      <div className="content">
        <div className="name">Raven</div>
        <div className="des">Symbolizing the raven's mystique and intelligence, this method utilizes Fibonacci retracement levels to identify strategic points for entering and exiting trades, based on the natural ebb and flow of stock prices.</div>
        <button>See More</button>
      </div>
    </div>
    <div className="item" style={{ backgroundImage: `url(${SookyBG})` }}>
      <div className="content">
        <div className="name">Sooty</div>
        <div className="des">This method utilizes the Heiken Ashi Smoothed indicator, which helps to filter out market noise, offering a clearer view of the trend. Suitable for catching early trends in volatile markets, similar to navigating through the "soot" of financial data.</div>
        <button>See More</button>
      </div>
    </div>
  </div>
  <div className="button-class">
        <button className="prev" ref={prevRef}><i className="fa-solid fa-arrow-left"></i></button>
        <button className="next" ref={nextRef}><i className="fa-solid fa-arrow-right"></i></button>
  </div>
</div>
</div>
  );
};

export default InstructionPage;