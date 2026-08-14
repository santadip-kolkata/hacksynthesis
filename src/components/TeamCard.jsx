export default function TeamCard({ team }) {
  return (
    <div className="team-card" style={{ gridArea: `t${team.rank}` }}>
      <div className="team-card__head">
        <span className="team-card__rank mono">{String(team.rank).padStart(2, '0')}</span>
        <span className="team-card__id mono">{team.id}</span>
      </div>
      <h3 className="team-card__name">{team.name}</h3>
      <span className="team-card__track mono">{team.track}</span>
      <ul className="team-card__members">
        {team.members.map((member, idx) => (
          <li key={idx}>
            <span className="mono">M{idx + 1}</span>
            {member}
          </li>
        ))}
      </ul>
    </div>
  );
}
