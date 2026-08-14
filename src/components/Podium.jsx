const SLOTS = [
  { place: '2ND', key: 'second', tone: 'silver' },
  { place: '1ST', key: 'first', tone: 'gold' },
  { place: '3RD', key: 'third', tone: 'bronze' },
];

export default function Podium({ podium }) {
  return (
    <div className="podium">
      {SLOTS.map((slot) => (
        <div key={slot.key} className={`podium__slot podium__slot--${slot.tone}`}>
          <span className="podium__place mono">{slot.place}</span>
          <div className="podium__plate">
            {podium.declared ? (
              <span className="podium__team">{podium[slot.key]}</span>
            ) : (
              <span className="podium__pending mono">TO BE ANNOUNCED</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
