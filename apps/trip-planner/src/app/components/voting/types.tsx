export type Player = {
  id: number;
  name: string;
  status: "locked" | "voting" | "idle";
};

export type VoteOption = {
  id: string;
  title: string;
  emoji: string;
  votes: number;
  rarity: string;
  rank: "A" | "K" | "Q" | "J";
  sigil: "sun" | "bolt" | "gem" | "seed";
};
