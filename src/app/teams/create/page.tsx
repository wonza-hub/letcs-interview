import { CreateTeamForm } from "@/components/teams/create-team-form";

export default function CreateTeamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">새 팀 만들기</h1>
      <div className="max-w-2xl">
        <CreateTeamForm />
      </div>
    </div>
  );
}
