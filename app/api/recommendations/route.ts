import { NextResponse } from "next/server";
import { getRandomRecommendation, getAllRecommendations, getRecommendationById } from "@/lib/recommendations";

// 랜덤 추천 문구 조회
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      // 특정 추천 문구 조회
      const recommendation = getRecommendationById(id);
      if (!recommendation) {
        return NextResponse.json(
          { error: "추천 문구를 찾을 수 없습니다." },
          { status: 404 }
        );
      }
      return NextResponse.json(recommendation, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // 랜덤 추천 문구 반환
    const recommendation = getRandomRecommendation();
    return NextResponse.json(recommendation, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
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
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

