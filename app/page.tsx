 "use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Link as LinkIcon, Mail, MessageSquare, Heart, Sparkles, Trash2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const heroImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  repo: string;
  live: string;
  image: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    title: "데이터 시각화 대시보드",
    description:
      "실시간 비즈니스 지표를 모니터링할 수 있는 대시보드로, 사용자별 필터와 반응형 차트를 지원합니다.",
    tags: ["Next.js", "TypeScript", "D3.js"],
    link: "https://github.com/example/data-dashboard",
    repo: "https://github.com/example/data-dashboard",
    live: "https://data-dashboard.example.com",
    image:
      "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "실시간 WebSocket 데이터 스트림 연동",
      "시맨틱 줌이 가능한 반응형 차트 레이아웃",
      "주요 지표 스냅샷을 공유하는 커스터ム 링크",
    ],
  },
  {
    title: "모바일 학습 기록 앱",
    description:
      "PWA 기반의 학습 타이머와 기록 기능을 제공하여, 다양한 디바이스에서 동일한 경험을 제공합니다.",
    tags: ["React Native", "Expo", "Supabase"],
    link: "https://github.com/example/study-tracker",
    repo: "https://github.com/example/study-tracker",
    live: "https://study-tracker.example.com",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "학습 루틴을 자동 감지하는 타이머 엔진",
      "오프라인에서도 작동하는 로컬 동기화",
      "Supabase Edge Function으로 목표 분석",
    ],
  },
  {
    title: "창업 팀 랜딩 페이지",
    description:
      "브랜딩에 집중한 정적 사이트로, 최적화된 이미지 로딩과 SEO 설정을 통해 전환율을 끌어올렸습니다.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://example-startup.com",
    repo: "https://github.com/example/startup-landing",
    live: "https://example-startup.com",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Lighthouse Performance 98점 달성",
      "고객 추천사 슬라이더와 애니메이션 인터랙션",
      "마케팅 팀이 직접 수정 가능한 CMS 연동",
    ],
  },
];

const experiences = [
  {
    period: "2024.03 - 현재",
    role: "프론트엔드 엔지니어 · 바이브 코딩",
    details: [
      "Next.js 기반 대시보드와 사내 도구 개발",
      "디자인 시스템 구축 및 컴포넌트 문서화",
    ],
  },
  {
    period: "2022.08 - 2024.02",
    role: "웹 퍼블리셔 · 프리랜서",
    details: [
      "마케팅 캠페인 페이지 20개 이상 구축",
      "접근성 가이드라인을 준수하는 마크업 제공",
    ],
  },
];

const skills = [
  "TypeScript",
  "Next.js",
  "React Query",
  "Node.js",
  "Tailwind CSS",
  "Storybook",
];

type Contact = {
  label: string;
  value: string;
  link: string;
  icon: LucideIcon;
};

const contacts: Contact[] = [
  {
    label: "이메일",
    value: "hello@vibecoding.dev",
    link: "mailto:hello@vibecoding.dev",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/vibe-coding",
    link: "https://github.com/vibe-coding",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vibe-coding",
    link: "https://linkedin.com/in/vibe-coding",
    icon: Linkedin,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 text-zinc-900 dark:from-black dark:via-zinc-950 dark:to-black dark:text-zinc-100">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-3 py-12 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <Card className="bg-white/85 dark:bg-zinc-900/75">
            <CardHeader className="space-y-5">
              <Badge className="w-fit tracking-[0.3em]" variant="secondary">
                바이브 코딩 첫 Next.js 프로젝트
              </Badge>
              <CardTitle className="text-3xl leading-snug sm:text-4xl">
                한눈에 들어오는 비주얼 포트폴리오
              </CardTitle>
              <CardDescription className="text-base leading-relaxed">
                히어로 이미지와 프로젝트 썸네일을 배치해 시선을 끌고, 단락마다 핵심적인 메시지를 전달합니다.
                데이터를 자신의 작업물로 교체해 간편하게 커스터마이징하세요.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="gap-2 shadow-rose-500/20 hover:shadow-rose-500/40"
              >
                <a href="#projects">
                  주요 프로젝트 보기
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="gap-2 border-rose-100 text-rose-600 hover:bg-rose-50 dark:border-rose-500/40 dark:hover:bg-rose-500/10"
              >
                <a href="#contact">연락 정보로 이동</a>
              </Button>
            </CardFooter>
          </Card>
          <div className="relative h-60 overflow-hidden rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-200/50 dark:border-zinc-800 dark:shadow-black/30 lg:h-auto">
            <Image
              src={heroImage}
              alt="Creative workspace with laptop and moodboard"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
              vibe coding lab
            </p>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">소개</CardTitle>
              <CardDescription>
                비즈니스 성장을 견인하는 인터페이스를 설계하고 구현합니다. 제품의 목적에 집중하며,
                데이터 기반 실험으로 사용자 경험을 개선합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
              <p>
                최근에는 복잡한 데이터를 시각적으로 이해하기 쉬운 UI로 번역하고, 디자인 시스템을
                구축해 일관된 경험을 제공하는 데 집중하고 있습니다.
              </p>
              <p>
                이 섹션을 자신의 소개, 커리어 목표, 일하는 방식 등으로 교체하면 포트폴리오의 톤앤매너를
                빠르게 설정할 수 있습니다.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">핵심 스킬</CardTitle>
              <CardDescription>최근 프로젝트에서 자신 있게 활용한 기술 스택입니다.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="border border-rose-100 bg-rose-50 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200"
                >
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="space-y-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">대표 프로젝트</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              실제 레포지토리나 배포 링크를 연결해 작업물을 소개하세요.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="flex h-full flex-col border-rose-100/40 dark:border-rose-500/20"
              >
                <div className="relative h-40 overflow-hidden rounded-3xl border border-rose-100/60 bg-zinc-100 dark:border-rose-500/30 dark:bg-zinc-900/40">
                  <Image
                    src={project.image}
                    alt={`${project.title} mockup`}
                    fill
                    sizes="(min-width: 768px) 50vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <CardHeader className="gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="mt-2 text-sm">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-semibold">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2">
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      className="gap-1 text-zinc-600 hover:bg-rose-50 hover:text-rose-600 dark:text-zinc-200 dark:hover:bg-rose-500/10"
                    >
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="gap-1 border-rose-100 text-rose-600 hover:bg-rose-50 dark:border-rose-500/40 dark:hover:bg-rose-500/10"
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <LinkIcon className="h-4 w-4" />
                        포트폴리오
                      </a>
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary" className="w-full gap-2">
                        프로젝트 자세히 보기
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>{project.description}</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="relative h-40 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
                            <Image
                              src={project.image}
                              alt={`${project.title} 상세 이미지`}
                              fill
                              sizes="(min-width: 768px) 80vw, 90vw"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold uppercase text-zinc-500">
                              주요 성과
                            </h4>
                            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                              {project.highlights.map((item) => (
                                <li key={item} className="flex gap-2">
                                  <span className="text-rose-400">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        <div className="space-y-3 rounded-2xl border border-zinc-100 p-3 dark:border-zinc-800">
                          <h4 className="text-sm font-semibold uppercase text-zinc-500">
                            연결된 링크
                          </h4>
                          <div className="flex flex-col gap-3">
                            <Button
                              asChild
                              variant="ghost"
                              className="justify-start gap-2 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10"
                            >
                              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                                GitHub 저장소
                              </a>
                            </Button>
                            <Button
                              asChild
                              variant="ghost"
                              className="justify-start gap-2 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10"
                            >
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <LinkIcon className="h-4 w-4" />
                                라이브 데모
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <DialogFooter className="gap-2">
                        <Button
                          variant="secondary"
                          asChild
                          size="sm"
                          className="shadow-rose-500/20 hover:shadow-rose-500/40"
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            실제 화면 보기
                          </a>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          className="shadow-rose-500/20 hover:shadow-rose-500/40"
                        >
                          <a href={project.repo} target="_blank" rel="noopener noreferrer">
                            코드 확인하기
                          </a>
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-3" />

        <section id="experience" className="space-y-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">경험 & 이력</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              포지션과 역할, 그리고 성과를 간결하게 정리해 신뢰감을 높입니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {experiences.map((experience) => (
              <Card key={experience.role}>
                <CardHeader className="gap-3">
                  <div className="flex flex-col gap-2">
                    <CardTitle className="text-lg">{experience.role}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {experience.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {experience.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="text-rose-400">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact">
          <Card>
            <CardHeader className="gap-3">
              <CardTitle className="text-xl">연락하기</CardTitle>
              <CardDescription>
                협업, 인터뷰, 발표 요청은 언제든지 아래 채널로 연락 주세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-5 md:grid-cols-3">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col space-y-2 rounded-2xl border border-zinc-100 p-3 transition-all duration-200 hover:-translate-y-1 hover:border-rose-200 hover:bg-white hover:shadow-lg dark:border-zinc-800 dark:hover:border-rose-500/40 dark:hover:bg-zinc-900"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 group-hover:text-rose-500">
                    <contact.icon className="h-4 w-4 text-rose-500 group-hover:text-rose-400" />
                    {contact.label}
                  </div>
                  <span className="text-base font-semibold text-rose-500 group-hover:text-rose-600 dark:group-hover:text-rose-300">
                    {contact.value}
                  </span>
                </a>
              ))}
            </CardContent>
          </Card>
        </section>

        <Separator className="my-3" />

        <ApiPracticeSection />
      </main>
    </div>
  );
}

// API 실습 섹션 컴포넌트
function ApiPracticeSection() {
  return (
    <section id="api-practice" className="space-y-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="h-1 w-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
            API 실습
          </h2>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          다양한 API 기능을 실시간으로 테스트해보세요.
        </p>
      </div>

      <Card className="overflow-hidden border-2 border-zinc-200/80 dark:border-zinc-800/80 shadow-xl shadow-rose-500/5 dark:shadow-rose-500/10">
        <CardHeader className="pb-3">
          <Tabs defaultValue="guestbook" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-zinc-100/50 dark:bg-zinc-800/50 p-1.5 rounded-xl">
              <TabsTrigger
                value="guestbook"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-rose-600 dark:data-[state=active]:bg-zinc-900 dark:data-[state=active]:text-rose-400 transition-all duration-200 hover:scale-[1.02]"
              >
                <MessageSquare className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                <span className="hidden sm:inline">방명록</span>
                <span className="sm:hidden">방명록</span>
              </TabsTrigger>
              <TabsTrigger
                value="like"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-rose-600 dark:data-[state=active]:bg-zinc-900 dark:data-[state=active]:text-rose-400 transition-all duration-200 hover:scale-[1.02]"
              >
                <Heart className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                <span className="hidden sm:inline">좋아요</span>
                <span className="sm:hidden">좋아요</span>
              </TabsTrigger>
              <TabsTrigger
                value="recommend"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-rose-600 dark:data-[state=active]:bg-zinc-900 dark:data-[state=active]:text-rose-400 transition-all duration-200 hover:scale-[1.02]"
              >
                <Sparkles className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                <span className="hidden sm:inline">랜덤 추천</span>
                <span className="sm:hidden">추천</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="guestbook" className="mt-6 animate-in fade-in-50 duration-300">
              <GuestbookTab />
            </TabsContent>

            <TabsContent value="like" className="mt-6 animate-in fade-in-50 duration-300">
              <LikeTab />
            </TabsContent>

            <TabsContent value="recommend" className="mt-6 animate-in fade-in-50 duration-300">
              <RecommendTab />
            </TabsContent>
          </Tabs>
        </CardHeader>
      </Card>
    </section>
  );
}

// 방명록 탭 컴포넌트
function GuestbookTab() {
  const [entries, setEntries] = useState<Array<{ id: string; name: string; message: string; createdAt: string }>>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // 방명록 목록 불러오기
  const fetchEntries = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/guestbook");
      if (response.ok) {
        const data = await response.json();
        setEntries(data);
      }
    } catch (error) {
      console.error("방명록을 불러오는 중 오류가 발생했습니다:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 컴포넌트 마운트 시 방명록 불러오기
  useEffect(() => {
    fetchEntries();
  }, []);

  // 방명록 작성
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      alert("이름과 메시지를 모두 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      });

      if (response.ok) {
        const newEntry = await response.json();
        setEntries([newEntry, ...entries]);
        setName("");
        setMessage("");
      } else {
        const error = await response.json();
        alert(error.error || "방명록 작성에 실패했습니다.");
      }
    } catch (error) {
      console.error("방명록 작성 중 오류가 발생했습니다:", error);
      alert("방명록 작성에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 방명록 삭제 확인 시작
  const handleDeleteClick = (id: string) => {
    setDeletingId(id);
  };

  // 방명록 삭제 취소
  const handleDeleteCancel = () => {
    setDeletingId(null);
  };

  // 방명록 삭제 실행
  const handleDeleteConfirm = async (id: string) => {
    try {
      const response = await fetch("/api/guestbook", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setEntries(entries.filter((entry) => entry.id !== id));
        setDeletingId(null);
      } else {
        const error = await response.json();
        alert(error.error || "방명록 삭제에 실패했습니다.");
        setDeletingId(null);
      }
    } catch (error) {
      console.error("방명록 삭제 중 오류가 발생했습니다:", error);
      alert("방명록 삭제에 실패했습니다.");
      setDeletingId(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-8">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-rose-500/10 rounded-2xl blur-xl" />
        <Card className="relative border-2 border-rose-100/50 dark:border-rose-900/30 bg-gradient-to-br from-white to-rose-50/30 dark:from-zinc-900 dark:to-rose-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900/30">
                <MessageSquare className="h-5 w-5 text-rose-600 dark:text-rose-400" />
              </div>
              방명록 남기기
            </CardTitle>
            <CardDescription>
              이름과 메시지를 남겨주세요. 실시간으로 방명록에 추가됩니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  이름
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={50}
                  placeholder="이름을 입력하세요"
                  className="w-full px-4 py-3 border-2 border-zinc-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  메시지
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={500}
                  rows={4}
                  placeholder="메시지를 입력하세요"
                  className="w-full px-4 py-3 border-2 border-zinc-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 resize-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  required
                />
                <div className="flex justify-between items-center">
                  <p className="text-xs text-zinc-500">{message.length}/500</p>
                </div>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/30 transition-all duration-200"
                size="lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    작성 중...
                  </span>
                ) : (
                  "방명록 남기기"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold">방명록 목록</h3>
          <Badge variant="secondary" className="bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
            {entries.length}개
          </Badge>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin" />
              <p className="text-sm text-zinc-500">로딩 중...</p>
            </div>
          </div>
        ) : entries.length === 0 ? (
          <Card className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/30">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <MessageSquare className="h-12 w-12 text-zinc-400 dark:text-zinc-600 mb-3" />
              <p className="text-sm text-zinc-500 font-medium">아직 방명록이 없습니다</p>
              <p className="text-xs text-zinc-400 mt-1">첫 번째 방명록을 남겨보세요!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {entries.map((entry, index) => (
              <Card
                key={entry.id}
                className="group relative overflow-hidden border-2 border-zinc-200/80 dark:border-zinc-800/80 bg-gradient-to-br from-white to-zinc-50/50 dark:from-zinc-900 dark:to-zinc-950/50 hover:border-rose-300 dark:hover:border-rose-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/10 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 via-pink-500/0 to-rose-500/0 group-hover:from-rose-500/5 group-hover:via-pink-500/5 group-hover:to-rose-500/5 transition-all duration-300" />
                <CardContent className="relative p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-rose-500/30">
                        {entry.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">{entry.name}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                        {formatDate(entry.createdAt)}
                      </span>
                      {deletingId === entry.id ? (
                        <div className="flex items-center gap-2 animate-in fade-in-50 duration-200">
                          <span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">삭제하시겠습니까?</span>
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => handleDeleteConfirm(entry.id)}
                            className="h-7 px-3 text-xs bg-rose-600 hover:bg-rose-700 text-white shadow-sm"
                          >
                            삭제
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleDeleteCancel}
                            className="h-7 px-3 text-xs text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                          >
                            취소
                          </Button>
                        </div>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteClick(entry.id)}
                          className="h-8 w-8 p-0 text-zinc-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:text-rose-400 dark:hover:bg-rose-950/30 transition-colors"
                          title="삭제"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap leading-relaxed ml-[52px]">
                    {entry.message}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// 좋아요 탭 컴포넌트
function LikeTab() {
  const [items, setItems] = useState<Array<{ id: string; title: string; description: string; count: number; createdAt: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // localStorage에서 좋아요 상태 불러오기
  useEffect(() => {
    const savedLikes = localStorage.getItem("vibe-coding-likes");
    if (savedLikes) {
      try {
        const parsed = JSON.parse(savedLikes);
        setLikedIds(new Set(parsed));
      } catch (error) {
        console.error("좋아요 상태를 불러오는 중 오류가 발생했습니다:", error);
      }
    }
  }, []);

  // 좋아요 상태를 localStorage에 저장
  const saveLikedIds = (ids: Set<string>) => {
    try {
      localStorage.setItem("vibe-coding-likes", JSON.stringify(Array.from(ids)));
    } catch (error) {
      console.error("좋아요 상태를 저장하는 중 오류가 발생했습니다:", error);
    }
  };

  // 좋아요 항목 목록 불러오기
  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/likes");
      if (response.ok) {
        const data = await response.json();
        setItems(data);
      }
    } catch (error) {
      console.error("좋아요 항목을 불러오는 중 오류가 발생했습니다:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 컴포넌트 마운트 시 항목 불러오기
  useEffect(() => {
    fetchItems();
  }, []);

  // 좋아요 토글 (인스타그램 스타일)
  const handleLikeToggle = async (id: string) => {
    const isLiked = likedIds.has(id);
    const newLikedIds = new Set(likedIds);

    if (isLiked) {
      // 좋아요 취소
      newLikedIds.delete(id);
    } else {
      // 좋아요 추가
      newLikedIds.add(id);
    }

    setLikedIds(newLikedIds);
    saveLikedIds(newLikedIds);

    // 서버에는 상태만 동기화 (실제 카운트는 서버에서 관리)
    // 같은 사용자의 좋아요는 카운트에 영향을 주지 않음
    try {
      await fetch("/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, action: isLiked ? "unlike" : "like" }),
      });
    } catch (error) {
      console.error("좋아요 상태 동기화 중 오류가 발생했습니다:", error);
      // 실패해도 클라이언트 상태는 유지
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-rose-500/10 rounded-2xl blur-xl" />
        <Card className="relative border-2 border-rose-100/50 dark:border-rose-900/30 bg-gradient-to-br from-white to-rose-50/30 dark:from-zinc-900 dark:to-rose-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900/30">
                <Heart className="h-5 w-5 text-rose-600 dark:text-rose-400" />
              </div>
              좋아요 투표
            </CardTitle>
            <CardDescription>
              좋아요 버튼을 누르면 숫자가 올라가는 투표 기능입니다.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin" />
              <p className="text-sm text-zinc-500">로딩 중...</p>
            </div>
          </div>
        ) : items.length === 0 ? (
          <Card className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/30">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Heart className="h-12 w-12 text-zinc-400 dark:text-zinc-600 mb-3" />
              <p className="text-sm text-zinc-500 font-medium">아직 투표 항목이 없습니다</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {items.map((item, index) => (
              <Card
                key={item.id}
                className="group relative overflow-hidden border-2 border-zinc-200/80 dark:border-zinc-800/80 bg-gradient-to-br from-white to-zinc-50/50 dark:from-zinc-900 dark:to-zinc-950/50 hover:border-rose-300 dark:hover:border-rose-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/10 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 via-pink-500/0 to-rose-500/0 group-hover:from-rose-500/5 group-hover:via-pink-500/5 group-hover:to-rose-500/5 transition-all duration-300" />
                <CardContent className="relative p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                    <Button
                      onClick={() => handleLikeToggle(item.id)}
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={`flex flex-col items-center justify-center gap-1 h-auto px-4 py-3 min-w-[80px] shadow-lg transition-all duration-200 ${
                        likedIds.has(item.id)
                          ? "bg-gradient-to-br from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white"
                          : "bg-gradient-to-br from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
                      } ${
                        hoveredId === item.id
                          ? "scale-110 shadow-xl shadow-rose-500/50"
                          : "hover:scale-105 shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40"
                      }`}
                    >
                      <Heart
                        className={`h-5 w-5 transition-all duration-200 ${
                          likedIds.has(item.id) ? "fill-white scale-110" : "fill-transparent"
                        } ${
                          hoveredId === item.id ? "scale-125" : ""
                        }`}
                      />
                      <span className="text-lg font-bold">
                        {item.count + (likedIds.has(item.id) ? 1 : 0)}
                      </span>
                      <span className="text-xs opacity-90">좋아요</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// 랜덤 추천 탭 컴포넌트
function RecommendTab() {
  const [recommendation, setRecommendation] = useState<{ id: string; text: string; author?: string; category: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // 랜덤 추천 문구 불러오기
  const fetchRecommendation = async (isRefresh = false) => {
    if (isRefresh) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }
    try {
      const response = await fetch("/api/recommendations");
      if (response.ok) {
        const data = await response.json();
        setRecommendation(data);
      }
    } catch (error) {
      console.error("추천 문구를 불러오는 중 오류가 발생했습니다:", error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  // 컴포넌트 마운트 시 추천 문구 불러오기
  useEffect(() => {
    fetchRecommendation();
  }, []);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "motivation":
        return "격려";
      case "quote":
        return "명언";
      case "coding":
        return "코딩";
      default:
        return "추천";
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-rose-500/10 rounded-2xl blur-xl" />
        <Card className="relative border-2 border-rose-100/50 dark:border-rose-900/30 bg-gradient-to-br from-white to-rose-50/30 dark:from-zinc-900 dark:to-rose-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900/30">
                <Sparkles className="h-5 w-5 text-rose-600 dark:text-rose-400" />
              </div>
              오늘의 한 줄 추천
            </CardTitle>
            <CardDescription>
              바이브 코딩을 시작하는 분들을 위한 격려 문구와 세계 명언을 랜덤으로 제공합니다.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <Card className="border-2 border-zinc-200/80 dark:border-zinc-800/80">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="h-8 w-8 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin mb-4" />
              <p className="text-sm text-zinc-500">추천 문구를 불러오는 중...</p>
            </CardContent>
          </Card>
        ) : recommendation ? (
          <Card className="group relative overflow-hidden border-2 border-rose-200/80 dark:border-rose-800/50 bg-gradient-to-br from-white via-rose-50/30 to-pink-50/30 dark:from-zinc-900 dark:via-rose-950/20 dark:to-pink-950/20 hover:border-rose-300 dark:hover:border-rose-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 via-pink-500/0 to-rose-500/0 group-hover:from-rose-500/5 group-hover:via-pink-500/5 group-hover:to-rose-500/5 transition-all duration-300" />
            <CardContent className="relative p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 shadow-lg shadow-rose-500/20">
                  <Sparkles className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                </div>
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-3 bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
                    {getCategoryLabel(recommendation.category)}
                  </Badge>
                  <p className="text-xl font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed mb-3">
                    "{recommendation.text}"
                  </p>
                  {recommendation.author && (
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 italic">
                      — {recommendation.author}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  onClick={() => fetchRecommendation(true)}
                  disabled={isRefreshing}
                  className="gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 transition-all duration-200"
                >
                  {isRefreshing ? (
                    <>
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      새로고침 중...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      다른 추천 보기
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/30">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Sparkles className="h-12 w-12 text-zinc-400 dark:text-zinc-600 mb-3" />
              <p className="text-sm text-zinc-500 font-medium">추천 문구를 불러올 수 없습니다</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
