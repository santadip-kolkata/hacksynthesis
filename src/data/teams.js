// Placeholder finalist data — replace with real team names/members later.
// rank = position in the finalist grid (1 through 15, out of 800 teams that entered).

export const teams = Array.from({ length: 15 }, (_, i) => {
  const n = i + 1;
  return {
    rank: n,
    id: `T${String(n).padStart(2, '0')}`,
    name: `Team ${n}`,
    track: 'Track TBD',
    members: [`Member 1`, `Member 2`, `Member 3`],
  };
});

// Podium is intentionally empty until results are declared post-hackathon.
export const podium = {
  declared: false,
  first: null,
  second: null,
  third: null,
};
