import { Team } from "@/types";
import supabase from "../supabase/client";

// 서버 컴포넌트용 API
export async function getTeams(): Promise<Team[]> {
  try {
    const { data, error } = await supabase
      .from("teams")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Failed to fetch teams:", error);
    throw error;
  }
}

// 클라이언트 컴포넌트용 API
export type CreateTeamData = {
  team_name: string;
  description: string;
  max_members: number;
  status: "RECRUITING" | "FULL" | "CLOSED";
};

export async function createTeam(teamData: CreateTeamData) {
  try {
    const { data, error } = await supabase
      .from("teams")
      .insert(teamData)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Failed to create team:", error);
    throw error;
  }
}
