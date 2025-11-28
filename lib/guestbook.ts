// 방명록 데이터 타입
export type GuestbookEntry = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
};

// 간단한 인메모리 저장소 (실제 프로덕션에서는 데이터베이스 사용 권장)
// ⚠️ 주의: 이제 Supabase 데이터베이스를 사용하므로 아래 코드는 사용되지 않습니다.
let guestbookEntries: GuestbookEntry[] = [];

// 초기 샘플 데이터 (주석처리됨 - Supabase 데이터베이스 사용)
// if (guestbookEntries.length === 0) {
//   guestbookEntries = [
//     {
//       id: "1",
//       name: "방문자1",
//       message: "멋진 포트폴리오네요!",
//       createdAt: new Date().toISOString(),
//     },
//     {
//       id: "2",
//       name: "방문자2",
//       message: "좋은 작업물들이 많네요. 응원합니다!",
//       createdAt: new Date().toISOString(),
//     },
//   ];
// }

export function getGuestbookEntries(): GuestbookEntry[] {
  return [...guestbookEntries].reverse(); // 최신순으로 정렬
}

export function addGuestbookEntry(name: string, message: string): GuestbookEntry {
  const newEntry: GuestbookEntry = {
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    name: name.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };
  
  guestbookEntries.push(newEntry);
  return newEntry;
}

export function deleteGuestbookEntry(id: string): boolean {
  const index = guestbookEntries.findIndex((entry) => entry.id === id);
  if (index !== -1) {
    guestbookEntries.splice(index, 1);
    return true;
  }
  return false;
}

