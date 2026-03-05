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
              <div className="exp-desc">ระบบที่ช่วยให้พนักงานสามารถบันทึกเวลาเข้างานในบริเวณสถานที่ทำงาน พร้อมทั้งมีการตรวจสอบ GPS เมื่อมีการบันทึกเข้า-ออกงาน</div>
              <a href="https://play.google.com/store/apps/details?id=nimt.ta&pcampaignid=web_share" style={{ fontSize: '0.88rem', marginRight: 8 }}>PlayStore</a>
              <div style={{ marginTop: 8 }}>
                {['Figma UXUI', 'React Expo', 'TypeScript', 'VS Code', 'Eclipse', 'Java', 'Restful API', 'MySQL'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบตรวจสอบผลการเรียน</div>
              <div className="exp-desc">ระบบที่ช่วยให้นักศึกษาสามารถตรวจสอบประวัตินักศึกษา ตารางเรียน ผลการเรียน การชำระเงิน และผลการลงทะเบียนเรียนของนักศึกษา</div>
              <a href="https://play.google.com/store/apps/details?id=com.karunamsuwan.sduapp&pcampaignid=web_share" style={{ fontSize: '0.88rem', marginRight: 8 }}>PlayStore</a>
              <a href="https://apps.apple.com/th/app/sdu-edu-4-0/id6443670209" style={{ fontSize: '0.88rem' }}>AppStore</a>
              <div style={{ marginTop: 8 }}>
                {['Java', 'Android Studio'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบทะเบียนการศึกษา</div>
              <div className="exp-desc">ระบบช่วยให้ผู้ใช้สามารถตรวจสอบประวัติครู-นักเรียน, ตารางสอน-ตารางเรียน, ผลการเรียน และ การเช็คชื่อนักเรียน</div>
              <a href="https://play.google.com/store/apps/details?id=com.gtt.opecregis&pcampaignid=web_share" style={{ fontSize: '0.88rem', marginRight: 8 }}>PlayStore</a>
              <a href="https://apps.apple.com/th/app/regis-opec/id1595552400" style={{ fontSize: '0.88rem' }}>AppStore</a>
              <div style={{ marginTop: 8 }}>
                {['Figma UXUI', 'React Expo', 'JavaScript', 'VS Code', 'Eclipse', 'Java', 'Restful API', 'SQL Server'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบจัดการห้องพัก</div>
              <div className="exp-desc">ระบบที่ช่วยให้นักศึกษาสามารถร้องขอจอง-ย้ายห้องพัก, แจ้งซ่อมอุปกรณ์ชำรุดผ่านการอัปโหลดรูปภาพ, ตรวจสอบค่าน้ำ-ค่าไฟ ระบบที่ช่วยให้ผู้ดูแลหอพักได้บันทึกแจ้งซ่อมอุปกรณ์ชำรุด และค่าน้ำ-ค่าไฟ</div>
              <a href="https://play.google.com/store/apps/details?id=gtt.sdu.dorm&pcampaignid=web_share" style={{ fontSize: '0.88rem', marginRight: 8 }}>PlayStore</a>
              <a href="https://apps.apple.com/th/app/dorm-sdu/id6444823369" style={{ fontSize: '0.88rem' }}>AppStore</a>
              <div style={{ marginTop: 8 }}>
                {['Figma UXUI', 'React Expo', 'JavaScript', 'VS Code', 'Eclipse', 'Java', 'Restful API', 'MySQL'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบจัดการการเข้างานในและนอกสถานที่</div>
              <div className="exp-desc">ระบบภายในที่ช่วยให้พนักงานสามารถบันทึกเวลาเข้างาน ในสถานที่และนอกสถานที่ทำงานได้ โดยการตรวจสอบ GPS เมื่อมีการบันทึกเข้า-ออกงาน</div>
              <div style={{ marginTop: 8 }}>
                {['Figma UXUI', 'Google Draw.io', 'React Expo', 'TypeScript', 'VS Code', 'Eclipse', 'Java', 'Restful API', 'MySQL'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบฟาร์มไข่ไก่</div>
              <div className="exp-desc">ระบบที่ช่วยให้ผู้ใช้สามารถบันทึกและตรวจสอบข้อมูล โรงไก่ ราคาไข่ การซื้อ-ขาย จำนวนไก่ จำนวนไข่ที่เก็บจากโรงไก่ ตั้งค่าการขายไข่ ประวัติฟาร์ม ประวัติลูกค้า</div>
              <a href="https://play.google.com/store/apps/details?id=com.gttcenter.efms&pcampaignid=web_share" style={{ fontSize: '0.88rem', marginRight: 8 }}>PlayStore</a>
              <div style={{ marginTop: 8 }}>
                {['Figma UXUI', 'Google Draw.io', 'React Expo', 'JavaScript', 'VS Code', 'GoLang', 'Restful API', 'MySQL'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบการบริการแอร์</div>
              <div className="exp-desc">ระบบภายในที่ช่วยให้ผู้ใช้งานสามารถแจ้งรับขอบริการ และติดตามสถานะการให้บริการล้างแอร์, ซ่อมแอร์, ติดตั้งแอร์</div>
              <div style={{ marginTop: 8 }}>
                {['Figma UXUI', 'React Expo', 'TypeScript', 'VS Code', 'Eclipse', 'Java', 'Restful API', 'MySQL'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบจัดการข้อมูลเงินเดือนและการเบิกจ่ายโรงพยาบาล</div>
              <div className="exp-desc">ระบบภายในที่ช่วยให้ผู้ใช้สามารถบันทึก ตรวจสอบ และอนุมัติ ข้อมูลเงินเดือน, การเบิกค่าเวร, ค่า OT, ค่า Project Base, ค่า Activity Base</div>
              <div style={{ marginTop: 8 }}>
                {['Figma UXUI', 'React Expo', 'TypeScript', 'VS Code', 'Eclipse', 'Java', 'Restful API', 'MySQL'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบศูนย์แจ้งเตือนโครงการ</div>
              <div className="exp-desc">ระบบภายในที่ช่วยให้ผู้ใช้ได้รับการแจ้งเตือนโครงการของบริษัท ทำการแจ้งเตือนในรูปแบบของ Mobile Application</div>
              <div style={{ marginTop: 8 }}>
                {['Figma UXUI', 'React Expo', 'TypeScript', 'VS Code', 'NodeJS', 'Express', 'Restful API', 'SQL Server'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบบริหารจัดการทรัพยากรบุคคล</div>
              <div className="exp-desc">ระบบภายในที่ช่วยให้พนักงานและฝ่ายบุคคลสามารถ จัดการข้อมูลและติดตามพนักงาน การเข้า-ออกงาน, การทำงาน, การลา, การเบิกจ่าย</div>
              <div style={{ marginTop: 8 }}>
                {['Figma UXUI', 'React Expo', 'TypeScript', 'VS Code', 'Java', 'Spring Boot', 'Restful API', 'SQL Server'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบบริหารจัดการคุณภาพและมาตรฐานการศึกษา</div>
              <div className="exp-desc">ระบบภายในที่ช่วยให้พนักงานและฝ่ายบุคคลสามารถ จัดการข้อมูลและติดตามพนักงาน การเข้า-ออกงาน, การทำงาน, การลา, การเบิกจ่าย</div>
              <a href="https://line.me/R/ti/p/@243ubkpx" style={{ fontSize: '0.88rem' }}>LineChatBot</a>
              <div style={{ marginTop: 8 }}>
                {['Canva', 'Line Bot Design', 'VS Code', 'Python', 'Webhook API', 'Google Colab'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบจำหน่ายปุ๋ย</div>
              <div className="exp-desc">ระบบภายในที่ช่วยให้พนักงานและผู้ใช้สามารถ จำหน่ายปุ๋ย, ติดต่อพนักงาน, แสดงความคิดเห็นหลังใช้ปุ๋ย</div>
              <div style={{ marginTop: 8 }}>
                {['Figma UXUI', 'Google Draw.io', 'React Expo', 'TypeScript', 'VS Code', 'Java', 'Spring Boot', 'Restful API', 'SQL Server'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบการยืนยันตัวตนเข้าชั้นเรียน</div>
              <div className="exp-desc">ระบบจะช่วนในเรื่องการยืนยันตัวตนในการเข้าเรียน โดนใช้กล้องจากมือถือส่งภาพแบบ RealTime ให้ AI ตรวจสอบความถูกต้องของใบหน้าผู้เรียน</div>
              <a href="https://play.google.com/store/apps/details?id=com.gttcenter.nfer&pcampaignid=web_share" style={{ fontSize: '0.88rem', marginRight: 8 }}>PlayStore</a>
              <div style={{ marginTop: 8 }}>
                {['Figma UXUI', 'Google Draw.io', 'React Expo', 'TypeScript', 'VS Code', 'NodeJS', 'Python', 'Restful API', 'SQL Server'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบการแจ้งเตือนโครงการ</div>
              <div className="exp-desc">ระบบจะเชื่อมกับเว็บและส่งข้อความแจ้งเตือนเข้ามือถือ เมื่อมีข้อผิดพลาด หรือมีปัญหาที่ต้องแก้ไขด่วน</div>
              <a href="https://play.google.com/store/apps/details?id=com.gttcenter.gtnotifyapp&pcampaignid=web_share" style={{ fontSize: '0.88rem', marginRight: 8 }}>PlayStore</a>
              <a href="https://apps.apple.com/th/app/notifyapp/id6744355793" style={{ fontSize: '0.88rem' }}>AppStore</a>
              <div style={{ marginTop: 8 }}>
                {['Figma UXUI', 'React Expo', 'TypeScript', 'VS Code', 'NodeJS', 'Express', 'Restful API', 'SQL Server'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, color: '#333' }}>ระบบตรวจสอบบุคลากรทางการศึกษา</div>
              <div className="exp-desc">ระบบจะแสดงข้อมูลบุคลากร เช่น โรงเรียนที่เคยสอน บุคลากรทางการศึกษา สามารถใช้ ThaiD เข้าสู่ระบบ Mobile พร้อมตรวจสอบข้อมูลตนเองได้</div>
              <a href="https://play.google.com/store/apps/details?id=com.gttcenter.vecpcard&pcampaignid=web_share" style={{ fontSize: '0.88rem' }}>PlayStore</a>
              <div style={{ marginTop: 8 }}>
                {['Figma UXUI', 'React Expo', 'TypeScript', 'VS Code', 'Java', 'Spring Boot', 'Restful API', 'SQL Server'].map(t => <span key={t} className="tag">{t}</span>)}
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
              <a href="https://play.google.com/store/apps/details?id=com.jorlek.queqcustomer&pcampaignid=web_share" style={{ fontSize: '0.88rem', marginRight: 8 }}>PlayStore</a>
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