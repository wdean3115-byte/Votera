import type { Player, VoteOption } from "./types";

export const CURRENT_USER = "Tushi";

export const initialPlayers: Player[] = [
  { id: 1, name: "Agi", status: "locked" },
  { id: 2, name: "Namu", status: "locked" },
  { id: 3, name: "Tushi", status: "voting" },
  { id: 4, name: "Zaya", status: "locked" },
  { id: 5, name: "Temu", status: "idle" },
  { id: 6, name: "Anu", status: "locked" },
  { id: 7, name: "Bataa", status: "voting" },
  { id: 8, name: "Saraa", status: "locked" },
  { id: 9, name: "Mugi", status: "idle" },
  { id: 10, name: "Ebo", status: "locked" },
];

export const initialOptions: VoteOption[] = [
  { id: "alpha", title: "Option Alpha", emoji: "SUN", votes: 4, rarity: "Epic", rank: "Q", sigil: "sun" },
  { id: "beta", title: "Option Beta", emoji: "BOLT", votes: 3, rarity: "Rare", rank: "K", sigil: "bolt" },
  { id: "gamma", title: "Option Gamma", emoji: "GEM", votes: 2, rarity: "Legendary", rank: "A", sigil: "gem" },
  { id: "delta", title: "Option Delta", emoji: "SEED", votes: 1, rarity: "Common", rank: "J", sigil: "seed" },
];

export const SIGILS = ["sun", "bolt", "gem", "seed"] as const;
export const RANKS = ["A", "K", "Q", "J"] as const;
