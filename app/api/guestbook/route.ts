import { NextRequest, NextResponse } from "next/server";
import { getGuestbookEntries, addGuestbookEntry, deleteGuestbookEntry } from "@/lib/guestbook";

// 방명록 목록 조회
export async function GET() {
  try {
    const entries = getGuestbookEntries();
    return NextResponse.json(entries, {
      status: 200,
      headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// 방명록 작성
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message } = body;

    // 유효성 검사
    if (!name || !message) {
      return NextResponse.json(
        { error: "이름과 메시지는 필수입니다." },
        { status: 400 }
      );
    }

    if (name.trim().length === 0 || message.trim().length === 0) {
      return NextResponse.json(
        { error: "이름과 메시지는 비어있을 수 없습니다." },
        { status: 400 }
      );
    }

    if (name.length > 50) {
      return NextResponse.json(
        { error: "이름은 50자 이하여야 합니다." },
        { status: 400 }
      );
    }

    if (message.length > 500) {
      return NextResponse.json(
        { error: "메시지는 500자 이하여야 합니다." },
        { status: 400 }
      );
    }

    const newEntry = addGuestbookEntry(name, message);
    return NextResponse.json(newEntry, {
      status: 201,
      headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// 방명록 삭제
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: "삭제할 방명록 ID가 필요합니다." },
        { status: 400 }
      );
    }

    const deleted = deleteGuestbookEntry(id);
    
    if (!deleted) {
      return NextResponse.json(
        { error: "방명록을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "방명록이 삭제되었습니다." },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// CORS 옵션 처리
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

