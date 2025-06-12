import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">개발자 인터뷰 플랫폼</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/teams">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>팀 찾기</CardTitle>
              <CardDescription>
                인터뷰 팀을 찾거나 새로운 팀을 만들어보세요.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/interviews">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>인터뷰</CardTitle>
              <CardDescription>
                예정된 인터뷰를 확인하고 참여해보세요.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/topics">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>주제 풀</CardTitle>
              <CardDescription>
                다양한 인터뷰 주제를 탐색해보세요.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/knowledge">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>지식 허브</CardTitle>
              <CardDescription>
                인터뷰에서 공유된 지식을 찾아보세요.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/profile">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>내 프로필</CardTitle>
              <CardDescription>
                프로필을 관리하고 활동 내역을 확인하세요.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}
