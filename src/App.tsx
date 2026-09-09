import './App.css'

function Sprig({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 260" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M78 249C75 203 111 153 95 92M85 204C54 184 39 157 33 123M92 173C119 151 135 124 138 101M96 133C73 114 62 89 62 61M94 97C110 70 111 48 105 24" />
        <path d="M79 218C57 218 45 205 43 192C61 190 75 203 79 218ZM86 198C103 197 117 181 117 169C99 172 89 183 86 198ZM58 169C39 170 24 156 23 144C41 143 52 156 58 169ZM43 146C49 129 45 114 35 106C28 120 32 136 43 146ZM102 162C119 166 136 155 142 142C124 139 110 151 102 162ZM122 130C115 115 119 100 129 93C136 107 132 120 122 130ZM89 126C68 126 52 115 49 101C68 100 82 111 89 126ZM69 88C78 75 76 60 68 50C57 62 60 79 69 88ZM101 77C119 74 130 61 129 48C112 52 104 63 101 77ZM108 48C94 42 89 27 92 15C106 20 112 35 108 48Z" />
      </g>
    </svg>
  )
}

function App() {
  return (
    <main className="page">
      <header className="page-header">
        <a className="wordmark" href="#letter" aria-label="A little love, go to the letter"><span aria-hidden="true">♡</span> a little love</a>
        <span className="header-note">JUST FOR YOU</span>
      </header>

      <section className="letter-section" aria-labelledby="page-title">
        <div className="intro">
          <div className="eyebrow"><span /> WORDS FROM THE HEART <span /></div>
          <h1 id="page-title">Some things are better<br />said in a <em>letter.</em></h1>
          <p>A little piece of my heart, put into words.</p>
        </div>

        <div className="letter-wrap">
          <Sprig className="sprig sprig-left" />
          <Sprig className="sprig sprig-right" />
          <article className="letter" id="letter" aria-label="A letter to my love">
            <div className="letter-top"><span>A LETTER FOR YOU</span><span className="tiny-heart" aria-hidden="true">♡</span><span>WITH ALL MY HEART</span></div>
            <h2>My dearest,</h2>
            <div className="letter-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Praesent tristique magna sit amet purus gravida quis blandit turpis. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</p>
              <p>Aliquam erat volutpat. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Eget duis at tellus at urna condimentum mattis pellentesque id.</p>
            </div>
            <div className="signature"><span>Always & forever,</span><p>Yours <span aria-hidden="true">♡</span></p></div>
            <div className="letter-bottom" aria-hidden="true"><span /><span>♡</span><span /></div>
          </article>
          <div className="seal" aria-hidden="true">♡</div>
        </div>
        <footer><span className="footer-heart" aria-hidden="true">♡</span><p>A small letter. A whole lot of love.</p><span className="footer-note">SOME WORDS ARE MEANT TO BE KEPT.</span></footer>
      </section>
    </main>
  )
}

export default App
