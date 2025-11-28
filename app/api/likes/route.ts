import { NextRequest, NextResponse } from "next/server";
import { getLikeItems, getLikeItem, incrementLike, addLikeItem } from "@/lib/likes";

// 좋아요 항목 목록 조회
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      // 특정 항목 조회
      const item = getLikeItem(id);
      if (!item) {
        return NextResponse.json(
          { error: "항목을 찾을 수 없습니다." },
          { status: 404 }
        );
      }
      return NextResponse.json(item, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // 전체 목록 조회
    const items = getLikeItems();
    return NextResponse.json(items, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
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

// 좋아요 증가 또는 새 항목 추가
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, description } = body;

    // 기존 항목에 좋아요 추가 (다른 사용자들의 좋아요만 카운트)
    if (id) {
      const action = body.action; // 'like' or 'unlike'
      const item = getLikeItem(id);
      if (!item) {
        return NextResponse.json(
          { error: "항목을 찾을 수 없습니다." },
          { status: 404 }
        );
      }
      // action이 없으면 기존 동작 (호환성 유지)
      // 실제로는 클라이언트에서 좋아요 상태를 관리하고, 서버는 전체 카운트만 반환
      return NextResponse.json(item, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // 새 항목 추가
    if (!title || !description) {
      return NextResponse.json(
        { error: "제목과 설명은 필수입니다." },
        { status: 400 }
      );
    }

    if (title.trim().length === 0 || description.trim().length === 0) {
      return NextResponse.json(
        { error: "제목과 설명은 비어있을 수 없습니다." },
        { status: 400 }
      );
    }

    if (title.length > 100) {
      return NextResponse.json(
        { error: "제목은 100자 이하여야 합니다." },
        { status: 400 }
      );
    }

    if (description.length > 500) {
      return NextResponse.json(
        { error: "설명은 500자 이하여야 합니다." },
        { status: 400 }
      );
    }

    const newItem = addLikeItem(title, description);
    return NextResponse.json(newItem, {
      status: 201,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
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

// CORS 옵션 처리
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

