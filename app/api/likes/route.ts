import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// 좋아요 항목 목록 조회
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      // 특정 항목 조회
      const { data, error } = await supabase
        .from("likes")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !data) {
        return NextResponse.json(
          { error: "항목을 찾을 수 없습니다." },
          { status: 404 }
        );
      }

      const item = {
        id: data.id,
        title: data.title,
        description: data.description,
        count: data.count,
        createdAt: data.created_at,
      };

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
    console.log("Fetching like items from Supabase...");
    const { data, error } = await supabase
      .from("likes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "Failed to fetch like items", details: error.message },
        { status: 500 }
      );
    }

    console.log("Fetched like items:", data?.length || 0);

    const items = data.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      count: item.count,
      createdAt: item.created_at,
    }));

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
    console.error("Error:", error);
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

    // 기존 항목 조회 (좋아요는 클라이언트에서 관리하므로 서버는 카운트만 반환)
    if (id) {
      const { data, error } = await supabase
        .from("likes")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !data) {
        return NextResponse.json(
          { error: "항목을 찾을 수 없습니다." },
          { status: 404 }
        );
      }

      const item = {
        id: data.id,
        title: data.title,
        description: data.description,
        count: data.count,
        createdAt: data.created_at,
      };

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

    const { data, error } = await supabase
      .from("likes")
      .insert([
        {
          title: title.trim(),
          description: description.trim(),
          count: 0,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to create like item" },
        { status: 500 }
      );
    }

    const newItem = {
      id: data.id,
      title: data.title,
      description: data.description,
      count: data.count,
      createdAt: data.created_at,
    };

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

