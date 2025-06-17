import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skillcomp({ icon, text, color }) {
  return (
    <div
      className="flex cursor-pointer items-center gap-3 border rounded-xl px-5 py-3 text-lg font-medium transition-transform duration-300 hover:scale-105 shadow-md"
      style={{
        borderColor: color,
        color: color,
        boxShadow: `0 0 10px ${color}33`, // glow suave
      }}
    >
      <FontAwesomeIcon icon={icon} style={{ color }} size="lg" />
      <span>{text}</span>
    </div>
  );
}
