// 추천 문구 타입
export type Recommendation = {
  id: string;
  text: string;
  author?: string;
  category: "motivation" | "quote" | "coding";
};

// 추천 문구 데이터
const recommendations: Recommendation[] = [
  // 바이브 코딩을 처음 겪는 사람들을 위한 격려 문구
  {
    id: "1",
    text: "코딩은 처음엔 어렵게 느껴질 수 있지만, 한 줄 한 줄 쌓아가면 분명히 성장합니다.",
    category: "motivation",
  },
  {
    id: "2",
    text: "에러는 실패가 아니라 배움의 기회입니다. 에러 메시지를 읽고 해결하는 과정에서 실력이 늡니다.",
    category: "motivation",
  },
  {
    id: "3",
    text: "완벽한 코드보다 작동하는 코드가 먼저입니다. 일단 만들어보고, 점진적으로 개선해나가세요.",
    category: "motivation",
  },
  {
    id: "4",
    text: "다른 사람의 코드를 이해하는 것도 중요한 학습입니다. 오픈소스를 읽고 배워보세요.",
    category: "motivation",
  },
  {
    id: "5",
    text: "하루에 조금씩이라도 코딩을 하면, 몇 달 후 놀라운 변화를 발견할 수 있습니다.",
    category: "motivation",
  },
  {
    id: "6",
    text: "구글 검색은 개발자의 가장 좋은 친구입니다. 모르는 것이 있으면 당당하게 검색하세요.",
    category: "motivation",
  },
  {
    id: "7",
    text: "코딩은 혼자 하는 것이 아닙니다. 커뮤니티와 함께 성장하세요.",
    category: "motivation",
  },
  {
    id: "8",
    text: "작은 프로젝트부터 시작하세요. 완성하는 경험이 큰 힘이 됩니다.",
    category: "motivation",
  },
  // 세계 명언
  {
    id: "9",
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "quote",
  },
  {
    id: "10",
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "quote",
  },
  {
    id: "11",
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "quote",
  },
  {
    id: "12",
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    category: "quote",
  },
  {
    id: "13",
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "quote",
  },
  {
    id: "14",
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: "quote",
  },
  {
    id: "15",
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
    category: "quote",
  },
  {
    id: "16",
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "quote",
  },
  {
    id: "17",
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "quote",
  },
  {
    id: "18",
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "quote",
  },
  // 코딩 관련 명언
  {
    id: "19",
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    category: "coding",
  },
  {
    id: "20",
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    category: "coding",
  },
  {
    id: "21",
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    category: "coding",
  },
  {
    id: "22",
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    category: "coding",
  },
  {
    id: "23",
    text: "The best way to get a project done faster is to start sooner.",
    author: "Jim Highsmith",
    category: "coding",
  },
  {
    id: "24",
    text: "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
    category: "coding",
  },
  {
    id: "25",
    text: "Testing leads to failure, and failure leads to understanding.",
    author: "Burt Rutan",
    category: "coding",
  },
  {
    id: "26",
    text: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
    category: "coding",
  },
  {
    id: "27",
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
    category: "coding",
  },
  {
    id: "28",
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    category: "coding",
  },
];

export function getRandomRecommendation(): Recommendation {
  const randomIndex = Math.floor(Math.random() * recommendations.length);
  return recommendations[randomIndex];
}

export function getAllRecommendations(): Recommendation[] {
  return [...recommendations];
}

export function getRecommendationById(id: string): Recommendation | undefined {
  return recommendations.find((rec) => rec.id === id);
}

