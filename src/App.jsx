import './App.css'
import { useState, useEffect } from 'react'
import profileImg from './assets/profile.jpg'
import { skills, experience, contact, certificate, content, hobbies, education } from './constants'

export default function App() {
  const [visible, setVisible] = useState(false)
  const [lang, setLang] = useState('th')

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

      <div style={{
        maxWidth: 820,
        margin: '0 auto',
        padding: '32px 16px'
      }}>

        {/* Hero */}
        <div className={`hero-bg fade-in ${visible ? 'show' : ''}`}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div className="hero-name">{content[lang].name}</div>
              <div className="hero-role">{content[lang].role}</div>
              <div className="hero-summary">{content[lang].summary}</div>

              {/* Language Toggle */}
              <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
                <button
                  onClick={() => setLang('th')}
                  style={{
                    padding: '4px 14px',
                    borderRadius: 20,
                    border: '1px solid #f0c9b0',
                    background: lang === 'th' ? '#b85c38' : 'transparent',
                    color: lang === 'th' ? '#fff' : '#f0c9b0',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    transition: 'all 0.2s',
                  }}
                >
                  🇹🇭 TH
                </button>
                <button
                  onClick={() => setLang('en')}
                  style={{
                    padding: '4px 14px',
                    borderRadius: 20,
                    border: '1px solid #f0c9b0',
                    background: lang === 'en' ? '#b85c38' : 'transparent',
                    color: lang === 'en' ? '#fff' : '#f0c9b0',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    transition: 'all 0.2s',
                  }}
                >
                  🇬🇧 EN
                </button>
              </div>

            </div>
            <img
              src={profileImg}
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
            <div className="contact-row"><span className="contact-icon">📞</span> {contact[lang].phone}</div>
            <div className="contact-row"><span className="contact-icon">✉️</span> <a href="mailto:karun.amsuwan46@gmail.com">{contact[lang].email}</a></div>
            <div className="contact-row" style={{ alignItems: 'flex-start' }}>
              <span className="contact-icon">📍</span>
              <span>{contact[lang].address}</span>
            </div>
          </div>

          {/* Education */}
          <div className="section-card">
            <div className="section-title">Education</div>
            <ul className="styled">
              {education[lang].map(e => <li key={e}>{e}</li>)}
            </ul>
          </div>
        </div>

        <div className={`grid-2 fade-in ${visible ? 'show' : ''}`}>
          {/* Skills */}
          <div className="section-card">
            <div className="section-title">Skill</div>
            <ul className="styled">
              {skills[lang].map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>

          {/* Certs + Hobbies */}
          <div>
            <div className="section-card" style={{ marginBottom: 20 }}>
              <div className="section-title">Certificate</div>
              <a href="https://drive.google.com/drive/u/0/folders/1rlAq-0hoRRzCCobfE1I2Oqr2Q2nx448x" target="_blank" rel="noreferrer">🔗 GoogleDrive</a>
              <ul className="styled" style={{ marginTop: 10 }}>
                {certificate[lang].map(c => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div className="section-card">
              <div className="section-title">Hobbies</div>
              <div>
                {hobbies[lang].map(h => <span key={h} className="tag">{h}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className={`section-card fade-in ${visible ? 'show' : ''}`}>
          <div className="section-title">Experience</div>

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

          <div style={{ height: 1, backgroundColor: '#ccc', marginBottom: 24 }}></div>

          <div style={{ marginBottom: 24 }}>
            <div className="exp-title">Terminal Officer | 2020 - 2021</div>
            <div className="exp-role">Android Developer</div>

            <div style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบเช็คอินเข้าออกงาน</div>
              <div className="exp-desc">ทางบริษัทจะพัฒนาระบบเกาะติดกระแสต่างๆ ที่ผู้ใช้งานสนใจ เพื่อสร้างผลิตภัณฑ์ที่ตอบโจทย์ความต้องการของตลาดในปัจจุบัน
                พร้อมทั้งปรับปรุงและพัฒนาอย่างต่อเนื่องให้ทันต่อแนวโน้มที่เปลี่ยนแปลงอย่างรวดเร็ว</div>
              <div style={{ marginTop: 8 }}>
                {['Android Studio', 'Java', 'PHP REST API'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>

          <div style={{ height: 1, backgroundColor: '#ccc', marginBottom: 24 }}></div>

          <div style={{ marginBottom: 24 }}>
            <div className="exp-title">Queue Q (Thailand) co.,ltd | 2019 - 2020</div>
            <div className="exp-role">Android Developer</div>

            <div style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบเช็คอินเข้าออกงาน</div>
              <div className="exp-desc">ดูแลและพัฒนาระบบจัดการคิวผู้ใช้งานสามารถจองคิวในระยะของร้านที่กำหนด ไม่จำเป็นต้องไปรอเอาบัตรคิวที่ร้าน แล้วไม่ต้องต่อแถวเพื่อรอให้ถึงคิว ระบบจะแจ้งเตือนเมื่อใกล้ถึงคิวของผู้ใช้งาน <a href="#" style={{ fontSize: '0.88rem' }}>PlayStore</a></div>
              <div style={{ marginTop: 8 }}>
                {['Android Studio', 'Java', 'Kotlin', 'Android Box', 'Printer Bixolon', 'Scanner QRCode&Barcode'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>

          <div style={{ height: 1, backgroundColor: '#ccc', marginBottom: 24 }}></div>

          <div style={{ marginBottom: 24 }}>
            <div className="exp-title">Tecmove Co.,Ltd. | 2018</div>
            <div className="exp-role">Web Developer</div>

            <div style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบเช็คอินเข้าออกงาน</div>
              <div className="exp-desc">บริษัทดูแลและพัฒนาเกี่ยวกับการศึกษา เช่น การทำข้อสอบออนไลน์, ดูแลข้อมูลภายในโรงเรียน และ การจัดการเรียนการสอนของครู
                เทคมูฟเป็รสถานที่ฝึกงาน ได้รับมอบหมายให้พัฒนาเว็บไซต์เพื่อจัดเก็บข้อมูล ISO 29110 ของบริษัท</div>
              <div style={{ marginTop: 8 }}>
                {['VS Code', 'PHP Laravel'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}