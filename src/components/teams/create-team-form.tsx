"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createTeam } from "@/lib/api/teams";
import { toast } from "sonner";

const formSchema = z.object({
  team_name: z.string().min(2, {
    message: "팀 이름은 2글자 이상이어야 합니다.",
  }),
  description: z.string().min(10, {
    message: "팀 설명은 10글자 이상이어야 합니다.",
  }),
  max_members: z.number().min(2).max(10),
});

export function CreateTeamForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      team_name: "",
      description: "",
      max_members: 6,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createTeam({
        team_name: values.team_name,
        description: values.description,
        max_members: values.max_members,
        status: "RECRUITING",
      });
      toast.success("팀이 생성되었습니다.");
      router.push("/teams");
    } catch (error) {
      toast.error("팀 생성에 실패했습니다.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="team_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>팀 이름</FormLabel>
              <FormControl>
                <Input placeholder="팀 이름을 입력하세요" {...field} />
              </FormControl>
              <FormDescription>
                팀을 대표하는 이름을 입력해주세요.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>팀 설명</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="팀에 대한 설명을 입력하세요"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                팀의 목적과 활동 방향을 설명해주세요.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="max_members"
          render={({ field }) => (
            <FormItem>
              <FormLabel>최대 인원</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormDescription>
                2명에서 10명까지 설정 가능합니다.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">팀 생성하기</Button>
      </form>
    </Form>
  );
}
