import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// 랜덤 추천 문구 조회
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      // 특정 추천 문구 조회
      const { data, error } = await supabase
        .from("recommendations")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !data) {
        return NextResponse.json(
          { error: "추천 문구를 찾을 수 없습니다." },
          { status: 404 }
        );
      }

      const recommendation = {
        id: data.id,
        text: data.text,
        author: data.author,
        category: data.category,
      };

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
    console.log("Fetching recommendations from Supabase...");
    const { data, error, count } = await supabase
      .from("recommendations")
      .select("*", { count: "exact" });

    if (error) {
      console.error("Supabase error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "Failed to fetch recommendations", details: error.message },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      console.error("No recommendations found in database");
      return NextResponse.json(
        { error: "No recommendations found" },
        { status: 404 }
      );
    }

    console.log("Fetched recommendations:", data.length);

    // 랜덤 인덱스 선택
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomData = data[randomIndex];

    const recommendation = {
      id: randomData.id,
      text: randomData.text,
      author: randomData.author,
      category: randomData.category,
    };

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
    console.error("Error:", error);
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

