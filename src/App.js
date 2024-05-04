import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [blockHeight, setBlockHeight] = useState(null);

  useEffect(() => {
    async function fetchBlockHeight() {
      try {
        const response = await fetch('https://mempool.space/api/blocks/tip/height');
        if (response.ok) {
          const data = await response.json();
          setBlockHeight(data);
        } else {
          throw new Error('Failed to fetch block height');
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchBlockHeight();
  }, []);



  return (
    <div className="page-container">
      <div className="title">
      <div class="grid"></div>
<div class="lines"></div>
<h1>
  <span>BITCOIN</span>
  <span>BITCOIN</span>
</h1>
<h2>wojak</h2>
      </div>
      <div className="wojak">
        <img alt="wojak" src="https://i.imgur.com/rXMBLwx.png" height="300px"/>
      </div>
      <hr />
      <div className="container">
        <div className="link-list">
            <div class="btn"><a target="_blank" rel="noreferrer" href="https://twitter.com/btcwojak">X</a></div>
            <div class="btn"><a target="_blank" rel="noreferrer" href="https://primal.net/p/npub13r80695wvq4pk0upz4vyc9808ddpeal2jdtnmn7ufj3rwnx64pvqs433s6">Nostr</a></div>
            <div class="btn"><a target="_blank" rel="noreferrer" href="https://medium.com/@btcwojak">Medium</a></div>
            <div class="btn"><a target="_blank" rel="noreferrer" href="https://fountain.fm/btcwojak">Fountain</a></div>
            <div class="btn"><a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCAPA7vXbiW3o0HOoLRHzw-w">YouTube</a></div>
        </div>
      </div>
      <hr />
      <div style={{marginBottom:"2%", opacity:".25", marginTop:"2%",wordWrap:"break-word", fontSize:"30px"}}>
      {blockHeight !== null ? (
          <p>{blockHeight}</p>
        ) : (
          <p>Loading...</p>
        )}
        </div>
    </div>
  );
}

export default App;
