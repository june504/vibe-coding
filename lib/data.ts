export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  repo: string;
  live: string;
  image: string;
  highlights: string[];
};

export type Experience = {
  period: string;
  role: string;
  details: string[];
};

export type Contact = {
  label: string;
  value: string;
  link: string;
};

export type ProfileData = {
  name: string;
  title: string;
  description: string;
  bio: string[];
  skills: string[];
  projects: Project[];
  experiences: Experience[];
  contacts: Contact[];
};

export const profileData: ProfileData = {
  name: "바이브 코딩",
  title: "프론트엔드 엔지니어",
  description:
    "비즈니스 성장을 견인하는 인터페이스를 설계하고 구현합니다. 제품의 목적에 집중하며, 데이터 기반 실험으로 사용자 경험을 개선합니다.",
  bio: [
    "최근에는 복잡한 데이터를 시각적으로 이해하기 쉬운 UI로 번역하고, 디자인 시스템을 구축해 일관된 경험을 제공하는 데 집중하고 있습니다.",
    "이 섹션을 자신의 소개, 커리어 목표, 일하는 방식 등으로 교체하면 포트폴리오의 톤앤매너를 빠르게 설정할 수 있습니다.",
  ],
  skills: [
    "TypeScript",
    "Next.js",
    "React Query",
    "Node.js",
    "Tailwind CSS",
    "Storybook",
  ],
  projects: [
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
  ],
  experiences: [
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
  ],
  contacts: [
    {
      label: "이메일",
      value: "hello@vibecoding.dev",
      link: "mailto:hello@vibecoding.dev",
    },
    {
      label: "GitHub",
      value: "github.com/vibe-coding",
      link: "https://github.com/vibe-coding",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/vibe-coding",
      link: "https://linkedin.com/in/vibe-coding",
    },
  ],
};

