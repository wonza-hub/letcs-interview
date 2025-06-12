import { getTeams } from "@/lib/api/teams";
import { Team } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function TeamsPage() {
  let teams: Team[] = [];
  try {
    teams = await getTeams();
  } catch (error) {
    console.error("Failed to fetch teams:", error);
    // 에러 UI를 보여줄 수 있습니다
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">인터뷰 팀</h1>
        <Link href="/teams/create">
          <Button>새 팀 만들기</Button>
        </Link>
      </div>

      {teams.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          아직 생성된 팀이 없습니다.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <Link key={team.team_id} href={`/teams/${team.team_id}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{team.team_name}</CardTitle>
                  <CardDescription>{team.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    멤버: {team.max_members}명
                  </p>
                </CardContent>
                <CardFooter>
                  <Badge
                    variant={
                      team.status === "RECRUITING"
                        ? "default"
                        : team.status === "FULL"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {team.status === "RECRUITING"
                      ? "모집중"
                      : team.status === "FULL"
                      ? "모집완료"
                      : "마감"}
                  </Badge>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
