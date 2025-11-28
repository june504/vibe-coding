# 환경 변수 설정 가이드

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```
NEXT_PUBLIC_SUPABASE_URL=https://efvpzotvvmambkracdym.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmdnB6b3R2dm1hbWJrcmFjZHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzMDE0MzcsImV4cCI6MjA3OTg3NzQzN30.eXKw7RcIbNrOImFy7oNKLWE0ncRXO5RssJo4V1jkfbw
```

## 중요 사항

- `.env.local` 파일은 `.gitignore`에 포함되어 있어 Git에 커밋되지 않습니다.
- 환경 변수를 변경한 후에는 개발 서버를 재시작해야 합니다.

