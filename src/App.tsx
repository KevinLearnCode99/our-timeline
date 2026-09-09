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
      <section className="letter-section" aria-labelledby="page-title">
        <div className="letter-wrap">
          <Sprig className="sprig sprig-left" />
          <Sprig className="sprig sprig-right" />
          <article className="letter" id="letter" lang="vi" aria-label="Thư gửi em">
            <h2 id="page-title">Thư gửi em,</h2>
            <div className="letter-body">
              <p>Không vòng vo, cũng không sến súa gì đâu. Anh chỉ muốn nói một điều đơn giản thôi: <strong>Anh thương em.</strong></p>
              <p>Anh cũng chẳng biết từ lúc nào em đã trở thành một phần trong những suy nghĩ của anh. Mình chỉ mới bắt đầu thôi, mà đã có khá nhiều thứ khiến anh phải suy nghĩ về mối quan hệ này. Nhưng nghĩ tới nghĩ lui, anh vẫn cứ mặt dày mà bước tiếp. Chắc vì lý do để anh ở bên em luôn lớn hơn tất cả những lý do khiến anh nghĩ mình nên bỏ cuộc.</p>
              <p>Em cũng đừng nói mình tầm thường nữa. Trong mắt anh, em giỏi hơn em nghĩ nhiều. Em tự lập, không thích dựa dẫm vào ai, lại còn hiểu chuyện đến mức đôi khi làm anh bất ngờ. Nhưng mà ở bên anh thì em không cần lúc nào cũng phải mạnh mẽ như vậy đâu. Có người yêu rồi thì tập cách dựa vào người yêu một chút đi chứ.</p>
              <p>Anh chỉ muốn em biết rằng anh đang cố gắng, theo cách của anh, để làm em vui và để em cảm thấy hạnh phúc khi ở bên anh.</p>
              <p>Và sau này, nếu có lúc anh lỡ làm điều gì ngu ngốc hay khiến em buồn, thì anh mong em vẫn nhớ tới những khoảnh khắc như thế này. Không phải để em phải bỏ qua mọi lỗi lầm của anh, mà là để em nhớ rằng anh thật sự trân trọng em và mối quan hệ này.</p>
            </div>
            <div className="signature"><p>Anh thương em.</p></div>
            <div className="letter-bottom" aria-hidden="true"><span /><span>♡</span><span /></div>
          </article>
          <div className="seal" aria-hidden="true">♡</div>
        </div>
      </section>
    </main>
  )
}

export default App
