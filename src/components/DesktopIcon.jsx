import './DesktopIcon.css'
function DesktopIcon({ icon, title, onClick }) {
  return <button className="desktop-icon" onClick={onClick}><span className="icon" aria-hidden="true">{icon}</span><span className="icon-title">{title}</span></button>
}
export default DesktopIcon
