// 좋아요 항목 타입
export type LikeItem = {
  id: string;
  title: string;
  description: string;
  count: number;
  createdAt: string;
};

// 간단한 인메모리 저장소 (실제 프로덕션에서는 데이터베이스 사용 권장)
let likeItems: LikeItem[] = [];

// 초기 샘플 데이터
if (likeItems.length === 0) {
  likeItems = [
    {
      id: "1",
      title: "바이브 코딩의 Next.js 포트폴리오가 마음에 드시나요?",
      description: "웹사이트 디자인과 기능에 대한 의견을 남겨주세요",
      count: 127,
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "API 실습 기능이 유용한가요?",
      description: "방명록, 좋아요, 랜덤 추천 기능에 대한 평가",
      count: 89,
      createdAt: new Date().toISOString(),
    },
    {
      id: "3",
      title: "바이브 코딩의 개발 스킬이 인상적이신가요?",
      description: "TypeScript, Next.js, React 등 기술 스택에 대한 평가",
      count: 156,
      createdAt: new Date().toISOString(),
    },
    {
      id: "4",
      title: "추가로 구현했으면 하는 기능이 있나요?",
      description: "다음에 추가할 기능에 대한 제안",
      count: 43,
      createdAt: new Date().toISOString(),
    },
  ];
}

export function getLikeItems(): LikeItem[] {
  return [...likeItems];
}

export function getLikeItem(id: string): LikeItem | undefined {
  return likeItems.find((item) => item.id === id);
}

export function incrementLike(id: string): LikeItem | null {
  const item = likeItems.find((item) => item.id === id);
  if (item) {
    item.count += 1;
    return { ...item };
  }
  return null;
}

export function addLikeItem(title: string, description: string): LikeItem {
  const newItem: LikeItem = {
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    title: title.trim(),
    description: description.trim(),
    count: 0,
    createdAt: new Date().toISOString(),
  };
  
  likeItems.push(newItem);
  return newItem;
}

