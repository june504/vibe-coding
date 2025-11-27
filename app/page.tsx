 "use client";

import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Link as LinkIcon, Mail } from "lucide-react";
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
              <Button asChild className="gap-2">
                <a href="#projects">
                  주요 프로젝트 보기
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
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
                    <Button asChild size="sm" variant="ghost" className="gap-1">
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="gap-1">
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
                            <Button asChild variant="ghost" className="justify-start gap-2">
                              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                                GitHub 저장소
                              </a>
                            </Button>
                            <Button asChild variant="ghost" className="justify-start gap-2">
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <LinkIcon className="h-4 w-4" />
                                라이브 데모
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <DialogFooter className="gap-2">
                        <Button variant="secondary" asChild size="sm">
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            실제 화면 보기
                          </a>
                        </Button>
                        <Button asChild size="sm">
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
                <div key={contact.label} className="space-y-2 rounded-2xl border border-zinc-100 p-3 dark:border-zinc-800">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-zinc-500">
                    <contact.icon className="h-4 w-4 text-rose-500" />
                    {contact.label}
                  </div>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-rose-500 hover:underline"
                  >
                    {contact.value}
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
