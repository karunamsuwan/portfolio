import { useState, useEffect } from 'react'

const skills = [
  'ออกแบบ UXUI',
  'ออกแบบ Diagram',
  'ออกแบบ Database',
  'ออกแบบ Component เพื่อให้สะดวกในการ Coding',
  'ทำงานร่วมกับผู้อื่นได้เป็นอย่างดี',
  'มีทักษะการทำงานเป็นทีม',
  'ติดต่อและแก้ไขปัญหาด้าน Mobile Application กับทาง Google และ Apple',
]

const certs = [
  'พัฒนาบุคคลิกภาพ รุ่น 17',
  'Bridge Builder 2024 (ครูเจาะ)',
  'หัวหน้างานชั้นเยี่ยม รุ่น 65',
  'การวิเคราะห์ข้อมูล',
  'ความปลอดภัยทางไซเบอร์',
  'รู้จักและปัญญาประดิษฐ์',
  'รู้จักการวิเคราะห์ข้อมูลและวิทยาการข้อมูล',
  'อื่นๆ',
]

const hobbies = ['เรียนรู้ Technologies ใหม่เพิ่มเติม', 'พิมพ์สัมผัส', 'เล่น Piano', 'เล่น หมากรุกไทย และ หมากรุกสากล']

export default function App() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f0eb',
      fontFamily: "'Sarabun', 'Noto Sans Thai', sans-serif",
      color: '#1a1a1a',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;700&family=Playfair+Display:wght@700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root {
          margin: 0;
          padding: 0;
          width: 100%;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-in.show {
          opacity: 1;
          transform: none;
        }
        .fade-in:nth-child(2) { transition-delay: 0.1s; }
        .fade-in:nth-child(3) { transition-delay: 0.2s; }
        .fade-in:nth-child(4) { transition-delay: 0.3s; }
        .fade-in:nth-child(5) { transition-delay: 0.4s; }

        .section-card {
          background: #fff;
          border-radius: 16px;
          padding: 28px 32px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          margin-bottom: 20px;
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #b85c38;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 2px;
          border-left: 3px solid #b85c38;
          padding-left: 10px;
        }
        .tag {
          display: inline-block;
          background: #fdf0ea;
          color: #b85c38;
          border: 1px solid #f0c9b0;
          border-radius: 20px;
          padding: 4px 14px;
          font-size: 0.82rem;
          margin: 4px 4px 4px 0;
          font-weight: 600;
        }
        .exp-title {
          font-weight: 700;
          font-size: 1rem;
          color: #1a1a1a;
        }
        .exp-role {
          font-size: 0.88rem;
          color: #b85c38;
          font-weight: 600;
          margin: 2px 0 8px;
        }
        .exp-desc {
          font-size: 0.88rem;
          color: #555;
          line-height: 1.7;
        }
        .contact-row {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-bottom: 8px;
          font-size: 0.9rem;
          color: #444;
        }
        .contact-icon {
          width: 32px;
          height: 32px;
          background: #fdf0ea;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .hero-bg {
          background: linear-gradient(135deg, #1a1a1a 60%, #b85c38 100%);
          color: #fff;
          border-radius: 20px;
          padding: 40px 36px;
          position: relative;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .hero-bg::before {
          content: '';
          position: absolute;
          top: -40px; right: -40px;
          width: 200px; height: 200px;
          background: rgba(184,92,56,0.18);
          border-radius: 50%;
        }
        .hero-name {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 4px;
        }
        .hero-role {
          font-size: 1rem;
          color: #f0c9b0;
          font-weight: 300;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }
        .hero-summary {
          font-size: 0.88rem;
          line-height: 1.8;
          color: #e0d8d4;
          max-width: 480px;
        }
        .photo-ring {
          width: 110px; height: 110px;
          border-radius: 50%;
          border: 4px solid #b85c38;
          object-fit: cover;
          box-shadow: 0 4px 24px rgba(0,0,0,0.3);
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        ul.styled { list-style: none; padding: 0; }
        ul.styled li {
          padding: 6px 0;
          font-size: 0.88rem;
          color: #444;
          border-bottom: 1px dashed #f0e8e0;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        ul.styled li::before {
          content: '›';
          color: #b85c38;
          font-size: 1.2rem;
          line-height: 1.2;
          flex-shrink: 0;
        }
        a { color: #b85c38; text-decoration: none; font-weight: 600; }
        a:hover { text-decoration: underline; }

        @media (max-width: 700px) {
          .grid-2 { grid-template-columns: 1fr; }
          .hero-name { font-size: 1.7rem; }
          .hero-bg { padding: 28px 20px; }
          .section-card { padding: 20px 18px; }
        }
      `}</style>

      <div style={{
        maxWidth: 820,
        margin: '0 auto',
        padding: '32px 16px'
      }}>

        {/* Hero */}
        <div className={`hero-bg fade-in ${visible ? 'show' : ''}`}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div className="hero-name">การณย์ ไกรกิจราษภูร์</div>
              <div className="hero-role">Software Engineer · Mobile Dev</div>
              <div className="hero-summary">
                รับผิดชอบในการติดต่อประสานงานโครงการและทำหน้าที่เป็นหัวหน้าทีมพัฒนา Mobile ดูแลและบริหารจัดการสื่อสารกับลูกค้า เพื่อตอบโจทย์ความต้องการทางธุรกิจ ออกแบบและวางโครงสร้างระบบซอฟต์แวร์ มีประสบการณ์ความเชี่ยวชาญในด้านการพัฒนาซอฟต์แวร์ 8 ปี
              </div>
            </div>
            <img
              src="https://i.imgur.com/placeholder.png"
              onError={e => { e.target.style.display = 'none' }}
              className="photo-ring"
              alt="profile"
            />
          </div>
        </div>

        <div className={`grid-2 fade-in ${visible ? 'show' : ''}`}>
          {/* Contact */}
          <div className="section-card">
            <div className="section-title">Contact</div>
            <div className="contact-row"><span className="contact-icon">📞</span> 061-4149508</div>
            <div className="contact-row"><span className="contact-icon">✉️</span> <a href="mailto:karun.amsuwan46@gmail.com">karun.amsuwan46@gmail.com</a></div>
            <div className="contact-row" style={{ alignItems: 'flex-start' }}>
              <span className="contact-icon">📍</span>
              <span>โครงการเดอะคิทท์พัส 3/9 ซอยนวมินทร์163 แขวงนวลจันทร์ เขตบึงกุ่ม จังหวัดกรุงเทพ 10230</span>
            </div>
          </div>

          {/* Education */}
          <div className="section-card">
            <div className="section-title">การศึกษา</div>
            <ul className="styled">
              <li>มัธยมศึกษาโรงเรียนไกรในวิทยาคม แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์</li>
              <li>ปริญญาตรีมหาวิทยาลัยแม่โจ้ คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์</li>
            </ul>
          </div>
        </div>

        <div className={`grid-2 fade-in ${visible ? 'show' : ''}`}>
          {/* Skills */}
          <div className="section-card">
            <div className="section-title">ความสามารถ</div>
            <ul className="styled">
              {skills.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>

          {/* Certs + Hobbies */}
          <div>
            <div className="section-card" style={{ marginBottom: 20 }}>
              <div className="section-title">Certificate</div>
              <a href="https://drive.google.com" target="_blank" rel="noreferrer">🔗 GoogleDrive</a>
              <ul className="styled" style={{ marginTop: 10 }}>
                {certs.map(c => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div className="section-card">
              <div className="section-title">งานอดิเรก</div>
              <div>
                {hobbies.map(h => <span key={h} className="tag">{h}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className={`section-card fade-in ${visible ? 'show' : ''}`}>
          <div className="section-title">ประสบการณ์การ</div>

          <div style={{ marginBottom: 24 }}>
            <div className="exp-title">GT Technologies Co.,Ltd. | 2021 – ปัจจุบัน</div>
            <div className="exp-role">Full-Stack Developer</div>

            <div style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบเช็คอินเข้าออกงาน</div>
              <div className="exp-desc">ระบบที่ช่วยให้พนักงานสามารถบันทึกเวลาเข้างานในบริเวณสถานที่ทำงาน พร้อมทั้งมีการตรวจสอบ GPS เมื่อมีการบันทึกเข้า-ออกงาน <a href="#" style={{ fontSize: '0.88rem' }}>PlayStore</a></div>
              <div style={{ marginTop: 8 }}>
                {['Figma UXUI', 'React Expo', 'JavaScript', 'VS Code', 'Eclipse', 'Java', 'Restful API'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบตรวจสอบผลการเรียน</div>
              <div className="exp-desc">ระบบที่ช่วยให้นักศึกษาสามารถตรวจสอบประวัตินักศึกษา ตารางเรียน ผลการเรียน การชำระเงิน และผลการลงทะเบียนเรียนของนักศึกษา <a href="#" style={{ fontSize: '0.88rem' }}>PlayStore</a></div>
              <div style={{ marginTop: 8 }}>
                {['Java', 'Android Studio'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}