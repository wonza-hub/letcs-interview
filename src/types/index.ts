export type User = {
  id: string;
  email: string;
  nickname: string;
  career_years: number;
  position: string;
  tech_stack: string[];
  created_at: string;
  updated_at: string;
};

export type Team = {
  team_id: string;
  team_name: string;
  description: string;
  max_members: number;
  status: "RECRUITING" | "FULL" | "CLOSED";
  created_at: string;
  updated_at: string;
};

export type Interview = {
  id: string;
  team_id: string;
  title: string;
  scheduled_at: string;
  duration_minutes: number;
  meeting_link: string;
  status: "SCHEDULED" | "COMPLETED" | "CANCELLED";
  created_at: string;
};

export type Topic = {
  id: string;
  title: string;
  description: string;
  category: string;
  created_by: string;
  created_at: string;
};

export type KnowledgeBase = {
  id: string;
  interview_id: string;
  title: string;
  content: string;
  created_by: string;
  created_at: string;
  updated_at: string;
};
